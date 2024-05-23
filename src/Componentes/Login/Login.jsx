import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleClick = () => {
    const usuario = document.getElementById("input-username").value;
    const password = document.getElementById("input-password").value;
    if (usuario === "usuario" && password === "123") {
      navigate("/principalusuario");
    }
    if (usuario === "admin" && password === "12345") {
      navigate("/paneladmin");
    } else {
      setError("Email o contraseña incorrectos.");
    }
  };

  return (
    <main class="LoginForm">
      <div>
        <label class="LoginLabel">
          <b>Ingreso para clientes registrados</b>
        </label>
        <br />
        <br />
        <input
          class="LoginInput"
          id="input-username"
          type="text"
          placeholder="email"
        />
        <br />
        <input
          class="LoginInput"
          id="input-password"
          type="password"
          placeholder="password"
        />
        <br />
        <span>{error}</span>
        <br />
        <button class="LoginButton" type="submit" onClick={handleClick}>
          Ingresar
        </button>
        {!error && (
          <>
            <br />

            <Link to="/recuperacion">
              <u>Olvidé mi password</u>
            </Link>

            <br />
            <Link to="/register">
              <u>No tengo cuenta, deseo registrarme</u>
            </Link>
          </>
        )}
      </div>
    </main>
  );
};

export default Login;
