import Splash from '../../Images/aves-on.jpg'
import './MainPage.css'
import Splash2 from '../../Images/splash2.jpg'
import Splash3 from '../../Images/binoc.jpg'
import Splash4 from '../../Images/birdfeeder.jpg'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const SplashPage = () => {
    return (
        <div className="splash-page">
            <Carousel autoPlay interval={2000} infiniteLoop>
            <div className="splash-container">
                <img className="splash-image" src={Splash} alt="splash" />
                <h3 className="splash-text">There's Nothing Wrong With Staring...</h3>
            </div>
            <div className="splash-container2">
                <img className="splash-image2" src={Splash2} alt="splash2" />
                <h3 className="splash-text2">Shop Our Latest Binoculars</h3>
            </div>
            <div className="splash-container3">
                <img className="splash-image3" src={Splash3} alt="splash3" />
                <h3 className="splash-text3">New Bird Seed in Stock</h3>
            </div>
            <div className="splash-container4">
                <img className="splash-image4" src={Splash4} alt="splash4" />
                <h3 className="splash-text4">Shop Our Latest Bird Feeders</h3>
            </div>
            </Carousel>
       </div>
    )
}

export default SplashPage;
