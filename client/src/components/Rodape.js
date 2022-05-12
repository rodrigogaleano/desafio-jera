import React from "react";
import githubImage from "../assets/socialmedia/github.png";
import linkedinImage from "../assets/socialmedia/linkedin.png";
import instagramImage from "../assets/socialmedia/instagram.png";


const Rodape = ()=>{
    return(
        <footer>
            <div className="rodape-container">
            <span>Desenvolvido por Rodrigo Galeano</span>
            <ul class="socialmedia">
                <li>
                    <a href="https://www.linkedin.com/in/rodrigogaleano/">
                        <img src={linkedinImage} alt=""/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/rodrigogaleano">
                        <img src={githubImage}   alt=""/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/rodrigo1galeano/" >
                        <img src={instagramImage}  alt=""/>
                    </a>
                </li>
            </ul>
            </div>
        </footer>
    );
}

export default Rodape; 