import { GoogleMap } from "@react-google-maps/api"
import { createElement, useEffect, useRef } from "react"


const AdvancedMarker = ({map, children , position}) => {
    const markerRef = useRef()
    const rootRef = useRef()

    useEffect(() => {
        if (!rootRef.current) {
            const container = document.createElement("div")
            rootRef.current = createElement(container)

            markerRef.current = new GoogleMap.maps.marker.AdvancedMarkerView({
                position: {lat : 24, lng : 25},
                content: container
            })
        }
    }, [])

    useEffect(() => {
        rootRef.current.render(children)
        rootRef.current.position = position
        markerRef.current.map = map
    }, [children,position,map])
}
export default AdvancedMarker