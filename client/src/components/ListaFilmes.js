import React from "react";

const ListaFilmes = props => {
    const FavoritoComponent = props.favoritoComponent;
    return (
        <div className="container">
        {
        props.identificador === 'favoritos' ? 
        <h1>Minha Lista</h1>
        :
        <h1>Filmes</h1>
        }
        <div className="lista-filme-container">
            {props.filmes.map((filme, index) => {
                return (
                    <div className="filme">
                        {
                            filme.poster_path ? <img src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`} alt="" />
                                : <img src="https://via.placeholder.com/300x450" alt="" />
                        }
                        <div className="filme-overlay" onClick={() => props.handleFavoritoClick(filme)}>
                            <FavoritoComponent />
                        </div>
                        <div className="filme-info">
                        </div>
                    </div>
                )
            })}
        </div >
        </div>
    );
}

export default ListaFilmes; 