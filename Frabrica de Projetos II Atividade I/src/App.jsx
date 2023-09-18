import React from 'react';

function CartaoDeVisitas() {
  const nome = "Tiago Chehab";
  const descricao = "Sou o Tiago estudante de Ciência da Computação no IDP. Odeio Java.";
  const redeSocial = "https://www.instagram.com/tiagochehab_/";
  const fotoUrl = "https://uploaddeimagens.com.br/imagens/yCASc7k";

  return (
    <div className="cartao-de-visitas">
      <h1>{nome}</h1>
      <img src={fotoUrl} alt={`Foto de ${nome}`} />
      <p>{descricao}</p>
      <a href={redeSocial} target="_blank" rel="noopener noreferrer">Perfil no Instagram</a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <CartaoDeVisitas />
    </div>
  );
}

export default App;