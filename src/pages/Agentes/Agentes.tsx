//styles
import './Agentes.css'
//redux 

import { getAgent } from '../../redux/agentSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
//hooks
import { useEffect } from 'react';
//images
import agentesImg from '../../assets/agentes.png'
//slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Agentes as agentInterface } from '../../interface';
import { useNavigate } from 'react-router-dom';

export const Agentes = () => {
    const dispatch = useAppDispatch()
    const agentes = useAppSelector((state) => state.agent.data)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getAgent())
    }, [])

    const settings = {
        infinite: true,
        slidesToShow: 20,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,

    };
    return (
        <section className="agenteBox">
            <div className="back">
                <div className="imgContainerAgentes">
                    <img src={agentesImg} alt="" />
                </div>

                <div className="slider">
                    <Slider {...settings}>
                        {agentes.length > 0 ? (
                            agentes?.map((item: agentInterface) => (
                                <div key={item.uuid}>
                                    <h3 onClick={() => navigate(`/detalleAgent/${item.uuid}`)} >{item.displayName}</h3>
                                </div>
                            ))
                        ) : (
                            <div>Loading...</div>
                        )}
                    </Slider>
                </div>
            </div>

            <div className="footerAgent">
                <p>Descargar el Juego</p>
                <span>Descargar la aplicación para móviles de Riot Mobile</span>
            </div>
        </section>
    )
}
