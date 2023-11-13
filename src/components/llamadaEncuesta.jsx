import { useEffect } from "react";
import {useEncuesta} from "../storage/useEncuesta"
import { format } from 'date-fns';
import {generarCSV} from '../service/back.service'

const LlamadaEncuesta = () => {
    const {encuesta_data, llamada_id} = useEncuesta()
    console.log(encuesta_data, llamada_id)

    if (!encuesta_data || !llamada_id) {
        return <p>Cargando...</p>;
      }
    
    const sendCSV = async () => {
        await generarCSV(encuesta_data, llamada_id)
    }


    return (
    <>
        <h1>Detalles de la Encuesta</h1>
        <p>Nombre Cliente: {llamada_id.nombreCliente}</p>
        <span>Estado: {llamada_id.cambioEstado.nombreEstado}</span>
        <p>Fecha: {format(new Date(llamada_id.fechaLlamada), "yyyy-MM-dd'")}</p>
        <p>Encuesta: {encuesta_data.descripcionEncuesta}</p>
        <div className="table-container d-flex justify-content-center">

        <table id="table" className="table table-bordered table-primary">
          <thead>
            <tr className="text-center">
              <th scope='col'>Id Llamada</th>
              <th scope="col">Pregunta</th>
              <th scope="col">Respuesta</th>
            </tr>
          </thead>
          <tbody className="bod-table">
            {llamada_id &&
                <tr>
                  <td>{llamada_id.id}</td>
                  <td>
                    {encuesta_data  &&
                      encuesta_data.preguntas.map((preguntas, index) => (
                        <div key={index}>
                         {preguntas ? preguntas : null}
                        </div>
                      ))}
                  </td>
                  <td>
                  {encuesta_data  &&
                      encuesta_data.respuestas.map((respuestas, index) => (
                        <div key={index}>
                          {respuestas ? respuestas : null}
                        </div>
                      ))}
                  </td>
                </tr>
              }
          </tbody>
        </table>
        
        </div>
        <div className="d-flex justify-content-center">
            <button className="btn btn-primary" onClick={sendCSV}>Crear CSV</button>
        </div>
    </>
  );

}

export default LlamadaEncuesta;