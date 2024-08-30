import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../Tariffs/Tariffs.scss';
import '../Tariffs/TraficsAdaptive.scss';

const Tariffs: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = 4; // Number of items
  const translateXPercentage = screenWidth <= 600 ? 80 : 100; // Adjust percentage to show part of the next item

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true, // Allow mouse swipe as well
  });

  return (
    <div className="page__tariffs tariffs">
      <div className="tariffs__title-container">
        <h2 className="tariffs__title"><span>Та</span>рифи</h2>
      </div>
      <div className="tariffs__slider" {...handlers}>
        <div
          className="tariffs-slider-wrapper"
          style={{ transform: `translateX(-${currentIndex * translateXPercentage}%)` }}
        >
          <div className="tariffs__items">
            <div className="tariffs__item tariffs__item-1">
              <h3 className="tariffs-item__title">Стартовий</h3>
              <h4 className="tariffs-item__subtitle">
                <span>Одне</span> безлімітне відвідування лазерної епіляції
              </h4>
              <p className="tariffs-item__text">
                Кава, чай, вода, «смаколики», бокал ігристого, комфортна лаунж
                зона з безлімітним інтернетом і зарядними пристроями, дитячий
                куточок, вбиральня, душова кімната.
              </p>
              <div className="tariffs-item__price">1200 <span>ГРН</span></div>
              <button className="tariffs-item__btn tariffs-item__bt-1">
                Придбати
              </button>
            </div>
            <div className="tariffs__item tariffs__item-2">
              <h3 className="tariffs-item__title">Стандарт</h3>
              <h4 className="tariffs-item__subtitle">
                <span>Шість</span> безлімітних відвідувань лазерної епіляції
                протягом <span>8</span> місяців
              </h4>
              <p className="tariffs-item__text">
                Кава, чай, вода, «смаколики», бокал ігристого, комфортна лаунж
                зона з безлімітним інтернетом і зарядними пристроями, дитячий
                куточок, вбиральня, душова кімната.
              </p>
              <div className="tariffs-item__price">2000 <span>ГРН</span></div>
              <button className="tariffs-item__bt-2 tariffs-item__btn">
                Придбати
              </button>
            </div>
            <div className="tariffs__item tariffs__item-3">
              <h3 className="tariffs-item__title">Преміум</h3>
              <h4 className="tariffs-item__subtitle">
                <span>Дев’ять</span> безлімітних відвідувань лазерної епіляції
                протягом <span>12</span> місяців
              </h4>
              <p className="tariffs-item__text">
                Кава, чай, вода, «смаколики», бокал ігристого, комфортна лаунж
                зона з безлімітним інтернетом і зарядними пристроями, дитячий
                куточок, вбиральня, душова кімната.
              </p>
              <div className="tariffs-item__price">2600 <span>ГРН</span></div>
              <button className="tariffs-item__btn tariffs-item__bt-3">
                Придбати
              </button>
            </div>
            <div className="tariffs__item tariffs__item-4">
              <h3 className="tariffs-item__title">Люкс</h3>
              <h4 className="tariffs-item__subtitle">
                <span>Дванадцять</span> безлімітних відвідувань лазерної
                епіляції протягом <span>18</span> місяців
              </h4>
              <p className="tariffs-item__text">
                Кава, чай, вода, «смаколики», бокал ігристого, комфортна лаунж
                зона з безлімітним інтернетом і зарядними пристроями, дитячий
                куточок, вбиральня, душова кімната.
              </p>
              <div className="tariffs-item__price">3200 <span>ГРН</span></div>
              <button className="tariffs-item__btn tariffs-item__bt-4">
                Придбати
              </button>
            </div>
          </div>
        </div>
        {screenWidth <= 600 && (
          <div className='tariffs__control--btns'>
            <button className="tariffs__control tariffs__control--prev" onClick={prevSlide}>
              <svg width="30" height="30" viewBox="0 0 52 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="slider-icon">
                <path d="M1 8.49992L0.646448 8.14636L0.292893 8.49991L0.646445 8.85347L1 8.49992ZM51 8.99992C51.2761 8.99992 51.5 8.77606 51.5 8.49992C51.5 8.22378 51.2761 7.99992 51 7.99992V8.99992ZM8.64645 0.146445L0.646448 8.14636L1.35355 8.85347L9.35355 0.853555L8.64645 0.146445ZM0.646445 8.85347L8.64644 16.8536L9.35356 16.1464L1.35356 8.14637L0.646445 8.85347ZM1 8.99992H51V7.99992H1V8.99992Z" className="slider-icon-path"/>
              </svg>
            </button>
            <button className="tariffs__control tariffs__control--next" onClick={nextSlide}>
              <svg width="30" height="30" viewBox="0 0 51 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="slider-icon">
                <path d="M51 8.50008L51.3536 8.85364L51.7071 8.50009L51.3536 8.14653L51 8.50008ZM1 8.00008C0.723858 8.00008 0.5 8.22394 0.5 8.50008C0.5 8.77622 0.723858 9.00008 1 9.00008V8.00008ZM43.3536 16.8536L51.3536 8.85364L50.6464 8.14653L42.6464 16.1464L43.3536 16.8536ZM51.3536 8.14653L43.3536 0.146448L42.6464 0.853552L50.6464 8.85363L51.3536 8.14653ZM51 8.00008L1 8.00008V9.00008L51 9.00008V8.00008Z" className="slider-icon-path"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tariffs;
