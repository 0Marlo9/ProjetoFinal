import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState(0);
  

  async function addUser() {
    const response = await axios.post('http://127.0.0.1:8000/usuarios/', {
      usuario: usuario,
      senha: senha,
     

      
    });
    console.log(response.data);
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <br></br><br></br>

      <div className="input-container">
        <input  type="text" placeholder="Usuario" onChange={(e) => setUsuario(e.target.value)} /><br></br><br></br>
        <input  type="number" placeholder="Senha" maxLength="8" onChange={(e) => setSenha(e.target.value)} /><br></br>
        
      </div>
      <a href={`/btn`}>
      <button onClick={addUser}>Logar</button>
      </a>

      <a href={`/btn0`}><p>Cadastrar</p></a>

    </div>
  );
};

export default Login;
