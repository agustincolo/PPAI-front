import React from 'react';

const TablaLlamadasFiltradas = ({ llamadasFiltradas }) => (
    <>
  <div className="table-container d-flex justify-content-center">
  <table id="table" className="table table-bordered table-primary">
    <thead>
      <tr className="text-center">
        <th scope='col'>Id Llamada</th>
        <th scope="col">Nombre Cliente</th>
        <th scope="col">Duración</th>
        <th scope='col'>Consultar</th>
        {/* <th scope="col">Fecha Llamada</th>
        <th scope="col">Respuestas Cliente</th> */}
      </tr>
    </thead>
    <tbody className="bod-table">
      {llamadasFiltradas &&
        llamadasFiltradas.map((llamada, index) => (
          <tr key={llamada.id}>
            <td>{llamada.id}</td>
            <td>{llamada.nombreCliente}</td>
            <td>{llamada.duracion}</td>
            <td><button className='btn'><i className="fa-solid fa-user-pen"></i></button>
              
              </td>
            {/* <td>{llamada.fechaLlamada}</td>
            <td>
              {llamada.respuestaCliente &&
                llamada.respuestaCliente.map((respuesta, index) => (
                  <div key={index}>
                    Pregunta: {respuesta.respuestaSeleccionada.pregunta.pregunta}
                    <br />
                    Respuesta Seleccionada: {respuesta.respuestaSeleccionada.descripcion}
                  </div>
                ))}
            </td> */}
          </tr>
        ))}
    </tbody>
  </table>
  </div>
  </>
);

export default TablaLlamadasFiltradas;