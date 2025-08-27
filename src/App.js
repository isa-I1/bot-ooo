import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Exemplo com Bootstrap</h1>

      {/* Botão */}
      <button className="btn btn-primary mb-4">Clique Aqui</button>

      {/* Card */}
      <div className="card" style={{ width: '18rem' }}>
        <img 
          src="https://p1.hiclipart.com/preview/353/533/245/cartoons-hello-kitty-png-clipart.jpg"
          className="card-img-top" 
          alt="Exemplo" 
        />
        <div className="card-body">
          <h5 className="card-title">hello kitty</h5>
          <p className="card-text">
            kitty
          </p>
          <a href="#" className="btn btn-secondary">Saiba Mais</a>
        </div>
      </div>
    </div>
  );
}

export default App;
