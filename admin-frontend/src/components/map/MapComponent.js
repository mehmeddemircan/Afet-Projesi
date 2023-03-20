import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Button, Popover } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AllArea } from "../../redux/actions/AreaActions";

const AnyReactComponent = ({ area, text }) => (
  <Popover
    content={
      <div>
        <p>latitude {area.coordinates.latitude}</p>
        <p>longitude {area.coordinates.longitude}</p>
        <p>gerekli ürünler : </p>
        <p>gerekli insanlar</p>
      </div>
    }
    title={text}
  >
    <Button type="default" icon={<i class="fa-solid fa-hand"></i>}></Button>
  </Popover>
);

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 39,
      lng: 36,
    },
    zoom: 6,
  };

  const getAllArea = useSelector((state) => state.getAllArea);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllArea());
  }, [dispatch]);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {!getAllArea.success ? (
          <h2>loading</h2>
        ) : (
          getAllArea.areas.map((area) => (
            <AnyReactComponent
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
}
