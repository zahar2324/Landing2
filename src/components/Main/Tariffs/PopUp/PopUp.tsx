import React, { useEffect, useRef } from 'react';
import "../PopUp/PopUp.scss";

interface PopUpProps {
  onClose: () => void;
  tariff: string | null;
  price: number | null
}

const PopUp: React.FC<PopUpProps> = ({ onClose, tariff, price }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="popup_overlay">
      <div className="popup_container">
        <div className="popup" ref={popupRef}>
          <div className="popup-content">
            <h2 className="popup-text">
              <span className="highlight">Ви</span> обрали процедуру
            </h2>
            <p className="procedure">{tariff}</p>
            <p className="price">{price} <span className="price-text">ГРН</span></p>
            <p className="description">
              Вкажіть необхідні дані і наш менеджер зв'яжеться з вами найближчим часом
            </p>
            <form>
              <input type="text" id="name" name="name" placeholder="Як краще до вас звертатись?" required />
              <input type="tel" id="phone" name="phone" placeholder="Ваш номер телефону?" required />
              <div className="popup__bt-container">
                <button className="popup-btn" type="submit">ОФОРМИТИ</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
