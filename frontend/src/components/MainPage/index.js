import Splash from '../../Images/aves-on.jpg'
import './MainPage.css'


const SplashPage = () => {
    return (
        <div className="splash-page">
            <div className="splash-container">
                <img className="splash-image" src={Splash} alt="splash" />
            </div>
       </div>
    )
}


export default SplashPage;
