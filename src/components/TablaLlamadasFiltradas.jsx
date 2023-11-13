import React from 'react';
import { llamadaEncuesta } from "../service/back.service";
import { Link } from 'react-router-dom';
import { useEncuesta } from "../storage/useEncuesta"


const TablaLlamadasFiltradas = ({ llamadasFiltradas }) =>  {
  const {encuesta, llamada_seleccionada} = useEncuesta();
  const sendEncuesta = async (id, llamada) => {
    console.log(id, llamada)
    try {
      let encuestasData = await llamadaEncuesta(id);
      console.log(encuestasData)
      encuesta(encuestasData)
      llamada_seleccionada(llamada)
    } catch (error) {
      console.error('Error fetching encuestas', error);
    }
  };


return(
    <>
      <h2 className='d-flex justify-content-center'>Llamadas Filtradas</h2>
  <div className="table-container d-flex justify-content-center">

  <table id="table" className="table table-bordered table-primary">
    <thead>
      <tr className="text-center">
        <th scope='col'>Id Llamada</th>
        <th scope="col">Nombre Cliente</th>
        <th scope="col">Duración</th>
        <th scope='col'>Consultar</th>
      </tr>
    </thead>
    <tbody className="bod-table">
      {llamadasFiltradas &&
        llamadasFiltradas.map((llamada) => (
          <tr key={llamada.id}>
            <td>{llamada.id}</td>
            <td>{llamada.nombreCliente}</td>
            <td>{llamada.duracion}</td>
            <td>
              <Link to="/llamadaEncuesta">
                <button className='btn' onClick={() => sendEncuesta(llamada.id, llamada)}>
                  <i className="fa-solid fa-user-pen"></i>
                </button>
              </Link>
              </td>
          </tr>
        ))}
    </tbody>
  </table>
  </div>
  </>
);}

export default TablaLlamadasFiltradas;