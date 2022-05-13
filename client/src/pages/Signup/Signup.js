import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Signup() {

    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConf, setSenhaConf] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const {signup} = useAuth();
    
    const handleCadastro = () => {
        if (!email | !emailConf | !senha | !senhaConf) {
            setError("Preencha todos os campos");
            return;
        }else if (email !== emailConf) {
            setError("Os e-mails não coincidem");
            return;
        }
        const res = signup(email, senha);

        if (res) {
            setError(res);
            return;
        }

        alert("Cadastro realizado com sucesso!");
        navigate("/");
    }

    return (
        <div className="signin-container">
            <h1>Cadastrar</h1>
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
            <span>{error}</span>
            <button onClick={(handleCadastro)}>
                Cadastrar
            </button>
            <span>Já tem uma conta?</span>
            <Link to="/signin">Entrar</Link>
        </div>
    );
}

export default Signup;