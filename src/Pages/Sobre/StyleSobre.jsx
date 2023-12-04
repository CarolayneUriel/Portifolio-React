import styled from "styled-components";

export const SectionSobre = styled.section`

   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   height: 90vh;

   .minha-foto{
    width: 12vw;
    border-radius: 100%;
    margin-bottom: 15px;

    @media (max-width: 900px) {
         width: 40vw;
      }
   }   
   .section-conteudo{
      display: flex;
      justify-content: space-evenly;
      width: 95vw;

      @media (max-width: 900px) {
         flex-direction: column;
      }
   }

   @media (max-width: 900px) {
         width: auto;
         height: auto;
      }

`
export const P = styled.section`
   width: 48vw;
   color: #7d21db;
   word-spacing: 9px;
   line-height: 36px;
   font-size: 24px;
   font-weight: 700;
   font-family: 'Roboto', sans-serif;
   margin-top: 15px;

   @media (max-width: 800px){
      width: 340px;
      margin-left: 10px;
      font-size: 20px;
      word-spacing: 7px;
      line-height: 24px;
   }
`
export const sectionImage = styled.section`
   display: flex;
   flex-direction: column;
  

   img{
      width: 6vw;
      height: 13vh;
      margin: 15px;
      border-radius: 40%;

      @media (max-width: 700px){
         width: 15vw;
         height: 10vh;
      }
   }
`

