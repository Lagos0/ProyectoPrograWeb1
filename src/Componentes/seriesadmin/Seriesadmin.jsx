
import { Link } from 'react-router-dom';


const Seriesadmin = () => {
  

  return (
    <>
      <div>
        <h3>Ordenes</h3>
        <ul>
          <Link to="/paneladmin"><li>Dashboard</li></Link>
          <Link to="/usuariosregister"><li>Usuarios registrados</li></Link>
          <Link to="/productosadmin"><li>Productos</li></Link>
          <Link to="/orders"><li>Ordenes</li></Link>
          <Link to="/productsell"><li>Productos más vendidos</li></Link>
          <Link to="/series"><li>Series</li></Link>
        </ul>
      </div>

      <div>
        <div>
            <div>
            <h3>Series</h3>
            <Link to="/mantenimientoserie"><button>Agregar serie</button></Link>
            </div>
            <input type="text" />
        </div>

        <div>
            <div>
                <ul>
                    <li>ID</li>
                    <li>Nombre</li>
                    <li>Apellido</li>
                    <li>Correo</li>
                    <li>Fecha de registro</li>
                    <li>Estado</li>
                    <li>Acciones</li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>ID</li>
                    <li>Nombre</li>
                    <li>Apellido</li>
                    <li>Correo</li>
                    <li>Fecha de registro</li>
                    <li>Estado</li>
                    <Link to="/detuserregister"><li>Ver / Desactivar</li></Link>
                </ul>
            </div>
          
        </div>

      </div>

      
    </>
  );
};

export default Seriesadmin;

