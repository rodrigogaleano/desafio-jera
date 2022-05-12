import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Signin() {

    const {signin} = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email || !senha) {
            setError("Preencha todos os campos");
            return;
        }

        const res = signin(email, senha);
        if (res) {
            setError(res);
            return;
        }
        navigate("/home");
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <input
                type="text"
                placeholder="E-mail"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <span>{error}</span>
            <button onClick={(handleLogin)}>
                Entrar
            </button>
            <span>Não tem uma conta?</span>
            <Link to="/signup">Cadastre-se</Link>
        </div>
    );
}

export default Signin;