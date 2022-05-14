import React, { useEffect, useState } from 'react'; //Importa o React
import './Home.css'
//Importa os componentes
import ListaFilmes from '../../components/ListaFilmes';
import Cabecalho from '../../components/Cabecalho';
import Pesquisa from '../../components/Pesquisa';
import AddFavorito from '../../components/AddFavorito';
import RemoverFavorito from '../../components/RemoverFavorito';
import Rodape from '../../components/Rodape';

function Home() { //Cria a função Home

    const [filmes, setFilmes] = useState([]); //Cria o estado de filmes
    const [favoritos, setFavoritos] = useState([]); //Cria o estado de favoritos
    const [pesquisa, setPesquisa] = useState(''); //Cria o estado de pesquisa

    const constularFilmes = async (pesquisa) => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=88ee9533acb6d4f3193bab7b9d06e012&language=pt-BR&query=${pesquisa}`; //Cria a url para consulta
        const response = await fetch(url); ///Faz a consulta
        const responseJson = await response.json(); //Transforma em json
        if (responseJson.results) { //Se existe resultados
            setFilmes(responseJson.results); //Atualiza o estado de filmes
        }
    }

    //Chama a função para consultar filmes quando o estado de pesquisa é alterado
    useEffect(() => {
        constularFilmes(pesquisa); //Passa o estado de pesquisa para a função
    }, [pesquisa]);

    useEffect(() => {
        const filmesFavoritos = JSON.parse(localStorage.getItem('react-jera-favoritos'));
        
        if (filmesFavoritos){
            setFavoritos(filmesFavoritos);
        } 
        
    }, []);

    const salvarLocalStorage = (items) => {
        localStorage.setItem('react-jera-favoritos', JSON.stringify(items)); //Salva no localStorage
    }

    const addFilmeFavorito = (filme) => {
        const novoFavorito = [...favoritos, filme]; //Cria um novo array com o filme adicionado
        setFavoritos(novoFavorito); //Atualiza o estado de favoritos
        salvarLocalStorage(novoFavorito); //Salva no localStorage
    }

    const RemoverFilmeFavorito = (filme) => {
        const novaListaFavorito = favoritos.filter(f => f.id !== filme.id);
        setFavoritos(novaListaFavorito);
        salvarLocalStorage(novaListaFavorito); //Salva no localStorage
    }


    return (
        <div>
            <Cabecalho />
            <Pesquisa
                pesquisa={pesquisa}
                setPesquisa={setPesquisa}
            />

            <ListaFilmes
                filmes={favoritos}
                identificador="favoritos"
                handleFavoritoClick={RemoverFilmeFavorito}
                favoritoComponent={RemoverFavorito}
            />

            <ListaFilmes
                filmes={filmes}
                identificador="filmes"
                handleFavoritoClick={addFilmeFavorito}
                favoritoComponent={AddFavorito}
            />
            <Rodape />
        </div>
    );
}

export default Home; 