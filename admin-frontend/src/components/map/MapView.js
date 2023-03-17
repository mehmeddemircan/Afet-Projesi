import { Fragment } from "react"
import  {
    interaction, layer, custom, control, interactions,
    Overlays, Controls, Map, Layers, Overlay, Util
    
  } from "react-openlayers"


  const MapView = () => {

  
    return (
       <div>
        <Map  view = {{center: [0,0], zoom:2}}>
          <Layers>
            <layer.Tile></layer.Tile>
          </Layers>
        </Map>
   </div>
    )
  }
  
  export default MapView



 
