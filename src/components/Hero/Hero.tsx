import video from '../../assets/valorantVideo.mp4'
import valorant from '../../assets/Valorant.svg'
//STYLES
import './Hero.css'
export const Hero = () => {
    return (
        <div className="hero">
            <video width="100%" height="100%" autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
            <div className="heroMiddle">
                <p>Un shooter táctico 5v5 basado en personajes</p>

                <img className="heroMiddleImg" src={valorant} alt="" />

                <button className="button">
                    <span className="button_lg">
                        <span className="button_sl"></span>
                        <span className="button_text">Jugar ahora</span>
                    </span>
                </button>
            </div>
            <div className="heroTriangulo"></div>
        </div>
    )
}
