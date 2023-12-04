import React from "react";
import * as S from "./StyleSobre";

import Carolayne from "../../assets/carolayne.png";
import Js from "../../assets/javascript.png";
import Html from "../../assets/html.png";
import LibReact from "../../assets/lib-react.png";
import Sass from "../../assets/sass.png";
import LibStyled from "../../assets/lib-styled.png";
import Git from "../../assets/git.png";



export default function Sobre(){

    return(
        <S.SectionSobre>
            <figure>
                <img src={Carolayne} alt="Minha foto" className="minha-foto"/>

            </figure>
            <section className="section-conteudo">
                <S.P>
                Desde abril, iniciei uma emocionante transição de carreira da confeitaria para o mundo da programação. 
                O primeiro passo foi mergulhar em um curso livre, onde tive meu primeiro contato com os códigos 
                e a cada linha de código, descobri uma nova paixão e percebi que a tecnologia era o caminho que eu realmente desejava seguir.

                Motivado por esse entusiasmo recém-descoberto, decidi embarcar em uma jornada acadêmica e atualmente estou matriculado no curso de 
                Ciência da Computação na faculdade. 
                
                Minha ambição é me tornar uma desenvolvedora fullstack, assim poder explora
                tanto o lado do front-end quanto do back-end para então poder desenvolver projetos mais dinâmicos e acessíveis.
                Estou ciente dos desafios que esse percurso pode apresentar, mas estou determinado a superá-los com dedicação, perseverança e paixão pelo que faço.
                </S.P>

                <S.sectionImage>
                    
                    <figure>
                        <img src={Js} alt="logo do JavaScript" />
                        <img src={Html} alt="logo do HTML" />
                        <img src={LibReact} alt="logo do React" />
                    </figure>

                    <figure>
                        <img src={Sass} alt="logo do sass" />
                        <img src={LibStyled} alt="logo do styled-components" />
                        <img src={Git} alt="logo do git" />
                    </figure>

                </S.sectionImage>
            </section>
        </S.SectionSobre>
    )
}