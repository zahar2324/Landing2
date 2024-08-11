import '../Benefits/Benefits.scss'
const Benefits: React.FC = () =>{
    return(
        <>
<div className="page__benefits benefits">
          <div className="benefits__title-container">
            <h2 className="benefits__title"><span>На</span>ші переваги</h2>
          </div>
          <div className="benefits__items">
            <div className="benefits__item benefits-item">
              <div className="benefits-item__title">
                <span>1</span> Сучасне обладнання
              </div>
              <div className="benefits-item__text">Ми використовуємо передові технології в області лазерної епіляції, що гарантує безпечність і максимальну ефективність процедур.</div>
            </div>
            <div className="benefits__item benefits-item">
              <div className="benefits-item__title">
                <span>2</span> Професійна команда
              </div>
              <div className="benefits-item__text">Наші досвідченні спеціалісти забезпечать вам високий рівень обслуговування та індивідуальний підхід.</div>
            </div>
            <div className="benefits__item benefits-item">
              <div className="benefits-item__title">
                <span>3</span>Зручність та гнучкість
              </div>
              <div className="benefits-item__text">За допомогою нашого он лайн календаря для запису на візит,  плануйте відвідування в зручний для вас час,  підлаштовуйте графік процедур під свій розклад дня. Це особливо важливо для людей, котрим важко знайти час для регулярних процедур.</div>
            </div>
          </div>
        </div>
        
        </>
    )
}
export default Benefits