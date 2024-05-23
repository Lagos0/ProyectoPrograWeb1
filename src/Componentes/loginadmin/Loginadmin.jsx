
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Loginadmin = () => {
  const navigate = useNavigate();
  

  const [error, setError] = useState('');

  const handleClick = () => {
    const usuario =document.getElementById("input-username").value
    const password =document.getElementById("input-password").value
    if (usuario === 'admin' && password === '123') {
      navigate('/principaladmin');
    } else {
      setError("Email o contraseña incorrectos.");
    }
  };

  return (
    <main >
      <label>Email: </label>
      <br/>
      <input id="input-username" type="text" placeholder='Email' />
      <br />
      <label>Password: </label>
      <br />
      <input id="input-password" type="password" placeholder='password' />
      <br />
      <span >{error}</span>
      <br />
      <button type="submit" onClick={handleClick}>Login</button>
      


    </main>
  );
};

export default Loginadmin;
