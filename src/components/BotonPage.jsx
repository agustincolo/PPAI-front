import { Link } from 'react-router-dom';

const BotonPage = () =>{

    return (
      <>
      <h1 className='d-flex justify-content-center texto_'>Consultar Encuestas de llamadas</h1>
        <div className='boton'>
      <Link to="/filtrarLlamadas">
        <button type="button" className="btn btn-primary boton_size">
          Consultar Encuesta
        </button>
      </Link>
    </div>
    </>
  );
    
}

export default BotonPage;