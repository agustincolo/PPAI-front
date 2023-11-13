import { Link } from 'react-router-dom';

const BotonPage = () =>{

    return (
        <div className='boton'>
      <Link to="/filtrarLlamadas">
        <button type="button" className="btn btn-primary boton_size">
          Consultar Encuesta
        </button>
      </Link>
    </div>
  );
    
}

export default BotonPage;