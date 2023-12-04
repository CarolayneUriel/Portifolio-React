import React from "react";
import * as S from "./StyleProjetos";
import Outubro from "../../assets/outubro-rosa.png";
import Jogo from "../../assets/quiz.png";
import Dicionario from "../../assets/dicionario.png";
import Blogames from "../../assets/blogames.png";

export default function Projetos(){

    const conteudo = [
        {
            imag: Outubro,
            descricaoImg: "Foto do projeto outubro rosa",
            descricao: "Projeto feito em React, para testar o que estava aprendendo usei o Styled-Components para estilizar e o método Map. ",
            linkPojeto:"https://outubro-rosa-carolayne.vercel.app/",
            linkGithub:"https://github.com/CarolayneUriel/outubroRosa-VnW/tree/main",
        },

        {
            imag: Jogo,
            descricaoImg: "Foto do projeto jogo quiz",
            descricao: "Projeto feito em Javascript, HTML e CSS, criei inicialmente em cartões para monitora em astronomia, depois procurei passar para um joguinho que podesse utilizar no mobile.",
            linkPojeto:"https://quiz-jogo-carolyne-uriels-projects.vercel.app/",
            linkGithub:"https://github.com/CarolayneUriel/jogoQuiz",
        },

        {
            imag: Dicionario,
            descricaoImg: "Foto do projeto dicionário melheres negra",
            descricao: "Projeto feito em Javascript, HTML e CSS, feito em um curso, onde queriamos mostrar algumas das mulheres pretas que fizeram história. ",
            linkPojeto:"https://dicionario-programaria-html-css-javascript.vercel.app/",
            linkGithub:"https://github.com/CarolayneUriel/DicionarioProgramaria-HTML-CSS-Javascript",
        },

        {
            imag: Blogames,
            descricaoImg: "Foto do projeto jogo quiz",
            descricao: "Página feita  com HTML e CSS, fiz essa página inspirada no Figma da codelândia, desafio 39. ",
            linkPojeto:"https://blogames-codelandia-carolyne-uriels-projects.vercel.app/",
            linkGithub:"https://github.com/CarolayneUriel/blogamesCodelandia",
        }
    ]
    

    return(
        <S.sectionPrincipal>
            <S.H2>Projetos</S.H2>

            <S.sectionConteudo>
                {conteudo.map((item) => (
                    <div>
                        <img src={item.imag} alt={item.descricaoImg} />
                        <p>{item.descricao}</p>
                        <a href={item.linkPojeto} target="_blank" rel="noopener noreferrer">Ver página</a>
                        <a href={item.linkGithub} target="_blank" rel="noopener noreferrer"> Ver código no Github</a>

                    </div>   
                    
                ))}            
            </S.sectionConteudo>
        </S.sectionPrincipal>
    )
}