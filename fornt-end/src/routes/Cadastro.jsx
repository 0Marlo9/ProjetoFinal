import React, { useState } from 'react';
import axios from 'axios';
import './Cadastro.css';

const App = () => {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState(0);
  

  async function addUser() {
    const response = await axios.post('http://127.0.0.1:8000/usuarios/', {
      usuario: usuario,
      senha: senha,
      email: email,

      
    });
    console.log(response.data);
  }

  return (
    <div className="container">
      <h1>Cadastro</h1>
      <br></br><br></br>

      <div className="input-container">
        <input  type="text" placeholder="Usuario" onChange={(e) => setUsuario(e.target.value)} /><br></br><br></br>
        <input  type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br></br><br></br>
        <input  type="number" placeholder="Senha" maxLength="8" onChange={(e) => setSenha(e.target.value)} /><br></br>
        
      </div>
      <a href={`/`}>
      <button onClick={addUser}>Cadastrar</button>
      </a>
      

      <br></br><br></br>
      <a href={`/`}><button id='botao'>Voltar</button></a>
       <br></br><br></br>
    </div>
  );
};

export default App;
