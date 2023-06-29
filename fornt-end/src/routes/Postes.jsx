import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Postes.css';
import Navbar from '../components/Navbar';

const App = () => {
  const [data, setData] = useState([]);

  function renderizar (){
    axios.get(`http://127.0.0.1:8000/postagem/`)
    .then(response => setData(response.data))
    .catch(error => console.log(error));
  }

  useEffect(renderizar,[]);

  return (
    
    <div id='fundo'>
      <div className="App">
            <Navbar />
       </div>
      <h1>Postagens</h1>
      {data.map(item => (
        <div key={item.id}id= {item.id} className='usuario'>
          <h3>NOME: {item.nome}</h3>
          <p>BAIRRO:  {item.bairro}</p>
          <p>TÓPICO: {item.topico}</p>
          <p>PROBLEMÁTICA:<br></br> {item.problematica}</p>
          
        <button onClick= { e =>{axios.delete(`http://127.0.0.1:8000/postagem/${e.target.parentElement.id}/`);renderizar()}} className='botao'> Delete </button>
        <br></br><br></br>
        </div>
      ))}
     
       
    </div>
  );
};

export default App;