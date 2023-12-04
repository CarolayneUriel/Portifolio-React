import React from "react"
import * as S from "./StyleIndex"

import Cerejeira from "../../assets/cerejeira.png"
import Petalas from "../../assets/petala.png"
import Totoro from "../../assets/totoro.png"
import Instagram from "../../assets/instagram.svg"
import Linkedin from "../../assets/linkedin.svg"
import Github from "../../assets/github.svg"
import Logo from "../../assets/logo.png"

export default function Inicio() {
    return (
        <S.sectionPrincipal>
            <S.Section>
                <img src={Logo} alt="figura de uma mulher negra de óculos com cabelo preto, cacheado e curto" className="logo" />
                <S.Div>

                    <S.P>Olá, eu sou Carolayne Uriel !</S.P>
                    
                   <div>
                        
                        <a href="" target="_blank">
                            <img src={Instagram} alt="" /> 
                        </a>
                        <a href="https://www.linkedin.com/in/carolayne-uriel-3509a1264/" target="_blank">
                            <img src={Linkedin} alt="" />
                        </a>

                        <a href="https://github.com/CarolayneUriel" target="_blank" >
                            <img src={Github} alt="" target="_blank" />
                        </a>
                   </div>
                    
                </S.Div>
            </S.Section>
            <figure>
                <S.imgPetalas src={Petalas} alt="pétalas da arvore de cerejeira"/>
                <S.Img src={Cerejeira} alt="arvore de cerejeira" />
            </figure>
            <figure>
                <S.imagTotoro src={Totoro} alt="personagem de uma animação japonesa" />
            </figure>
            
        </S.sectionPrincipal> 
    )
}

