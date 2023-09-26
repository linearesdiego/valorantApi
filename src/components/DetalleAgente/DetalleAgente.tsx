import './DetalleAgente.css'
//images
import videoAgente from '../../assets/detalleAgenteVideo.mp4'
import { useNavigate, useParams } from 'react-router-dom'
//HOOKS
import { useEffect, useState } from 'react'
import { AgentSliceState, getAgent, getAgentId } from '../../redux/agentSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Ability, Agentes as agentInterface } from '../../interface'
//slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//motion
import { motion } from 'framer-motion';

export const DetalleAgente = () => {
    const [infoAgente, setInfoAgente] = useState<Ability>({
        slot: 'Ability1',
        displayName: 'Sonic Sensor',
        description:
            'EQUIP a Sonic Sensor. FIRE to deploy. The sensor monitors an area for enemies making sound. It concusses that area if footsteps, weapons fire, or significant noise are detected.',
        displayIcon:
            'https://media.valorant-api.com/agents/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235/abilities/ability1/displayicon.png'
    })
    const [click, setClick] = useState<Boolean>(false)
    const [imageVisible, setImageVisible] = useState(true);

    const { id } = useParams()
    const dispatch = useAppDispatch()
    const detalleAgente = useAppSelector((state) => state.agent.AgenteId) as agentInterface
    console.log(detalleAgente)
    const agentes = useAppSelector((state) => state.agent.data) as agentInterface[]
    const settings = {
        infinite: true,
        slidesToShow: 20,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,

    };
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getAgentId(id))
        dispatch(getAgent())
    }, [dispatch, id])

    const handleClick = (item: Ability) => {
        setInfoAgente(item)

    }
    return (
        <>
            <div className='homeAgentesDetalle'>
                <video width="100%" height="100%" autoPlay muted loop>
                    <source src={videoAgente} type="video/mp4" />
                </video>
                <div className="AgentesDetalleInfo">
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

                    <div className="infoAgente">
                        {imageVisible && (
                            <motion.div
                                initial={{ y: -500, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -500, opacity: 0 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            >
                                <img
                                    className='AgentesDetalleInfoImg'
                                    src={detalleAgente.fullPortraitV2}
                                    alt=""
                                />
                            </motion.div>
                        )}
                        <div className="">
                            <h2>//ROL</h2>
                            <p className='rol'>{detalleAgente?.role?.displayName}<span><img className='imgRol' src={detalleAgente?.role?.displayIcon} alt="" /></span>
                            </p>


                            <h2>//BIOGRAFIA</h2>
                            <p>{detalleAgente?.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className='habilidadesBox'>
                <div className='habilidadesContainer'>
                    <div className="infoHabilidades">
                        <h1>HABILIDADES ESPECIALES</h1>
                        <div className="infoImg">
                            {
                                detalleAgente?.abilities?.map((item) => (
                                    <img onClick={() => handleClick(item)}
                                        className="habilidadesImg"
                                        key={item.displayIcon} src={item?.displayIcon} alt="" />
                                ))
                            }
                        </div>


                    </div>
                    <div className='infoHabilidadesItem'>
                        <h1 className='infoHabilidadesItemTitle'>{infoAgente?.displayName}</h1>
                        <p className='infoHabilidadesItemParrafo'>{infoAgente?.description}</p>
                    </div>
                </div>
            </section>
        </>
    )
}
