import React, { Fragment, useRef, useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { List, Popover } from "antd";


const HeaderSearchButton = () => {
  // search
  const [address, setAddress] = useState("");
  const [center, setCenter] = useState({ lat: 37.7749, lng: -122.4194 });
  const [zoom, setZoom] = useState(11);
  const mapRef = useRef();
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    console.log(latLng.lat);
    console.log(latLng.lng);
    setAddress(value);
    setCenter(latLng);
    setZoom(15);
    mapRef.current.panTo(latLng);
   
  };

  
  const handleMapChange = ({ center }) => {
    setCenter(center);
    setZoom(12);
  };

  return (
    <Fragment>
      <Popover
        onOpenChange={() => setAddress("")}
        overlayStyle={{
          width: "512px",
        }}
        placement="bottomRight"
        content={
          <div>
            <PlacesAutocomplete
              value={address}
              onChange={setAddress}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  <input
                    className="form-control w-100 mb-3"
                    {...getInputProps({ placeholder: "Search places..." })}
                  />
                  <List>
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const style = {
                        backgroundColor: suggestion.active ? "#e6e6e6" : "#fff",
                      };
                      return (
                        <List.Item
                          {...getSuggestionItemProps(suggestion, { style })}
                        >
                          {suggestion.description}
                        </List.Item>
                      );
                    })}
                  </List>
                </div>
              )}
            </PlacesAutocomplete>
          </div>
        }
        title={
          <a style={{ color: "rgb(255,56,92)", fontSize: "15px" }}>
            Search Your Address
          </a>
        }
        trigger="click"
      >
        <button
          style={{ backgroundColor: "rgb(255,56,92)" }}
          className="btn rounded-pill mx-2"
        >
          <i class="fa-solid fa-magnifying-glass text-white"></i>
        </button>
      </Popover>
      
    </Fragment>
  );
};

export default HeaderSearchButton;
