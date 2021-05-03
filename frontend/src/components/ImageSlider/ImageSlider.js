import React, { useState } from 'react';
import { SliderData } from './SliderData';
import './ImageSlider.css';
import { Button } from 'react-bootstrap';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <i
        className='slider--left-arrow fas fa-arrow-circle-left'
        onClick={prevSlide}></i>
      <i
        className='slider--right-arrow fas fa-arrow-circle-right'
        onClick={nextSlide}></i>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? 'slider--slide slider--slide__active'
                : 'slider--slide'
            }
            key={index}>
            {index === current && (
              <>
                <img
                  src={slide.image}
                  alt='headphone'
                  className='slider--image img-fluid'
                />
                <div className='slider--description'>
                  <h2 className='slider--heading'>{slide.heading}</h2>
                  <Button className=' slider--button' button>
                    {slide.cta}
                  </Button>
                </div>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
