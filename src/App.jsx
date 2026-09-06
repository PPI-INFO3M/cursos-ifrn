import { Routes, Route } from 'react-router-dom'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import Inicio from './pages/Inicio'
import Informática from './pages/Informática'
import Alimentos from './pages/Alimentos'
import Apicultura from './pages/Apicultura'
import './App.css'

function App() {
  return (
    <div className="App">
      <Cabecalho />

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/informatica" element={<Informática />} />
          <Route path="/alimentos" element={<Alimentos />} />
          <Route path="/apicultura" element={<Apicultura />} />
        </Routes>
      </main>

      <Rodape />
    </div>
  )
}

export default App
