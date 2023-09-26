import { useEffect } from 'react'
import './App.css'
import { fetchData } from './utils/api'
import { DetalleAgente, Hero, HomeAgentes, HomeMapas, Navbar } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Agentes, Home } from './pages'
//react router dom

function App() {




  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/agent" element={<Agentes />} />
        <Route path="/detalleAgent/:id" element={<DetalleAgente />} />
        <Route path="/map" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
