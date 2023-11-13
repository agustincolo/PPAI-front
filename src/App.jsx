import './App.css'
import './css/main_page.css'
import './css/fechas_page.css'
import './css/tablaLlamadasFiltradas.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BotonPage from "./components/BotonPage"
import FechaLlamada from './components/FechaLlamada';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BotonPage/>}/>
        <Route path="/filtrarLlamadas" element={<FechaLlamada/>}/>
      </Routes>
    </Router>
  )
}

export default App
