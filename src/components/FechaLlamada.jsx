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
  const [errorMensaje, setErrorMensaje] = useState("");

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
 
    if (startDate === null || endDate === null) {
      setErrorMensaje("Por favor selecciona ambas fechas");
      return;
    }
    if (llamadasFiltradas && llamadasFiltradas.length > 0) {
      setLlamadasFiltradas(llamadasFiltradas);
      setErrorMensaje("");
      setMostrarTabla(true);
    }else {
      setErrorMensaje("No se encontraron llamadas para las fechas seleccionadas");
    }}

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
    <div className="error-mensaje" style={{ color: 'red' }}>
        {errorMensaje && <p>{errorMensaje}</p>}
      </div>
    </>
    ) : (
      <>
        <button className='btn btn-primary my-3 mx-3 py-3 px-3' onClick={handleAtrasClick}>Atras</button>

        {Array.isArray(llamadasFiltradas) && llamadasFiltradas.length > 0 ? (
        <TablaLlamadasFiltradas llamadasFiltradas={llamadasFiltradas} />
       ) : (
        
        
        <div className="container page_404">
            <div className="row">
                <div className="text-center">
                    <div className="four_zero_four_bg">
                        <h1 className="text-center texter">404</h1>
      
                    </div>
                    <div className="content_box_404">
                        <h3 className="lost">No se encontraron llamadas en ese rango de fechas</h3>
                
                    </div>
                </div>
            </div>
          </div>
    
        )}
      </>
      )}
    </>
  );
};

export default FechaLlamada;