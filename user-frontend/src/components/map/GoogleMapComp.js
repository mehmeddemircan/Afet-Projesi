import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { useDispatch, useSelector } from "react-redux";
import AreaMarker from "./markers/AreaMarker";
import { AllArea } from "../../redux/actions/AreaActions";
import LoadingSpinner from "../spinner/LoadingSpinner";
import MapLoadingSpinner from "../spinner/MapLoadingSpinner";
const GoogleMapComp = () => {
  const defaultProps = {
    center: {
      lat: 39,
      lng: 36,
    },
    zoom: 6,
  };

  const [center, setCenter] = useState(defaultProps.center);
  const [zoom, setZoom] = useState(defaultProps.zoom);

//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [selectedPeople, setSelectedPeople] = useState([]);
//   const [checkedValues, setCheckedValues] = useState([]);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(AllArea(selectedProducts, checkedValues, selectedPeople));
//   }, [
//     dispatch,
//     checkedValues.length,
//     selectedProducts.length,
//     selectedPeople.length,
//   ]);
  const getAllArea = useSelector((state) => state.area.getAllArea);
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <GoogleMapReact center={center} zoom={zoom}>
        {getAllArea.loading ? (
          <MapLoadingSpinner />
        ) : (
          getAllArea.areas.map((area) => (
            <AreaMarker
              area={area}
              key={area._id}
              lat={area.coordinates.latitude}
              lng={area.coordinates.longitude}
              text={
                <>
                  <a>{area.name} Depremi</a>
                </>
              }
            />
          ))
        )}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMapComp;
