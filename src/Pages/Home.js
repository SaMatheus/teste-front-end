import React, { useState } from 'react';
//Css
import '../styles/css/home.css';
// Componentes
import ImageSlider from '../Slide/ImageSlider';
import { SliderData } from '../Slide/SlideData';
import { InstrumentData } from './Data';
import Button from '../Components/Button/Button';
// Icons
import {
  RiLock2Line,
  RiArrowLeftRightLine,
  RiPercentLine,
  RiTruckLine,
  RiUser3Line,
  RiSearchLine,
  RiArrowDropDownFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCloseLine,
} from 'react-icons/ri';
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi';

// Images
import marca1 from '../assets/marca.png';
import marca2 from '../assets/marca-2.png';
import marca3 from '../assets/marca-3.png';
import marca4 from '../assets/marca-4.png';
import sponsor1 from '../assets/sponsor-1.png';
import sponsor2 from '../assets/sponsor-2.png';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';
import security1 from '../assets/security1.png';
import security2 from '../assets/security2.png';

const Home = () => {
  let cartItems = 1;
  const [data, setData] = useState();
  window.addEventListener('load', () => {
    reqData();
  });

  // CORS para liberação do acesso à API
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url =
    'http://econverse.digital/teste-front-end/junior/ninja-som/lista-produtos/produtos.json';

  const reqData = () => {
    fetch(proxyurl + url)
      .then((res) => res.json())
      .then((json) => setData(json.products));
  };

  const handleOpen = (index) => {
    const modal = document.querySelector(`.modal${index}`);
    modal.classList.add('modal-active');
  };

  const handleClose = (index) => {
    const modal = document.querySelector(`.modal${index}`);
    modal.classList.remove('modal-active');
  };

  return (
    <>
      <header className="header">
        <title>Qualidades do Site</title>
        <div className="info">
          <RiLock2Line size={20} />
          <p>compra 100% segura</p>
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
      <section className="search-container">
        <title>Pesquisa de instrumentos musicais e eletronicos</title>
        <div className="logo"></div>
        <label className="search" htmlFor="search">
          <input
            id="search"
            name="search"
            type="text"
            placeholder="BUSQUE AQUI"
          ></input>
          <button>
            <RiSearchLine size={25} />
          </button>
        </label>
        <div className="contact">
          <FaWhatsapp size={30} />
          <p>(11) 99999-9999</p>
        </div>
        <div className="login">
          <RiUser3Line size={30} />{' '}
          <p>
            <strong>OLÁ, VISITANTE</strong>
            <span>MINHA CONTA</span>
          </p>
        </div>
        <div className="cart">
          <BiShoppingBag size={50} />
          <p>SEU CARRINHO</p>
          <p>
            <span>{cartItems}</span> item(s)
          </p>
        </div>
      </section>
      <nav className="nav-bar">
        <title>Barra de navegação do site</title>
        <ul className="menu">
          <li>
            <a href="#">Todas as categorias</a>
          </li>
          <li>
            <a href="#">Som Profissional</a>
            <RiArrowDropDownFill size={15} />
          </li>
          <li>
            <a href="#">Instrumentos Musicais</a>
            <RiArrowDropDownFill size={15} />
          </li>
          <li>
            <a href="#">Promoções</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
      <ImageSlider slides={SliderData} />
      <nav className="instrument-select-bar">
        <title>Seleção de instrumentos musicais</title>
        <ul className="instrument-select-list">
          {InstrumentData.map((instrument, index) => {
            return (
              <li key={index}>
                <img
                  className={`instrument `}
                  src={instrument.img}
                  alt={instrument.name}
                />
                <a href="#">{instrument.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <section className="options-container">
        <title>Novidades audio profissionais e instrumentos musicais</title>
        <div className="option">
          <div className="option-text">
            <p>Novidades</p>
            <h1>Áudio</h1>
            <h2>Profissional</h2>
            <Button>Confira</Button>
          </div>
        </div>
        <div className="option">
          <div className="option-text">
            <p>Novidades</p>
            <h1>Instrumentos</h1>
            <h2>Musicais</h2>
            <Button>Confira</Button>
          </div>
        </div>
      </section>
      <section className="spotlight-container">
        <title>Destaques da loja de música</title>
        <h1>
          Instrumentos <strong>Destaque</strong>
        </h1>
        <p>
          it is a long established fact that a reader will be distracted by the
          readable
        </p>
        <div className="instruments-grid">
          {data &&
            data.map((product, index) => (
              <div key={index}>
                <div className={`item item${index}`}>
                  <img src={product.photo} alt={product.productName} />
                  <div className="animation-hover">
                    <div
                      className="search-icon"
                      onClick={() => handleOpen(index)}
                    >
                      <RiSearchLine />
                    </div>
                    <div className="text">
                      <span>Quick View</span>
                    </div>
                  </div>
                  <h1>{product.productName}</h1>
                  <p>{product.descriptionShort}</p>
                  <h2>R$ {product.price}</h2>
                </div>
                <div className={`modal modal${index} `}>
                  <div className="modal-content">
                    <RiCloseLine
                      className={`modal-close-button modal-close-button${index}`}
                      onClick={() => handleClose(index)}
                    />
                    <img src={product.photo} alt={product.productName} />
                    <div className="modal-descripton">
                      <h1>{product.productName}</h1>
                      <h2>R$ {product.price}</h2>
                      <p>{product.descriptionShort}</p>
                      <a href="#">
                        Veja mais detalhes do produto
                        <RiArrowRightSLine className="right-arrow" />
                      </a>
                      <button>Adicionar ao carrinho</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Button>Ver Mais</Button>
      </section>
      <section className="brand-container">
        <title>Marcas de instrumentos em destaque</title>
        <h1>
          As <strong>Melhores</strong> Marcas
        </h1>
        <div className="brand-slider">
          <RiArrowLeftSLine className="left-arrow" />
          <RiArrowRightSLine className="right-arrow" />
          <div className="brand">
            <img src={marca1} alt="logomarca" />
          </div>
          <div className="brand">
            <img src={marca2} alt="logomarca" />
          </div>
          <div className="brand">
            <img src={marca3} alt="logomarca" />
          </div>
          <div className="brand">
            <img src={marca4} alt="logomarca" />
          </div>
        </div>
      </section>
      <section className="about-container">
        <title>Sobre a loja</title>
        <h1>Sobre Nós</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using ‘Content here, content here’, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for ‘lorem ipsum’ will uncover many web sites still in their
          infancy. Lorem Ipsum as their default model text, and a search for
          ‘lorem ipsum’ will uncover many web sites still in their infancy.
          Lorem Ipsum as their default model text, and a search for ‘lorem
          ipsum’ will uncover many web sites still in their infancy.{' '}
        </p>
      </section>
      <section className="social-proof-container">
        <div className="social-proof">
          <div className="social-proof-slider">
            <RiArrowLeftSLine className="left-arrow" />
            <RiArrowRightSLine className="right-arrow" />
            <div className="picture"></div>
            <div className="name-and-profession">
              <h1>Felipe Salmim</h1>
              <p>Designer</p>
            </div>
            <div className="comment">
              <p>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for ‘lorem
                ipsum’
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-container">
        <div className="contact-info">
          <ul>
            <h1>INSTITUCIONAL</h1>
            <li>Quem Somos</li>
            <li>Nossas Lojas</li>
          </ul>
          <ul>
            <h1>Atendimento</h1>
            <li>fale conosco</li>
            <li>vendas@ninjasom.com.br</li>
          </ul>
        </div>
        <div className="contact-info">
          <ul>
            <h1>Ajuda e suporte</h1>
            <li>política de privacidade</li>
            <li>Política de trocas</li>
            <li>Prazos de entrega</li>
            <li>Termos de uso</li>
          </ul>
          <div className="social-media">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
          </div>
        </div>
        <div className="contact-info">
          <ul>
            <h1>Formas de pagamento</h1>
            <div className="cards">
              <img src={card1} alt="" />
              <img src={card2} alt="" />
              <img src={card3} alt="" />
              <img src={card4} alt="" />
              <img src={card5} alt="" />
            </div>
          </ul>
          <ul>
            <h1>Segurança</h1>
            <div className="security">
              <img src={security2} alt="" />
              <img src={security1} alt="" />
            </div>
          </ul>
        </div>
        <div className="contact-form">
          <h1>
            Assine nosso <strong>newsletter</strong>
          </h1>
          <p>E receba novidades e promoções</p>
          <label>
            <input type="text" placeholder="seu nome" />
          </label>
          <label>
            <input type="text" placeholder="seu e-mail" />
          </label>
          <Button>Enviar</Button>
        </div>
      </section>
      <footer className="footer">
        <title>Rodapé com patrocinadores</title>
        <p>
          NINJA SOM COMÉRCIO DE ELETRÔNICOS LTDA - 2012 - 2019, todos os
          direitos reservados. Rua Santa Ifigênia, 556 560/562/564 - Santa
          Efigênia - CEP: 01.207-000 - São Paulo / SP - CNPJ 07.282.516/0001-15
        </p>
        <div className="sponsors">
          <img src={sponsor1} alt="patrocinador" />
          <img src={sponsor2} alt="patrocinador" />
        </div>
      </footer>
    </>
  );
};

export default Home;
