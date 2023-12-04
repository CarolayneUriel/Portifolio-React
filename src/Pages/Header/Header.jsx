import React from "react";
import {Link} from "react-router-dom"
import * as S from "./styleHeader"

export default function Header() {
    return (
        <S.styleHeader>
           <nav>
            <S.Ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                <Link to="/projetos">Pojetos</Link>
                </li>
            </S.Ul>
           </nav>
        </S.styleHeader>
    )
}
