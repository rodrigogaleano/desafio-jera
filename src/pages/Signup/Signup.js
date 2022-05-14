import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Signup.css";

function Signup() {

    const [nome, setNome] = useState(""); //Estado do nome
    const [dataNasc, setDataNas] = useState(""); //Estado da data de nascimento
    const [email, setEmail] = useState(""); //Estado do email
    const [emailConf, setEmailConf] = useState(""); //Estado do email de confirmação
    const [senha, setSenha] = useState(""); //Estado da senha
    const [senhaConf, setSenhaConf] = useState(""); //Estado da senha de confirmação
    const [error, setError] = useState(""); //Estado do erro

    //Navegar entre as páginas
    const navigate = useNavigate();
    const { signup } = useAuth(); 

    const handleCadastro = () => {
        if (!nome | !dataNasc | !email | !emailConf | !senha | !senhaConf) { //Verifica se todos os campos estão preenchidos
            setError("Preencha todos os campos");
            return;
        } else if (email !== emailConf) { //Verifica se os emails são iguais
            setError("Os e-mails não coincidem");
            return;
        }else if (senha !== senhaConf) { //Verifica se as senhas são iguais
            setError("As senhas não coincidem");
            return;
        }

        const res = signup(email, senha); //Chama a função de cadastro do Auth

        if (res) { //Verifica se o cadastro foi realizado com sucesso
            setError(res);
            return;
        }

        alert("Cadastro realizado com sucesso!"); //Alerta de cadastro realizado com sucesso
        navigate("/"); //Redireciona para a página inicial
    }

    return (
        <div className="signup-container">
            <div className="signup-content">
                <h1>Cadastrar</h1>
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => [setNome(e.target.value), setError("")]}
                />
                <input
                    type="date"
                    placeholder="Data de nascimento"
                    value={dataNasc}
                    onChange={(e) => [setDataNas(e.target.value), setError("")]}
                />
                <input
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <input
                    type="text"
                    placeholder="Confirmar E-mail"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <input
                    type="password"
                    placeholder="Confirmar Senha"
                    value={senhaConf}
                    onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
                />
                <span className="erro">{error}</span>
                <button onClick={(handleCadastro)}>
                    Cadastrar
                </button>
                <span>Já tem uma conta?</span>
                <Link to="/signin" className="entrar">Entrar</Link>
            </div>
        </div>
    );
}

export default Signup;