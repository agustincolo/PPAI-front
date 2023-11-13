import axios from "axios";



export const filtrarLlamada = async (fechaInicio, fechaFin) => {
    try {
      let llamadas_filtradas = await axios.get(`http://localhost:8080/filtrarLlamadas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
      return llamadas_filtradas.data
    } catch (error) {
      return error.response.data
    }
};

export const llamadaEncuesta = async(id_llamada) => {
    try {
      let encuestaLlamada = await axios.get(`http://localhost:8080/llamadaEncuesta?idLlamada=${id_llamada}`)
      return encuestaLlamada.data;
    } catch (error) {
      return error.response.data;
    }
}

export const generarCSV = async (encuesta, llamada_id) => {
  try {
   
    let obj = {nombreCliente: llamada_id.nombreCliente, estado: llamada_id.cambioEstado.nombreEstado, duracion: llamada_id.duracion,
    respuesta: encuesta.respuestas, preguntas: encuesta.preguntas, encuesta: encuesta.descripcionEncuesta }
    console.log(obj)
    let csv = await axios.post(`http://localhost:8080/csv`, obj);
    console.log(csv)
    return csv.data
  } catch (error) {
    return error.response.data.error
  }
}
