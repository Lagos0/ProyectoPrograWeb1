import React from 'react';
import { Link } from 'react-router-dom';
import './Productadmin.css';

const Productadmin = () => {
  return (
      <div className="nav-container">
        <div className="nav-links-container">
          <h3>Admin</h3>
          <ul className="nav-links">
            <li><Link to="/paneladmin">Dashboard</Link></li>
            <li><Link to="/usuariosregister">Usuarios registrados</Link></li>
            <li><Link to="/productosadmin">Productos</Link></li>
            <li><Link to="/orders">Ordenes</Link></li>
            <li><Link to="/productsell">Productos más vendidos</Link></li>
            <li><Link to="/series">Series</Link></li>
          </ul>
        </div>
      <div className="form-container">
        <h3><strong>Detalle de usuario registrado</strong></h3>
        <div className="form-group">
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Descripción" />
          <input type="text" placeholder="Caracteristicas" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Marca" />
          <input type="text" placeholder="Serie" />
          <p>S/</p>
          <input type="text" placeholder="Precio" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Tipo" />
          <input type="text" placeholder="Stock" />
        </div>
        <div className="form-group">
          <button>Agregar imagen</button>
          <button>Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default Productadmin;
