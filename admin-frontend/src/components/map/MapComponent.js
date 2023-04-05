import React, { Fragment, useEffect, useState, useRef } from "react";
import GoogleMapReact from "google-map-react";
import { useDispatch, useSelector } from "react-redux";
import { AllArea } from "../../redux/actions/AreaActions";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import SearchMapButton from "./SearchMapButton";
import FiltersButton from "./FiltersButton";
import {
  ADD_AREA_RESET,
  DELETE_AREA_RESET,
} from "../../redux/constants/AreaConstants";
import { toast } from "react-toastify";
import LoadingSpinner from "../spinner/LoadingSpinner";
import FiltersButtonMapContent from "../popover/FiltersButtonMapContent";
import FiltersButtonTaskContent from "../popover/FiltersButtonTaskContent";
import { AllCountry } from "../../redux/actions/CountryActions";
import { GetTaskByCityId } from "../../redux/actions/TaskActions";
import { AllCity } from "../../redux/actions/CityActions";
import { GetAllUserLocations } from "../../redux/actions/UserActions";
import CreateAreaMarker from "./markers/CreateAreaMarker";
import AreaMarker from "./markers/AreaMarker";
import TaskMarker from "./markers/TaskMarker";
import UserMarker from "./markers/UserMarker";

export default function MapComponent() {
  const defaultProps = {
    center: {
      lat: 39,
      lng: 36,
    },
    zoom: 6,
  };

  const getAllArea = useSelector((state) => state.area.getAllArea);
  const addArea = useSelector((state) => state.area.addArea);
  const deleteUpdateArea = useSelector((state) => state.area.deleteUpdateArea);
  const [checkedValues, setCheckedValues] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllArea(checkedValues));
    if (addArea.success) {
      setMarker(null);
      dispatch({ type: ADD_AREA_RESET });
    }
    if (deleteUpdateArea.isDeleted) {
      toast(deleteUpdateArea.message);
      dispatch({ type: DELETE_AREA_RESET });
    }
  }, [
    dispatch,
    checkedValues.length,
    addArea.success,
    deleteUpdateArea.isDeleted,
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

  // search and focus
  const [address, setAddress] = useState("");
  const [center, setCenter] = useState(defaultProps.center);
  const [zoom, setZoom] = useState(defaultProps.zoom);
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
  // onClick
  const [marker, setMarker] = useState(null);

  const onMapClick = (event) => {
    setMarker({
      lat: event.lat,
      lng: event.lng,
    });
  };
  // live location

  const [showTaskFilter, setShowTaskFilter] = useState(false);

  const handleToggleShowTaskFilter = () => {
    setShowTaskFilter((prev) => !prev);
  };

  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");

  const getTaskByCity = useSelector((state) => state.task.getTaskByCity);
  const [selectedCities, setSelectedCities] = useState([]);

  useEffect(() => {
    if (showTaskFilter) {
      dispatch(AllCountry());
      dispatch(GetTaskByCityId(selectedCities));
    }
  }, [dispatch, showTaskFilter, text, dueDate]);

  const handleAddCityChange = (value) => {
    setSelectedCities(value);
  };

  const handleCountryChange = (value) => {
    dispatch(AllCity(value));
  };

  useEffect(() => {
    dispatch(GetTaskByCityId(selectedCities));
  }, [dispatch, selectedCities]);

  //Live location
  const getAllUserLocations = useSelector((state) => state.getAllUserLocations);
  const [showLiveLocation, setShowLiveLocation] = useState(false);
  const handleToogleLiveLocation = () => {
    setShowLiveLocation((prev) => !prev);
    if (showTaskFilter) {
      setShowTaskFilter(false);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (showLiveLocation) {
        dispatch(GetAllUserLocations());
      }
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch, showLiveLocation]);

  return (
    // Important! Always set the container height explicitly
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
            Live Location
          </button>
          <button
            className="btn btn-outline-primary rounded-pill "
            onClick={handleToggleShowTaskFilter}
          >
            {showTaskFilter ? "Show Areas" : "Show Tasks"}
          </button>
          <FiltersButton
            title={
              showTaskFilter
                ? "Filters tasks by city"
                : "Filters areas by Priority order"
            }
            content={
              showTaskFilter ? (
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
            {showTaskFilter ? "Filters Task" : "Filters Area"}
          </FiltersButton>
        </div>
      </div>

      <div className="container-fluid" style={{ height: "100vh" }}>
        <GoogleMapReact
          center={center}
          zoom={zoom}
          onChange={handleMapChange}
          onClick={onMapClick}
        >
          {showLiveLocation ? (
            !getAllUserLocations.success ? (
              <LoadingSpinner />
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
          ) : showTaskFilter ? (
            !getTaskByCity.success ? (
              <LoadingSpinner />
            ) : (
              getTaskByCity.tasks.map((task) => (
                <TaskMarker
                  key={task._id}
                  task={task}
                  lat={task.location.lat}
                  lng={task.location.lng}
                />
              ))
            )
          ) : !getAllArea.success ? (
            <LoadingSpinner />
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

          {marker && <CreateAreaMarker lat={marker.lat} lng={marker.lng} />}
        </GoogleMapReact>
      </div>
    </Fragment>
  );
}
