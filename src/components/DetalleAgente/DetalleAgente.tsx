import './DetalleAgente.css'
//images
import videoAgente from '../../assets/detalleAgenteVideo.mp4'
import { useParams } from 'react-router-dom'
//HOOKS
import { useEffect } from 'react'
import { getAgentId } from '../../redux/agentSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
export const DetalleAgente = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const { data } = useAppSelector((state) => state.agent)

    useEffect(() => {
        dispatch(getAgentId(id))
    }, [dispatch, id])

    return (
        <div className='homeAgentesDetalle'>
            <video width="100%" height="100%" autoPlay muted loop>
                <source src={videoAgente} type="video/mp4" />
            </video>
            <div className="AgentesDetalleInfo">
                <img src={data?.data?.fullPortraitV2} alt="" />
                <div className="infoAgente">
                    <h1>//ROL</h1>
                    <span>{data?.data?.role?.displayName}</span>

                    <div className="">
                        <h1>//BIOGRAFIA</h1>
                        <p>{data?.data?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
