import React, { useState, useEffect, useRef } from "react";
import "./Login.css";

function Login() {

    const[isRegistrado, setIsRegistrado] = useState(false);
    const nomeRef = React.useRef();
    const emailRef = React.useRef();
    const senhaRef = React.useRef();
    const confirmaSenhaRef = React.useRef();

    // useEffect(() => {
    //     if (isRegistrado) {
    //         nomeRef.current.value = "";
    //         emailRef.current.value = "";
    //         senhaRef.current.value = "";
    //         confirmaSenhaRef.current.value = "";
    //     }
    // }, [isRegistrado]);

    function handleSubmit(event) {
        event.preventDefault();
        const nome = nomeRef.current.value;
        const email = emailRef.current.value;
        const senha = senhaRef.current.value;
        const confirmaSenha = confirmaSenhaRef.current.value;
        if (senha === confirmaSenha) {
            setIsRegistrado(true);
        } else {
        //    return dispatch({
        //         type: "ERRO_SENHA",
        //         payload: {
        //             open: true,
        //             severity: "error",
        //             message: "As senhas não conferem"
        //         },
        //    })

            alert("As senhas não conferem");
        }
    }

    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Registrar</h1>
                <form>
                    <input type="text" placeholder="Nome" ref={nomeRef} className="input-cadastro" />
                    <input type="email" placeholder="Email" ref={emailRef} className="input-cadastro"/>
                    <input type="password" placeholder="Senha" ref={senhaRef} className="input-cadastro"/>
                    <input type="password" placeholder="Confirmar Senha" ref={confirmaSenhaRef} className="input-cadastro"/>
                    <button onClick={handleSubmit}>Registrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;