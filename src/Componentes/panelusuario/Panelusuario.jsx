import { Link } from "react-router-dom";
import './OrderDetail.css';

const Panelusario = () => {
  return (
    <div className="contai">
      <div className="sidebar">
        <h3>Mi Cuenta</h3>
        <ul>
          <Link to="/principalusuario"><li>Órdenes Recientes</li></Link>
          <Link to="/datosregistro"><li>Datos de Registro</li></Link>
          <Link to="/passwordchange"><li>Cambiar Password</li></Link>
        </ul>
      </div>

      <div className="content">
        <h2>Tienda</h2>
        <h3>Detalles de Orden Nro 12312312344</h3>

        <div className="order-section">
          <div className="order-section-header">Datos de compra</div>
          <div className="order-info">
            <div className="info-box">
              <h4>Dirección de Envío</h4>
              <p>Jiron Huiracocha 2081 Departamento 922<br />
                Jesús María, Lima<br />
                Lima, Perú</p>
            </div>
            <div className="info-box">
              <h4>Pago</h4>
              <p>Pago con tarjeta de crédito<br />
              Tarjeta de Crédito que termina en: ****8859</p>
            </div>
          </div>
        </div>

        <div className="order-section">
          <div className="order-section-header">Método de Envío</div>
          <div className="shipping-method">
            <label>
              <input type="radio" checked readOnly />
              Económico Aéreo - S/10.00
            </label>
            <label>
              <input type="radio" checked readOnly />
              Envío prioritario (5 a 10 días) - S/ 17.00
            </label>
          </div>
        </div>

        <div className="order-section">
          <div className="order-info">
            <div className="info-box">
              <h4>Items en Pedido:</h4>
              <p>1x Juego de Cartas Pokemon Masters League - S/ 50.00</p>
              <p>2x Juego de Cartas Magic The Gathering - S/ 50.00</p>
            </div>
            <div className="info-box">
              <h4>Resumen de Orden</h4>
              <p>Subtotal: S/ 100.00</p>
              <p>Envío: S/ 17.00</p>
              <p>Impuestos: S/ 18.00</p>
              <p>Total: S/ 135.00</p>
            </div>
          </div>
          <button id="pesopluma">Cancelar Pedido</button>
        </div>
      </div>
    </div>
  );
};

export default Panelusario;
