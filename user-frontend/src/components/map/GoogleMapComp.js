import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { useDispatch, useSelector } from "react-redux";
import AreaMarker from "./markers/AreaMarker";
import { AllArea } from "../../redux/actions/AreaActions";
import LoadingSpinner from "../spinner/LoadingSpinner";
import MapLoadingSpinner from "../spinner/MapLoadingSpinner";
import { Fragment } from "react";
import FiltersButton from "./FiltersButton";
import SearchMapButton from "./SearchMapButton";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { useRef } from "react";
import { GetTasksByCityId } from "../../redux/actions/TaskActions";
import { AllCity, AllCountry } from "../../redux/actions/CityCountryActions";
import FiltersButtonMapContent from "../popover/FiltersButtonAreaContent";
import TaskMarker from "./markers/TaskMarker";
import FiltersButtonTaskContent from "../popover/FiltersButtonTaskContent";
import { AllPersonType } from "../../redux/actions/PersonTypeActions";
import { GetUsersByRole } from "../../redux/actions/UserActions";
import UserMarker from "./markers/UserMarker";
import FiltersButtonUserContent from "../popover/FiltersButtonUserContent";
const GoogleMapComp = () => {
  const defaultProps = {
    center: {
      lat: 39,
      lng: 36,
    },
    zoom: 6,
  };

  const dispatch = useDispatch()

  const [center, setCenter] = useState(defaultProps.center);
  const [zoom, setZoom] = useState(defaultProps.zoom);


  const getAllArea = useSelector((state) => state.area.getAllArea);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [checkedValues, setCheckedValues] = useState([]);

  useEffect(() => {
    dispatch(AllArea(selectedProducts, checkedValues, selectedPeople));
  }, [
    dispatch,
    checkedValues.length,
    selectedProducts.length,
    selectedPeople.length,
  ]);
    // Filter actions
    const handleCheckboxChange = (value) => {
      if (checkedValues.includes(value)) {
        // Remove the value from the checkedValues array if it already exists
        setCheckedValues(checkedValues.filter((v) => v !== value));
      } else {
        // Add the value to the checkedValues array if it doesn't already exist
        setCheckedValues([...checkedValues, value]);
      }
    };
  
    const [showTasks, setShowTasks] = useState(false)
    const handleToggleShowTasks = () => {
      setShowTasks((prev) => !prev)
    }
  
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");

  const getTasksByCity = useSelector((state) => state.task.getTasksByCity);
  const [selectedCities, setSelectedCities] = useState([]);

  useEffect(() => {
    if (showTasks) {
      dispatch(AllCountry());
      dispatch(GetTasksByCityId(selectedCities));
    }
  }, [dispatch, showTasks, text, dueDate,selectedCities.length]);

  const handleAddCityChange = (value) => {
    setSelectedCities(value);
  };

  const handleCountryChange = (value) => {
    dispatch(AllCity(value));
  };




   // search and focus
   const [address, setAddress] = useState("");

   const mapRef = useRef();
 
   const handleSelect = async (value) => {
     const results = await geocodeByAddress(value);
     const latLng = await getLatLng(results[0]);
     console.log(latLng.lat);
     console.log(latLng.lng);
     setAddress(value);
     setCenter(latLng);
 
     if (address.length > 20) {
       setZoom(13);
     } else {
       setZoom(10);
     }
 
     mapRef.current.panTo(latLng);
   };
 
   useEffect(() => {
     if (address === "") {
       setCenter(defaultProps.center);
       setZoom(defaultProps.zoom);
     }
   }, [address]);
 
   const handleMapChange = ({ center }) => {
     setCenter(center);
 
     if (address && address.length < 20) {
       setZoom(13);
     }
     if (address.length > 20) {
       setZoom(15);
     }
   };

     //Live location
  const getAllUserLocations = useSelector((state) => state.user.getAllUserLocations);
  const [showLiveLocation, setShowLiveLocation] = useState(false);
  const handleToogleLiveLocation = () => {
    setShowLiveLocation((prev) => !prev);
    if (showTasks) {
    
      setShowTasks(false);
    }
    if (!showTasks) {
      dispatch(AllPersonType())
    }
  };
  const [selectedRoles, setSelectedRoles] = useState([])
  const handleAddUserRole = (value) => {
    setSelectedRoles(value)
}
  useEffect(() => {

    if (showLiveLocation && selectedRoles.length === 0) {
      dispatch(GetUsersByRole(selectedRoles));
    }
    if (showLiveLocation && selectedRoles.length > 0) {
      dispatch(GetUsersByRole(selectedRoles))
    }

    const intervalId = setInterval(() => {
      if (showLiveLocation && selectedRoles.length === 0) {
        dispatch(GetUsersByRole(selectedRoles));
      }
      if (showLiveLocation && selectedRoles.length > 0) {
        dispatch(GetUsersByRole(selectedRoles))
      }
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch, showLiveLocation,selectedRoles.length]);

  return (

    <Fragment>
          <div className="container my-3">
        <div className="d-flex flex-row justify-content-end">
          <SearchMapButton
            address={address}
            setAddress={setAddress}
            handleSelect={handleSelect}
          />
    
          <button
            className={
              showLiveLocation
                ? "btn btn-primary rounded-pill me-2"
                : "btn  btn-outline-primary rounded-pill me-2"
            }
            onClick={handleToogleLiveLocation}
          >
            Canlı Konum
          </button>
          <button
            className="btn btn-outline-primary rounded-pill "
            onClick={handleToggleShowTasks}
          >
            {showTasks ? "Alanları göster" : "Görevleri Göster"}
          </button>
          <FiltersButton
            title={
              showLiveLocation ? 
                "Rollere göre Filtrele" : 
              showTasks
                ? "Sehirlete Göre Filtrele"
                : "Öncelik , Gerekli İnsan ve Ürüne göre"
            }
            content={
              showLiveLocation ? (
                <FiltersButtonUserContent handleAddUserRole ={handleAddUserRole}/>
            ) : 
              showTasks ? (
                <FiltersButtonTaskContent
                  selectedCities={selectedCities}
                  handleAddCityChange={handleAddCityChange}
                  handleCountryChange={handleCountryChange}
                />
              ) : (
                <FiltersButtonMapContent
                  handleCheckboxChange={handleCheckboxChange}
                />
              )
             }
          >
            {showLiveLocation
              ? "Kulanicilari Filtrele"
              : showTasks
              ? "Görevleri Filtrele"
              : "Alanlari Filtrele"}
          </FiltersButton>
        </div>
      </div>

      <div className="container-fluid" style={{ height: "100vh" }}>
      <GoogleMapReact center={center} zoom={zoom} onChange={handleMapChange}>
      {showLiveLocation ? (
  
            !getAllUserLocations.success ? (
              <MapLoadingSpinner />
            ) : (
              getAllUserLocations.userLocations &&
              getAllUserLocations.userLocations.map((userLocation) => (
                <UserMarker
                  userLocation={userLocation}
                  key={userLocation._id}
                  lat={userLocation.location.lat}
                  lng={userLocation.location.lng}
                />
              ))
            )
          ) : showTasks ? (
            !getTasksByCity.success ? (
              <MapLoadingSpinner />
            ) : (
              getTasksByCity.tasks.map((task) => (
                <TaskMarker
                  key={task._id}
                  task={task}
                  lat={task.location.lat}
                  lng={task.location.lng}
                />
              ))
            )
          ) : !getAllArea.success ? (
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
    </Fragment>

    
  );
};

export default GoogleMapComp;
