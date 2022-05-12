import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_Token");
        const usersStorage = localStorage.getItem("users_db");

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );
            if (hasUser) {
                setUser(hasUser[0]);
            }
        }
    }, []);

    const signin = (email, senha) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));
        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].senha === senha) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_Token", JSON.stringify({ email, token }));
                setUser({ email, senha });
                return;
            } else {
                return "E-mail ou senha incorretos";
            }
        } else {
            return "Usuário não encontrado";
        }

    }

    const signup = (email, senha) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));
        const hasUser = usersStorage?.filter((user) => user.email === email);
        if (hasUser?.length) {
            return "E-mail já cadastrado";
        }
        let novoUser;

        if (usersStorage) {
            novoUser = [...usersStorage, { email, senha }];
        } else {
            novoUser = [{ email, senha }];
        }
        localStorage.setItem("users_db", JSON.stringify(novoUser));
        return;
    };

    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_Token");
    }

    return (
        <AuthContext.Provider
            value={{ user, signin, signup, signout }}
        >
            {children}
        </AuthContext.Provider>
    );
}