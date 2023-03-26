import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import { Avatar, Button, Popover } from "antd";
import GoogleMapReact from "google-map-react";
import {
  GetAllUserLocations,
  UpdateLiveLocation,
} from "../redux/actions/UserActions";

const UserMarkerComponent = ({ userLocation, lat, lng }) => {
  return (
    <Popover
      content={
        <>
          <h6>{userLocation.name}</h6>
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
  const auth = useSelector((state) => state.auth);

  const [location, setLocation] = useState(null);

  const dispatch = useDispatch();
  // Check if user has shared location before
  const [watchId, setWatchId] = useState(null);
  useEffect(() => {
    let watchId = null;

    if ("permissions" in navigator) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          // Permission already granted
          watchId = navigator.geolocation.watchPosition(
            (position) => {
              setLocation(position.coords);
              dispatch(
                UpdateLiveLocation(
                  auth.user._id,
                  location.latitude,
                  location.longitude
                )
              );
  
            },
            (error) => console.log(error),

            {
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0,
            }
          );
        } else if (result.state === "prompt") {
          // Ask user for permission
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLocation(position.coords);
              dispatch(
                UpdateLiveLocation(
                  auth.user._id,
                  location.latitude,
                  location.longitude
                )
              );
            },
            (error) => console.log(error)
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
    setWatchId(watchId);
    
    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  
  }, [auth, dispatch, location]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(GetAllUserLocations());
    }, 10000);

    return () => {
      clearInterval(intervalId);
    }
  }, [dispatch]);
  
  
  const getAllUserLocations = useSelector((state) => state.getAllUserLocations);

  const defaultProps = {
    center: {
      lat: 39,
      lng: 36,
    },
    zoom: 6,
  };
  // butonlu kısım 

    const [permissionGranted, setPermissionGranted] = useState(false);
  
    const handlePermissionClick = () => {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          // Permission already granted
          setPermissionGranted(true);
        } else if (result.state === "prompt") {
          // Ask user for permission
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setPermissionGranted(true);
              setLocation(position.coords)
            },
            (error) => console.log(error)
          );
        } else {
          // Permission denied
          console.log("Permission denied");
        }
      });

    }

  return (
    <MainLayout>
      <h2>location page</h2>
      <h2>{auth.user.name}</h2>
      <h2>{auth.user._id}</h2>
      <div>
      {!permissionGranted && (
        <button className="btn btn-primary" onClick={handlePermissionClick}>Allow Location Access</button>
      )}
    </div>
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
                  lat={userLocation.location.lat}
                  lng={userLocation.location.lng}
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
