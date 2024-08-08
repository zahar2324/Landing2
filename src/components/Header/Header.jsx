import '../Header/Header.scss'
import '../Header/HeaderAdaptive.scss'
const Header = () =>{
    const headerStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL + "/headerBG.png"})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        width: '102vw',
        paddingBottom: '51%',
        height: '61vh'/*during the adaptuv? will change thus scale */
       
    };
    const  btnsvgstyle = {
        fontSize:'20px',
        width:'23px',
        height:'23px',
        marginRight:'11px'
    }

    return (
        <header className="header" style={headerStyle}>
                <div className="container">
                    <div className="header__top">
                        <nav className="nav">
                            <div className="nav__logo">
                                <span>є</span>
                                <p>Лазер</p>
                                
                            </div>
                            <div className="nav__menu">
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
      
    )
}
export default Header