import './App.css'
import './css/main_page.css'
import './css/fechas_page.css'
import './css/tablaLlamadasFiltradas.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BotonPage from "./components/BotonPage"
import FechaLlamada from './components/FechaLlamada';
import LlamadaEncuesta from './components/llamadaEncuesta';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BotonPage/>}/>
        <Route path="/filtrarLlamadas" element={<FechaLlamada/>}/>
        <Route path="/llamadaEncuesta" element={<LlamadaEncuesta/>}/>
      </Routes>
    </Router>
  )
}

export default App
