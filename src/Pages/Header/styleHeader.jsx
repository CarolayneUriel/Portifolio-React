import styled from "styled-components";

export const styleHeader = styled.header`
    display: flex;
    height: 12vh;
    align-items: center;
    justify-content: center;
    background-color: #9741ed;
    
`

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    width: 40vw;
    justify-content: space-around;
    font-weight: 700;
    font-size: 28px;
    a{
        text-decoration: none;
        color: #3d0063;
        cursor: pointer;

    }   
    @media (max-width: 800px){
        width: 80vw;
        font-size: 20px;
    }
    
    
`