//images
import mapasHome from '../../assets/mapasHome.png'
//styles
import './HomeMapas.css'
export const HomeMapas = () => {
    return (
        <div className="homeMapas">
            <div className="HomeContainer">
                <h1>NUESTROS MAPAS</h1>
                <h2>LUCHAD POR TODO EL MUNDO.</h2>

                <p>Cada mapa es una zona de juego en la demostrar vuestro pensamiento creativo. Están creados con el propósito de que se lleven a cabo estrategias de equipo, jugadas impresionantes y momentos decisivos. Jugad de forma que os imiten durante años.</p>

                <button className="button">
                    <span className="button_lg">
                        <span className="button_sl"></span>
                        <span className="button_text">Ver todos los mapas</span>
                    </span>
                </button>
            </div>

            <div className="imgContainer">
                <img src={mapasHome} alt="" />
            </div>
        </div>
    )
}
