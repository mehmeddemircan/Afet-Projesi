import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div className="card">
    <div className="btn btn-outline-primary">{text}</div>;
  </div>
);

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 39,
      lng: 36,
    },
    zoom: 6,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={39.955413} lng={32.337844} text="Deneme" />
      </GoogleMapReact>
    </div>
  );
}
