import React from 'react'
import './pageStyle/app.scss'


import Home from './pages/Home'
import Search from './pages/Search'


import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/search' element={<Search/>} />
    </Routes>
    </>
  )
}

export default App