import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Menu.css';
import Navbar from '../components/Navbar';

const App = () => {
  return (
    <>
    <div className="App">
            <Navbar />
       </div>
      <h1>Sobre nós</h1>
      <br></br><br></br>
      <p>
      Nosso site, dedicado a conectar os moradores da cidade de Forquilhinha com os mais competentes, busca proporcionar soluções rápidas, evitando as demoras frequentemente associadas à fiscalização. Nosso serviço oferece uma plataforma fácil de usar, onde é possível se conectar você com a sua cidade.

Acreditamos que ao facilitar o acesso dos moradores a profissionais capacitados, contribuímos para a resolução ágil de suas necessidades e demandas. Dessa forma, não só poupamos tempo e esforços, mas também promovemos a qualidade de vida e bem-estar da comunidade.

Além dos benefícios diretos para os moradores, nosso serviço também traz vantagens para a prefeitura. Através da redução de gastos públicos, alcançada por meio da eficiência e rapidez na resolução dos problemas da cidade, contribuímos para a otimização dos recursos financeiros disponíveis. Isso permite que a prefeitura possa direcionar seus investimentos para outras áreas prioritárias, como infraestrutura, saúde, educação e segurança.

Nosso compromisso é oferecer uma plataforma confiável, onde os moradores de Forquilhinha possam encontrar uma forma de se expresar, com avaliações e recomendações de outros usuários, garantindo assim a qualidade dos serviços prestados. Estamos em constante atualização e busca por parcerias com empresas e a prefeitura da região, para ampliar ainda mais a oferta de serviços e proporcionar soluções completas para a comunidade.

Contamos com a participação ativa dos moradores e  de Forquilhinha para fortalecer nossa plataforma e promover a melhoria contínua dos serviços prestados. Juntos, podemos construir uma cidade mais conectada, eficiente e próspera.
      </p>
    </>
  );
};

export default App;
