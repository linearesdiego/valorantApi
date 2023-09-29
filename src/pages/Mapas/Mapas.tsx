import { useEffect } from "react"
//INTERFACE
import { Mapas as MapasInterface } from "../../interface"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
//redux
import { getMap } from "../../redux/mapSlice"
//styles
import './Mapas.css'
export const Mapas = () => {
    const dispatch = useAppDispatch()
    const mapasData = useAppSelector((state) => state.maps.data) as MapasInterface[]
    console.log(mapasData)

    useEffect(() => {
    
        dispatch(getMap())
    }, [])
    
  return (
    <div className="mapasBox">
        <div className="mapasContainer">
            {
                mapasData.map((item:MapasInterface,index:number) => (
                    <div key={item.uuid} className="mapasItem">
                        <img src={item.displayIcon} alt="" />
                        <p>{item.displayName}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
