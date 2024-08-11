import React, { useState } from 'react';
import '../Header/Header.scss';
import '../Header/HeaderAdaptive.scss';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const headerStyle: React.CSSProperties = {
        backgroundImage: `url(${process.env.PUBLIC_URL + "/headerBG.png"})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        paddingBottom: '51%',
        height: '61vh' /* during the adaptive, will change thus scale */
    };

    const btnsvgstyle: React.CSSProperties = {
        fontSize: '20px',
        width: '23px',
        height: '23px',
        marginRight: '11px'
    };

    return (
        <header className="header" style={headerStyle}>
            <div className="container">
                <div className="header__top">
                    <nav className={`nav ${menuOpen ? 'nav--active' : ''}`}>
                        <div className={`nav__logo ${menuOpen ? 'nav__logo--menu-open' : ''}`}>
                            <span>є</span>
                            <p>Лазер</p>
                        </div>
                        <div className={`nav__menu ${menuOpen ? 'nav__menu--open' : ''}`}>
                            <ul>
                                <li><a href="#">Про нас</a></li>
                                <li><a href="#">Тарифи</a></li>
                                <li><a href="#">Контакти</a></li>
                            </ul>
                        </div>
                        <div className="nav__contanct">
                            <div className="nav__contanct-number">
                                <a href="tel:+380123456789">+380123456789</a>
                            </div>
                            <div className='nav__contanct-btn'>
                                <img src={process.env.PUBLIC_URL + "/headerSVG.svg"} alt="men" style={btnsvgstyle} />
                                <button>Особистий кабінет</button>
                            </div>
                        </div>

                        <div className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`}  onClick={toggleMenu}>
                            <div className={`nav__burger-item ${menuOpen ? 'nav__burger-item--open' : ''}`}></div>
                            <div className={`nav__burger-item ${menuOpen ? 'nav__burger-item--open' : ''}`}></div>
                            <div className={`nav__burger-item ${menuOpen ? 'nav__burger-item--open' : ''}`}></div>
                        </div>
                    </nav>
                </div>
                <div className="header__content">
                    <div className="header__content-text">
                        <div className="header__content-span">
                            <span>Ми пропонуємо</span>
                        </div>
                        <div className="header__content-title">
                            <p>Найкращі послуги у сфері лазерної епіляції</p>
                        </div>
                        <div className="header__content-btn">
                            <button>Оформити підписку</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
