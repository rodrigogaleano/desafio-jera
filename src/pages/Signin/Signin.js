import React, { useState } from "react";
import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Signin() {

    const { signin } = useAuth(); //Cria o estado de autenticação
    const navigate = useNavigate(); //Cria o estado de navegação

    const [email, setEmail] = useState(""); //Cria o estado de e-mail
    const [senha, setSenha] = useState(""); //Cria o estado de senha
    const [error, setError] = useState(""); //Cria o estado de erro

    //Função para fazer o login
    const handleLogin = () => { 
        if (!email || !senha) { //Se o e-mail ou a senha estão vazios
            setError("Preencha todos os campos"); //Atualiza o estado de erro
            return; //Retorna
        }

        const res = signin(email, senha); //Faz o login

        //Se o login foi bem sucedido
        if (res) {
            setError(res); //Atualiza o estado de erro
            return; //Retorna
        }
        
        
        navigate("/home"); //Redireciona para a página home
    }

    return (
        <div className="signin-container">
            <div className="signin-content">
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
                <span className="erro">{error}</span>
                <button onClick={(handleLogin)}>
                    Entrar
                </button>
                <span>Não tem uma conta?</span>
                <Link to="/signup" className="cadastrar">Cadastre-se</Link>
            </div>
        </div>
    );
}

export default Signin;