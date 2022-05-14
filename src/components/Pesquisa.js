import React from "react";

const Pesquisa = (props) => {
    return (
        <div className="pesquisa-container">
            <div className="pesquisa-content">
                <input
                    className="pesquisa-input"
                    type="text"
                    placeholder="Pesquisar"
                    value={props.Pesquisa}
                    onChange={(event) => props.setPesquisa(event.target.value)}
                />
            </div>
        </div>
    );
}

export default Pesquisa; 