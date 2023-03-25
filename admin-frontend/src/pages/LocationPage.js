import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllUserLocations,
  SaveLocation,
  UpdateLiveLocation,
} from "../redux/actions/LocationActions";
import { Avatar, Button, Popover } from "antd";
import GoogleMapReact from "google-map-react";
import { UPDATE_LIVE_LOCATION_RESET } from "../redux/constants/LocationConstants";
const UserMarkerComponent = ({ userLocation, lat, lng }) => {
  return (
    <Popover
      content={
        <>
          <h6>{userLocation.userId.name}</h6>
          <a>lat : {lat}</a>
          <a>lat : {lng}</a>
        </>
      }
    >
      <Button type="link">
        <Avatar icon={<UserOutlined />} />
      </Button>
    </Popover>
  );
};

const LocationPage = () => {
  const [location, setLocation] = useState(null);
  const auth = useSelector((state) => state.auth);
  const updateUserLocation = useSelector((state) => state.updateUserLocation);
  const dispatch = useDispatch();
  // Check if user has shared location before

  useEffect(() => {
    let watchId;

    const successCallback = (position) => {
      setLocation(position.coords);
      const { latitude, longitude } = position.coords;
      if (auth && auth.user && auth.token != null) {
        dispatch(UpdateLiveLocation(auth.user._id, latitude, longitude));
      }
    };

    const errorCallback = (error) => {
      console.log(error);
    };

    if ("permissions" in navigator) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          // Permission already granted
          watchId = navigator.geolocation.watchPosition(
            successCallback,
            errorCallback,
            {
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0,
              distanceFilter: 10,
            }
          );
        } else if (result.state === "prompt") {
          // Ask user for permission
          navigator.geolocation.getCurrentPosition(
            successCallback,
            errorCallback
          );
        } else {
          // Permission denied
          console.log("Permission denied");
        }
      });
    } else {
      // Permissions API not supported
      console.log("Permissions API not supported");
    }

    const intervalId = setInterval(() => {
      if (location && auth && auth.user && auth.token != null) {
        dispatch(
          UpdateLiveLocation(
            auth.user._id,
            location.latitude,
            location.longitude
          )
        );
      }
    }, 10000);

    return () => {
      navigator.geolocation.clearWatch(watchId);
      clearInterval(intervalId);
    };
  }, [auth, dispatch, location]);

  const getAllUserLocations = useSelector((state) => state.getAllUserLocations);

  useEffect(() => {
    dispatch(GetAllUserLocations());
  }, [dispatch, updateUserLocation]);

  const defaultProps = {
    center: {
      lat: 39,
      lng: 36,
    },
    zoom: 6,
  };

  return (
    <MainLayout>
      <h2>location page</h2>
      <h2>{auth.user.name}</h2>
      <h2>{auth.user._id}</h2>
      <div>
        {location && (
          <>
            <p>
              Latitude: {location.latitude}, Longitude: {location.longitude}
            </p>
          </>
        )}
        <div className="container-fluid" style={{ height: "100vh" }}>
          <GoogleMapReact center={defaultProps.center} zoom={defaultProps.zoom}>
            {getAllUserLocations.loading ? (
              <h2>Loading..</h2>
            ) : (
              getAllUserLocations.userLocations &&
              getAllUserLocations.userLocations.map((userLocation) => (
                <UserMarkerComponent
                  userLocation={userLocation}
                  key={userLocation._id}
                  lat={userLocation?.latitude}
                  lng={userLocation?.longitude}
                />
              ))
            )}
          </GoogleMapReact>
        </div>
      </div>
    </MainLayout>
  );
};

export default LocationPage;
