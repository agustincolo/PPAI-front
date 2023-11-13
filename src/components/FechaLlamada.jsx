import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { filtrarLlamada } from "../service/back.service";

const FechaLlamada = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
    console.log(llamadasFiltradas);
  };



  return (
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
      />
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="Fecha de fin"
      />
      <button className='btn btn-primary' onClick={handleFilter}>Filtrar</button>
    </div>
    </>
  );
};

export default FechaLlamada;