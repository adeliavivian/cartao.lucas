// Cartao.jsx
import React from 'react';
import '../components/Cartao.css';
import Logo from '../assets/subway.png';

const Cartao = () => {
  return (
    <div className="cartao-container">
      <div className="cartao">
        <img
          src={Logo}
          alt="Subway Logo"
          className="logo"
        />
        <h1 className="titulo">Subway</h1>
        <p className="descricao">Coma fresco. Descubra nossos sabores irresistíveis!</p>
        <div className="links">
          <a
            href="https://www.instagram.com/subway"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/subway"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            LinkedIn
          </a>
          <a
            href="https://www.subway.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            Site Oficial
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cartao;
