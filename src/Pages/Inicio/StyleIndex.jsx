import styled, {keyframes} from "styled-components";

export const sectionPrincipal = styled.section`
    display: flex;
    justify-content: space-around;
    height: 80vh;

    .logo{
        width: 20vw;
        margin-top: 120px;
    }

    @media (max-width: 900px) {
        .logo{
            width: 65vw;
            margin: 80px 0 0 60px;
        }
    }
`
export const Section = styled.section`

    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20vh;
    width: 40vw;

    div{
        width: 10vw;
        display: flex;
        margin-top: 38px;
        justify-content: space-around;
        gap: 55px;
    }

    a{
        text-decoration: none;
        color: #8a56bf;
        font-weight: 700;

        &:hover {
            transform: scale(1.8);
        }
    }

    @media (max-width: 900px){

        div{
            width: 50vw;
            margin-left: 80px;
        }
    }
    
`
const typing = keyframes`
    from {
        width: 0;
    }
`;

const blinking = keyframes`
    50% {
        border-color: transparent;
    }
`;

export const P = styled.p`
    font-size: 28px;
    font-weight: 700;
    margin-top: 25px; 
    color:  #7e21dbba;
    width: 24ch;
    border-right: 4px solid;
    white-space: nowrap;
    overflow: hidden;
    animation: ${typing} 2s steps(24), ${blinking} 0.5s infinite step-end alternate;
    
    
    @media (max-width: 800px){
        font-size: 20px;
        margin-left: 120px;
    }
`

export const Img = styled.img`
    width: 40vw;

    @media (max-width: 900px) {
        display: none;
    }
`
export const imgPetalas = styled.img`
    width: 10vw;
    
    transform: translateX(0px);
    animation: float 5s ease-in-out infinite;

    @keyframes float{
        0%{
            transform: translateX(0px);
        }
        50%{
            transform: translateX(-18px);
        }
        100%{
            transform: translateX(0px);
        }
    }

    @media (max-width: 800px){
        display: none;
    }
`

export const imagTotoro = styled.img`
    width: 140px;
    position: absolute;
    bottom: 250px;
    right: 280px;

    @media (max-width: 950px){
        display: none;
    }
`
