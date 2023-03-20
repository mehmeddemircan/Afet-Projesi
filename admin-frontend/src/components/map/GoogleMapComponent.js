import React, { createElement, useEffect } from 'react'
import {GoogleMap ,Marker} from '@react-google-maps/api'
import { useDispatch, useSelector } from 'react-redux'
import { AllArea } from '../../redux/actions/AreaActions'
import { Wrapper } from '@googlemaps/react-wrapper'


const GoogleMapComponent = () =>  {

  const getAllArea = useSelector((state) => state.getAllArea)
    const dispatch= useDispatch()
  useEffect(() => {
  dispatch(AllArea())
  }, [dispatch])


  return (
        <GoogleMap mapContainerStyle={{width : '100%', height : '400px'}} center={{lat : 23,lng : 26}} zoom={2}>
                {getAllArea.areas.map((area) => (
                      <Marker position={{
                        lat : area.coordinates.latitude,
                        lng : area.coordinates.longitude
                      }}   >
                      <div className={`marker`}>
                          <h2>hello</h2>
                      </div>
                  </Marker>
                ))}
        </GoogleMap>

     
  )
}

// function Marker() {
//     const markerRef = useRef()
//     const rootRef = useRef()

//     useEffect(() => {
//         if (!rootRef.current) {
//             const container = document.createElement("div")
//             rootRef.current = createElement(container)

//             markerRef.current = new google.maps.marker.AdvancedMarkerView({
//                 position: {lat : 24, lng : 25},
//                 content: container
//             })
//         }
//     }, [])

//     useEffect(() => {
//         rootRef.current.render(children)
//         rootRef.current.position = position
//         markerRef.current.map = map
//     }, [children,position,map])
// }
export default GoogleMapComponent

