import homeAgente from '../../assets/agentesHome.png'
//styles
import './HomeAgentes.css'
export const HomeAgentes = () => {
    return (
        <div className='sectionAgente'>
            <div className='top'>
                <div className="topContainer">
                    <img className='imgTop' src={homeAgente} alt="" />
                    <div className="topRight">
                        <h1>NUESTROS AGENTES</h1>

                        <h2>LA CREATIVIDAD ES EL ARMA MÁS PODEROSA.</h2>

                        <p>Aparte de las armas y las balas, tendréis a un agente con habilidades letales, adaptables y ágiles que os brindarán oportunidades para demostrar vuestro dominio de las armas. No hay dos agentes iguales, del mismo modo que no hay momentos destacados idénticos.</p>


                        <button className="buttonHomeAgentes">
                            <span className="buttonHomeAgentes_lg">
                                <span className="buttonHomeAgentes_sl"></span>
                                <span className="buttonHomeAgentes_text">Jugar ahora</span>
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
