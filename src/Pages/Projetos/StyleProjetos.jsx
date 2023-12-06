import styled from "styled-components";

export const sectionPrincipal = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`

export const H2 = styled.h2`
    font-size: 38px;
    color: #7d21db;
    margin-top: 20px;
    
`

export const sectionConteudo = styled.section`

    display: flex;
    margin-top: 25px;
    height: 90vh;
    flex-wrap: wrap;
    width: 60vw;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;

    
    img{
        width: 20vw;
        height: 25vh;
    }

    p{
        width: 22vw;
        color:  #7e21dbba;
        font-size: 20px;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
        word-spacing: 5px;
        line-height: 26px;
        margin: 15px 0 15px 0;
    }

    @media (max-width: 900px) {
        width: 90vw;
        height: auto;
        

        img{
            width: 50vw;
            height: 30vh;
            padding-top: 40px;
        }

        p{
            width: 70vw;
            padding: 18px;
        }
    }

`
export const Links = styled.a`
    
    text-decoration: none;
    color: #8a56bf;
    font-size: 20px;
    font-weight: 700;
    padding: 20px;
    display: inline-block;

    &:hover {
        transform: scale(1.5);
        color: #2e0244;
    }

    @media (max-width: 800px){
        font-size: 18px;
        font-weight: 500;
    }
`