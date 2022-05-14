import { createContext, useEffect, useState } from "react"; //Importa o contexto e o useEffect

export const AuthContext = createContext(); //Cria o contexto

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(); //Cria o estado de usuário

    useEffect(() => {
        const userToken = localStorage.getItem("user_Token"); //Pega o token do localStorage
        const usersStorage = localStorage.getItem("users_db"); //Pega o usuário do localStorage

        if (userToken && usersStorage) { //Se existe o token e o usuário
            const hasUser = JSON.parse(usersStorage)?.filter( //Filtra o usuário
                (user) => user.email === JSON.parse(userToken).email //Se o email do usuário for igual ao email do token
            );
            if (hasUser) { //Se existe o usuário
                setUser(hasUser[0]); //Atualiza o estado de usuário
            }
        }
    }, []); //Executa a função apenas uma vez

    //Função para salvar o usuário no localStorage
    const signin = (email, senha) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db")); //Pega o usuário do localStorage
        const hasUser = usersStorage?.filter((user) => user.email === email); //Filtra o usuário

        //Se existe o usuário e a senha está correta
        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].senha === senha) {
                const token = Math.random().toString(36).substring(2); //Gera um token
                localStorage.setItem("user_Token", JSON.stringify({ email, token })); //Salva o token no localStorage
                setUser({ email, senha }); //Atualiza o estado de usuário
                return;
            } else { //Se a senha está errada
                return "E-mail ou senha incorretos";  //Retorna a mensagem de erro
            }
        } else { //Se não existe o usuário
            return "Usuário não encontrado";  //Retorna a mensagem de erro
        }

    }

    const signup = (email, senha) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db")); //Pega o usuário do localStorage
        const hasUser = usersStorage?.filter((user) => user.email === email); //Filtra o usuário
        if (hasUser?.length) { //Se existe o usuário
            return "E-mail já cadastrado"; //Retorna a mensagem de erro
        }

        let novoUser; //Cria o novo usuário

        if (usersStorage) { //Se existe o usuário
            novoUser = [...usersStorage, { email, senha }]; //Adiciona o usuário a lista de usuários
        } else { //Se não existe o usuário
            novoUser = [{ email, senha }]; //Adiciona o novo usuário
        }
        localStorage.setItem("users_db", JSON.stringify(novoUser)); //Salva o usuário no localStorage
        return;
    };

    //Função para deslogar o usuário
    const signout = () => {
        setUser(null); //Atualiza o estado de usuário
        localStorage.removeItem("user_Token"); //Remove o token do localStorage
    }

    return (
        //Retorna o contexto com os métodos
        <AuthContext.Provider
            value={
                {
                    user, //Atualiza o estado de usuário
                    signed: !!user,  //Verifica se o usuário está logado
                    signin, //Método de login
                    signup, //Método de cadastro
                    signout //Método de logout
                }
            }
        >
            {children}
        </AuthContext.Provider>
    );
}