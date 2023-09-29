import './App.css'
import { DetalleAgente, Navbar } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Agentes, Home, Mapas } from './pages'
//react router dom

function App() {




  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/agent" element={<Agentes />} />
        <Route path="/detalleAgent/:id" element={<DetalleAgente />} />
        <Route path="/map" element={<Mapas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
