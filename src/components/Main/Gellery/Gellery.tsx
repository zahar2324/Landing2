import '../Gellery/Gellery.scss'
const Gellery: React.FC = () =>{
    return(
        
        <div className="page__gallery gallery">
          <div className="gallery__title-container">
            <h2 className="gallery__title"><span>Га</span>лерея</h2>
          </div>
          <div className="gallery__slider gallery-slider">
            <div className="gallery-slider-item">
              <img src={process.env.PUBLIC_URL + "/gellery1.jpeg"} alt="img"/>
            </div>
          </div>
          </div>
        
    )
}
export default Gellery;