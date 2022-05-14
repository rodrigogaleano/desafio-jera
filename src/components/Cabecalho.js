import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';

const Cabecalho = () => {

    const {signout} = useAuth();
    const navigate = useNavigate();

    return (
        <header>
            <div className="cabecalho-container">
                <h1>RODFLIX</h1>
                <button onClick={()=>[signout(), navigate('/')]}>Sair</button>
            </div>
        </header>
    )
}

export default Cabecalho; 