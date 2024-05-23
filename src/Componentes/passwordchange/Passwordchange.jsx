import React from 'react';
import { Link } from "react-router-dom";
import './Passwordchange.css';  

const Passwordchange = () => {
  return (
    <div className="contot">
      <div className="sidebar">
        <h3>Mi Cuenta</h3>
        <ul>
          <Link to="/principalusuario"><li>Órdenes Recientes</li></Link>
          <Link to="/datosregistro"><li>Datos de Registro</li></Link>
          <Link to="/passwordchange"><li>Cambiar Password</li></Link>
        </ul>
      </div>

      <div className="content">
        <h3><strong>Cambiar Password</strong></h3>
        <form className="form">
          <label>
            <input placeholder="Actual" type="password" />
          </label>
          <label>
            <input placeholder="Nuevo" type="password" />
          </label>
          <label>
            <input placeholder="Repetir" type="password" />
          </label>
          <button type="submit">Cambiar</button>
        </form>
      </div>
    </div>
  );
};

export default Passwordchange;