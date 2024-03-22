import React from 'react'
import RegistrarUsuarios from './components/RegistrarUsuarios'
import ListarUsuarios from './components/ListarUsuarios'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/listar' element={<ListarUsuarios/>}/>
      <Route path='/' element={<RegistrarUsuarios/>}/>
    </Routes>
  )
}

export default App
