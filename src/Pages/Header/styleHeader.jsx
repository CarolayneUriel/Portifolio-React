import styled from "styled-components";

export const styleHeader = styled.header`
    display: flex;
    height: 12vh;
    align-items: center;
    justify-content: center;
    background-color: #a44ff8e3;
    
`

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    width: 40vw;
    justify-content: space-around;
    font-weight: 700;
    font-size: 28px;
    a {
        display: inline-block;
        text-decoration: none;
        color: #3d0063;
        cursor: pointer;
    
        &:hover {
            transition: 0.8s;
            transform: scale(1.3);
            color: #eeeeee;
        }
    
    }
    @media (max-width: 800px){
        width: 80vw;
        font-size: 20px;
    }
    
    
`