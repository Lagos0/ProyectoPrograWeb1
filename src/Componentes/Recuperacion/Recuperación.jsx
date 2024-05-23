import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Recuperación.css";

const Recuperacion = () => {
  return (
    <main>
      <form class="RecupForm">
        <div>
          <label class="RecupLabel">
            <b>Ingrese su correo para enviar contraseña</b>
          </label>
          <br />
          <br />

          <input class="RecupInput" type="text" placeholder="email" />
          <br />

          <button class="RecupButton" type="submit">
            Enviar
          </button>
          <br />

          <Link to="/login">
            <label>
              <u>Regresar al login</u>
            </label>
          </Link>
          <br />
        </div>
      </form>
    </main>
  );
};

export default Recuperacion;
