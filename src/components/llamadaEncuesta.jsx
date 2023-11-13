import { useEffect, useState } from "react";
import {useEncuesta} from "../storage/useEncuesta"
import { format } from 'date-fns';
import {generarCSV} from '../service/back.service'
import { Link } from "react-router-dom";

const LlamadaEncuesta = () => {
    const {encuesta_data, llamada_id} = useEncuesta()
    const [mensaje_csv, setMensajeCSV] = useState("")
    console.log(encuesta_data, llamada_id)

    if (!encuesta_data || !llamada_id) {
        return <p>Cargando...</p>;
      }
    
    const sendCSV = async () => {
        let mensaje = await generarCSV(encuesta_data, llamada_id)
        console.log(mensaje)
        setMensajeCSV(mensaje);
        
    }


    return (
    <>
      <button className='btn btn-primary my-3 mx-3 py-3 px-3'><Link to="/filtrarLlamadas" className="a_link">Atras</Link></button>
      <div style={{ color: "black" }}>
        <h1 className="d-flex justify-content-center py-3">Detalles de la Encuesta</h1>
        <div className="py-3 ">
          <p className="ps">Nombre Cliente: {llamada_id.nombreCliente}</p>
          <p className="ps">Estado: {llamada_id.cambioEstado.nombreEstado}</p>
          <p className="ps">Fecha: {format(new Date(llamada_id.fechaLlamada), "yyyy-MM-dd'")}</p>
          <p className="ps">Encuesta: {encuesta_data.descripcionEncuesta}</p>
        </div>
      </div>
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
          {llamada_id && encuesta_data && (
            <tr>
              <td>{llamada_id.id}</td>
              <td>
                {encuesta_data.preguntas && encuesta_data.preguntas.length > 0 ? (
                  encuesta_data.preguntas.map((preguntas, index) => (
                    <div key={index}>{preguntas}</div>
                  ))
                ) : (
                  <div>Sin preguntas</div>
                )}
              </td>
              <td>
                {encuesta_data.respuestas && encuesta_data.respuestas.length > 0 ? (
                  encuesta_data.respuestas.map((respuestas, index) => (
                    <div key={index}>{respuestas}</div>
                  ))
                ) : (
                  <div>Sin respuestas</div>
                )}
              </td>
            </tr>
          )}
          </tbody>
        </table>
        
        </div>
        <div className="d-flex justify-content-center">
            <button className="btn btn-primary" onClick={sendCSV}>Crear CSV</button>
        </div>
        {mensaje_csv && (
        <div className={`text-center mt-3 ${mensaje_csv.includes("creado") ? "text-color alert alert-success" : "text-danger alert alert-success text-error"}`}>
          {mensaje_csv}
        </div>
      )}
    </>
  );

}

export default LlamadaEncuesta;