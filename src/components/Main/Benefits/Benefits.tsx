import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Benefits.scss';
import '../Benefits/BenefitsAdaptive.scss';

interface Benefit {
  title: string;
  text: string;
}

const benefits: Benefit[] = [
  { title: 'Сучасне обладнання', text: 'Ми використовуємо передові технології в області лазерної епіляції, що гарантує безпечність і максимальну ефективність процедур.' },
  { title: 'Професійна команда', text: 'Наші досвідчені спеціалісти забезпечать вам високий рівень обслуговування та індивідуальний підхід.' },
  { title: 'Зручність та гнучкість', text: 'За допомогою нашого он лайн календаря для запису на візит, плануйте відвідування в зручний для вас час.' },
  { title: 'Якісні продукти', text: 'Ми використовуємо передові технології в області лазерної епіляції, що гарантує безпечність і максимальну ефективність процедур.' },
  { title: 'Індивідуальний підхід', text: 'Ми використовуємо передові технології в області лазерної епіляції, що гарантує безпечність і максимальну ефективність процедур.' },
  { title: 'Доступні ціни', text: 'Ми використовуємо передові технології в області лазерної епіляції, що гарантує безпечність і максимальну ефективність процедур.' },
];

// Розділяємо картки на групи по 3
const groupedBenefits = [
  benefits.slice(0, 3),
  benefits.slice(3, 6)
];

const Benefits: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 515);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 515);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = groupedBenefits.length;

  const commonHandlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex(prevIndex => Math.min(prevIndex + 1, totalSlides - 1)),
    onSwipedRight: () => setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0)),
    trackMouse: true,
  });

  const handleNext = () => setCurrentIndex(prevIndex => Math.min(prevIndex + 1, totalSlides - 1));
  const handlePrev = () => setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));

  return (
    <div className="page__benefits benefits">
      <div className="benefits__title-container">
        <h2 className="benefits__title"><span>На</span>ші переваги</h2>
      </div>
      <div className="benefits__items">
        <div className="benefits__slider">
          <button className="slider__control slider__control--prev" onClick={handlePrev}>
          <svg width="52" height="17" viewBox="0 0 52 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 8.49992L0.646448 8.14636L0.292893 8.49991L0.646445 8.85347L1 8.49992ZM51 8.99992C51.2761 8.99992 51.5 8.77606 51.5 8.49992C51.5 8.22378 51.2761 7.99992 51 7.99992V8.99992ZM8.64645 0.146445L0.646448 8.14636L1.35355 8.85347L9.35355 0.853555L8.64645 0.146445ZM0.646445 8.85347L8.64644 16.8536L9.35356 16.1464L1.35356 8.14637L0.646445 8.85347ZM1 8.99992H51V7.99992H1V8.99992Z" fill="#8E8E8E"/>
</svg>



          </button>
          <div
            className="slider__slides"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 0.3s ease',
            }}
            {...commonHandlers}
          >
            {groupedBenefits.map((group, index) => (
              <div key={index} className={`slider__group slider__group--${index + 1}`}>
                {group.map((benefit, i) => (
                  <div key={i} className="benefits__item benefits-item">
                    <div className="benefits-item__title">
                      <span>{index * 3 + i + 1}</span> <p>{benefit.title}</p> 
                    </div>
                    <div className="benefits-item__text">
                      <p>{benefit.text}</p> 
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <button className="slider__control slider__control--next" onClick={handleNext}>
          <svg width="51" height="17" viewBox="0 0 51 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M51 8.50008L51.3536 8.85364L51.7071 8.50009L51.3536 8.14653L51 8.50008ZM1 8.00008C0.723858 8.00008 0.5 8.22394 0.5 8.50008C0.5 8.77622 0.723858 9.00008 1 9.00008V8.00008ZM43.3536 16.8536L51.3536 8.85364L50.6464 8.14653L42.6464 16.1464L43.3536 16.8536ZM51.3536 8.14653L43.3536 0.146448L42.6464 0.853552L50.6464 8.85363L51.3536 8.14653ZM51 8.00008L1 8.00008V9.00008L51 9.00008V8.00008Z" fill="black"/>
</svg>

          </button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
