import React from 'react';
import {
  RiLock2Line,
  RiArrowLeftRightLine,
  RiPercentLine,
  RiTruckLine,
} from 'react-icons/ri';
import '../styles/css/home.css';

const Home = () => {
  return (
    <header className="header">
      <div className="info">
        <RiLock2Line size={20} />
        <p>COMPRA 100% SEGURA</p>
      </div>
      <div className="info">
        <RiArrowLeftRightLine size={20} />
        <p>1ª TROCA GRÁTIS</p>
      </div>
      <div className="info">
        <RiPercentLine size={20} />
        <p>5X SEM JUROS</p>
      </div>
      <div className="info">
        <RiTruckLine size={20} />
        <p>ENTREGAS EM TODO BRASIL</p>
      </div>
    </header>
  );
};

export default Home;
