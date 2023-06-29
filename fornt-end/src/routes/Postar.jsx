import React, { useState } from 'react';
import axios from 'axios';
import './Postar.css';
import Navbar from '../components/Navbar';


const App = () => {
  const [nome, setNome] = useState('');
  const [bairro, setBairro] = useState('');
  const [topico, setTopico] = useState('');
  const [problematica, setProblematica] = useState('');

  async function addUser() {
    const response = await axios.post('http://127.0.0.1:8000/postagem/', {
      nome: nome,
      bairro: bairro,
      topico: topico,
      problematica: problematica,
    });
    console.log(response.data);
  }

  return (
    <div className="container">
      <div className="App">
            <Navbar />
       </div>
      <h1>Escreva AQUI</h1>

      <div className="input-container">
        <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} /><br></br>
        <input type="text" placeholder="Bairro" onChange={(e) => setBairro(e.target.value)} /><br></br>
        <input type="text" placeholder="Tópico" onChange={(e) => setTopico(e.target.value)} /><br></br>
        <input type="text" placeholder="Problemática" id="problematica" onChange={(e) => setProblematica(e.target.value)} /><br></br>
      </div>

      <a href={`/btn1`}>
      <button onClick={addUser}>Postar</button>
      </a>
    </div>
  );
};

export default App;
