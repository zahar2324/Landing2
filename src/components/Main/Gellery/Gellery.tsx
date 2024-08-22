import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../Gellery/Gellery.scss';

const images = [
  process.env.PUBLIC_URL + "/gellery1.jpeg",
  process.env.PUBLIC_URL + "/gellery2.jpeg",
  process.env.PUBLIC_URL + "/gellery3.jpeg",
  process.env.PUBLIC_URL + "/gellery4.jpeg",
  process.env.PUBLIC_URL + "/gellery5.jpeg",
  process.env.PUBLIC_URL + "/gellery6.jpeg",
  process.env.PUBLIC_URL + "/gellery7.jpeg",
];

const Gellery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
     //swipeMinDistance: 50, // Не використовується більше
  });

  return (
    <div className="page__gallery gallery">
      <div className="gallery__title-container">
        <h2 className="gallery__title"><span>Га</span>лерея</h2>
      </div>
      <div className="gallery__slider gallery-slider" {...handlers}>
        <div className="gallery-slider-item">
          <img src={images[currentIndex]} alt="img" />
        </div>
      </div>
      <div className="gallery__controls">
        <button className="gallery__control gallery__control--prev" onClick={prevSlide}>
          <svg width="30" height="30" viewBox="0 0 52 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="slider-icon">
            <path d="M1 8.49992L0.646448 8.14636L0.292893 8.49991L0.646445 8.85347L1 8.49992ZM51 8.99992C51.2761 8.99992 51.5 8.77606 51.5 8.49992C51.5 8.22378 51.2761 7.99992 51 7.99992V8.99992ZM8.64645 0.146445L0.646448 8.14636L1.35355 8.85347L9.35355 0.853555L8.64645 0.146445ZM0.646445 8.85347L8.64644 16.8536L9.35356 16.1464L1.35356 8.14637L0.646445 8.85347ZM1 8.99992H51V7.99992H1V8.99992Z" className="slider-icon-path"/>
          </svg>
        </button>
        <button className="gallery__control gallery__control--next" onClick={nextSlide}>
          <svg width="30" height="30" viewBox="0 0 51 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="slider-icon">
            <path d="M51 8.50008L51.3536 8.85364L51.7071 8.50009L51.3536 8.14653L51 8.50008ZM1 8.00008C0.723858 8.00008 0.5 8.22394 0.5 8.50008C0.5 8.77622 0.723858 9.00008 1 9.00008V8.00008ZM43.3536 16.8536L51.3536 8.85364L50.6464 8.14653L42.6464 16.1464L43.3536 16.8536ZM51.3536 8.14653L43.3536 0.146448L42.6464 0.853552L50.6464 8.85363L51.3536 8.14653ZM51 8.00008L1 8.00008V9.00008L51 9.00008V8.00008Z" className="slider-icon-path"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Gellery;
