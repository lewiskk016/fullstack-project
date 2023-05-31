import Splash from '../../Images/aves-on.jpg'
import './MainPage.css'
// import Smile from '../../Images/welcome-amazon-smile.jpg'


const SplashPage = () => {
    return (
        <div className="splash-page">
            <div className="splash-container">
                <img className="splash-image" src={Splash} alt="splash" />
            </div>
            <h1 className="splash-title">There's nothing wrong with staring...
            {/* <img className="amazon-smile" src={Smile} alt="smile"/> */}
            </h1>
            {/* <h2 className="sub-splash-title">With watching</h2> */}
       </div>
    )
}


export default SplashPage;
