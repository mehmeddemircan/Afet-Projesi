import React, { Fragment, useEffect, useState, useRef } from "react";
import GoogleMapReact from "google-map-react";
import { UserOutlined } from "@ant-design/icons";
import { List, Badge, Button, Popover, Tag, Tooltip, Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AllArea, DeleteArea } from "../../redux/actions/AreaActions";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import SearchMapButton from "./SearchMapButton";
import FiltersButton from "./FiltersButton";
import AddAreaModal from "../modal/Area/AddAreaModal";
import {
  ADD_AREA_RESET,
  DELETE_AREA_RESET,
} from "../../redux/constants/AreaConstants";
import { toast } from "react-toastify";
import LoadingSpinner from "../spinner/LoadingSpinner";
import ReqProductMapTag from "../tag/ReqProductMapTag";
import ReqPersonMapTag from "../tag/ReqPersonMapTag";

import FiltersButtonMapContent from "../popover/FiltersButtonMapContent";
import FiltersButtonTaskContent from "../popover/FiltersButtonTaskContent";
import { AllCountry } from "../../redux/actions/CountryActions";
import { GetAllTask, GetTaskByCityId } from "../../redux/actions/TaskActions";
import { AllCity } from "../../redux/actions/CityActions";

const TaskMarkerComponent = ({ task }) => {
  return (
    <Popover
      overlayStyle={{
        maxWidth: "300px",
      }}
      trigger={"hover"}
      title={<h6>{task.text}</h6>}
    >
      <Button type="default" icon={<i class="fa-solid fa-check"></i>} />
    </Popover>
  );
};

const MarkerComponent = ({ area, text }) => {
  const dispatch = useDispatch();

  const handleDeleteArea = (id) => {
    dispatch(DeleteArea(id));
  };

  return (
    <Popover
      content={
        <div>
          <div className="d-flex justify-content-start">
            <p className="me-2">latitude {area.coordinates.latitude} |</p>
            <p>longitude {area.coordinates.longitude}</p>
          </div>
          <p
            style={{
              maxWidth: "260px",
            }}
          >
            gerekli ürünler{" "}
            {area.requrired_products.length == 0 ? (
              "ihtiyac yok"
            ) : (
              <div className="d-flex flex-wrap justify-content-start">
                {area.requrired_products.map((product) => (
                  <ReqProductMapTag key={product._id} product={product} />
                ))}
              </div>
            )}{" "}
          </p>

          <p>
            gerekli insanlar :{" "}
            {area.requrired_products.length == 0 ? (
              "ihtiyac yok"
            ) : (
              <div className="d-flex flex-wrap justify-content-start">
                {area.requrired_people.map((person) => (
                  <ReqPersonMapTag person={person} key={person._id} />
                ))}
              </div>
            )}
          </p>
        </div>
      }
      title={
        <div className="d-flex justify-content-between">
          <a>{text}</a>
          <i
            class="fa-solid fa-x"
            onClick={() => handleDeleteArea(area._id)}
          ></i>
        </div>
      }
    >
      <Button type="default" icon={<i class="fa-solid fa-hand"></i>}></Button>
    </Popover>
  );
};

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

  const getAllTask = useSelector((state) => state.task.getAllTask);
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
          <Badge.Ribbon text="New">
            <button
              className="btn btn-outline-primary rounded-pill "
              onClick={handleToggleShowTaskFilter}
            >
              {showTaskFilter ? "Show Areas" : "Show Tasks"}
            </button>
          </Badge.Ribbon>
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
          {/* <UserMarkerComponent
            lat={location?.latitude}
            lng={location?.longitude}
          /> */}

          {showTaskFilter ? (
            !getTaskByCity.success ? (
              <LoadingSpinner />
            ) : (
              getTaskByCity.tasks.map((task) => (
                <TaskMarkerComponent
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
              <MarkerComponent
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

          {marker && <Marker lat={marker.lat} lng={marker.lng} />}
        </GoogleMapReact>
      </div>
    </Fragment>
  );
}

const Marker = ({ lat, lng, marker }) => {
  const [showAddAreaModal, setShowAddAreaModal] = useState(false);

  const handleShowAddAreaModal = () => {
    setShowAddAreaModal(true);
  };

  const handleCloseAddAreaModal = () => {
    setShowAddAreaModal(false);
  };

  return (
    <Tooltip placement="topLeft" title={showAddAreaModal ? "" : "Add Area"}>
      <Button
        style={{ position: "fixed" }}
        type="ghost"
        icon={
          <i class="fa-sharp fa-solid fa-location-dot text-danger fs-4"></i>
        }
        onClick={handleShowAddAreaModal}
      ></Button>

      <AddAreaModal
        marker={marker}
        lat={lat}
        lng={lng}
        showAddAreaModal={showAddAreaModal}
        handleCloseAddAreaModal={handleCloseAddAreaModal}
      />
    </Tooltip>
  );
};
