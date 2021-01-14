import React, { useState } from 'react';
import '../styles/css/slide.css';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <section className="slider">
        <RiArrowRightSLine className="right-arrow" onClick={nextSlide} />
        <RiArrowLeftSLine className="left-arrow" onClick={prevSlide} />
        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide-active' : 'slide'}
              key={index}
            >
              {index === current && (
                <>
                  <img src={slide.img} alt={slide.name} className="image" />
                  <div className="slide-text">
                    <p>{slide.text1}</p>
                    <h1>{slide.text2}</h1>
                    <h2>{slide.text3}</h2>
                    <a href={slide.href}>{slide.link}</a>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ImageSlider;
