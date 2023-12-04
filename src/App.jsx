import React from 'react'
import Header from "./Pages/Header/Header"
import Inicio from './Pages/Inicio'
import Sobre from './Pages/Sobre/Sobre'
import Projetos from './Pages/Projetos/Projetos'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import GlobalStyle from './Style/GlobalStyle'


export default function App() {

  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/projetos' element={<Projetos/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}


