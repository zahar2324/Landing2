import '../Tariffs/Tariffs.scss'
const Tariffs: React.FC = () =>{
    return(
        <>
            <div className="page__tariffs tariffs">
          <div className="tariffs__title-container">
            <h2 className="tariffs__title"><span>Та</span>рифи</h2>
          </div>
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
                протягом <span>8</span>
                місяців
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
                протягом <span>12</span>
                місяців
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
        </>
    )
}
export default Tariffs