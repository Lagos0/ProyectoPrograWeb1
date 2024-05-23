import React from "react";
import { Link } from "react-router-dom";
import "./Formregister.css";


const Formregister = () => {
 



  return (
    <>


<div class="FormDiv">
        <p>
          <label class="FormLabel">
            <b>Registra una nueva cuenta</b>
          </label>
        </p>
      </div>
      <div class="FormDiv">
        <form>
          <input class="FormInput" placeholder="Nombre" />
          <br />
          <input class="FormInput" placeholder="Apellido" />
          <br />
          <input class="FormInput" placeholder="Correo" />
          <br />
          <input class="FormInput" placeholder="Password" />
          <br />
          <input class="FormInput" placeholder="Confirmar Password " />
        </form>
      </div>

      <div class="FormDiv">
        <Link to="/login">
          <button class="FormButton">Crear nueva cuenta</button>
        </Link>
      </div>

        

        
        
        
    </>
  );
};

export default Formregister;