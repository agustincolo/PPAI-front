import axios from "axios";



export const filtrarLlamada = async (fechaInicio, fechaFin) => {
    try {
      let llamadas_filtradas = await axios.get(`http://localhost:8080/filtrarLlamadas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
      return llamadas_filtradas.data
    } catch (error) {
      console.log(error)
    }
  };