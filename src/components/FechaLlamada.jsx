import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { filtrarLlamada } from "../service/back.service";
import TablaLlamadasFiltradas from './TablaLlamadasFiltradas';

const FechaLlamada = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [llamadasFiltradas, setLlamadasFiltradas] = useState(null);
  const [mostrarTabla, setMostrarTabla] = useState(false);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleFilter = async () => {
    const formattedStartDate = startDate ? format(startDate, "yyyy-MM-dd'") : null;
    const formattedEndDate = endDate ? format(endDate, "yyyy-MM-dd'") : null;
    let llamadasFiltradas= await filtrarLlamada(formattedStartDate, formattedEndDate);
    console.log(llamadasFiltradas)
    setLlamadasFiltradas(llamadasFiltradas);
    
  
    setMostrarTabla(true);
  };

  const handleAtrasClick = () => {
    setMostrarTabla(false);
    setLlamadasFiltradas(null);
  };


  return (
    <>
    {!mostrarTabla ? (
        <>
    <h2 className='d-flex justify-content-center margin'>Selecciona una fecha para filtrar</h2>
    <div className='main_fechas'>
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Fecha de inicio"
        showYearDropdown
        scrollableYearDropdown
      />
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="Fecha de fin"
        showYearDropdown
        scrollableYearDropdown
      />
      <button className='btn btn-primary' onClick={handleFilter}>Filtrar</button>
    </div>
    </>
    ) : (
        <>
          <button className='btn btn-primary my-3 mx-3 py-3 px-3' onClick={handleAtrasClick}>Atras</button>
          
          {llamadasFiltradas && <TablaLlamadasFiltradas llamadasFiltradas={llamadasFiltradas} />}
        </>
      )}
    </>
  );
};

export default FechaLlamada;