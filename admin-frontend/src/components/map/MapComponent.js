import React, { Fragment, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Badge, Button, Popover, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AllArea } from "../../redux/actions/AreaActions";

const AnyReactComponent = ({ area, text }) => (
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
                <div className="mt-2 ms-2">
                  <Badge count={product.quantity} className="me-2">
                    <Tag color="#f50">{product.Product.title}</Tag>
                  </Badge>
                </div>
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
                <div className="mt-2 ms-2">
                  <Badge count={person.quantity} className="me-2">
                    <Tag color="#f50">{person.Person.name}</Tag>
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </p>
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
  const [checkedValues, setCheckedValues] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllArea(checkedValues));
  }, [dispatch,checkedValues.length]);

  const handleCheckboxChange = (value) => {
    if (checkedValues.includes(value)) {
      // Remove the value from the checkedValues array if it already exists
      setCheckedValues(checkedValues.filter((v) => v !== value));
    } else {
      // Add the value to the checkedValues array if it doesn't already exist
      setCheckedValues([...checkedValues, value]);
    }
  };
  return (
    // Important! Always set the container height explicitly
    <Fragment>
      <div className="container my-3">
        <div className="d-flex flex-row justify-content-end">
          <Popover
            placement="bottom"
            content={
              <div className="d-flex flex-column">
                <div className="px-2 mb-2 border-bottom">
                  {" "}
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value="Cok Acil"
                    id="flexCheckDefault"
                    onClick={(e)  => handleCheckboxChange(e.target.value) }
                  />{" "}
                  <a
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    Cok Acil Olanlar
                  </a>
                </div>
                <div className="px-2  mb-2 border-bottom">
                  {" "}
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value="Acil"
                    id="flexCheckDefault"
                    onClick={(e)  => handleCheckboxChange(e.target.value) }
                  />{" "}
                  <a
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    {" "}
                    Acil Olanlar
                  </a>
                </div>
                <div className="px-2 mb-2 border-bottom">
                  {" "}
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value="Normal"
                    id="flexCheckDefault"
                    onClick={(e)  => handleCheckboxChange(e.target.value) }
                  />{" "}
                  <a
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    Normal Olanlar
                  </a>
                </div>
                <div className="px-2 mb-2 border-bottom">
                  {" "}
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value="Acil Degil"
                    id="flexCheckDefault"
                    onClick={(e)  => handleCheckboxChange(e.target.value) }
                  />{""}
                  <a
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    Suan Gerekli olmayanlar
                  </a>
                </div>
              
              </div>
            }
            title="Filters"
            trigger="click"
          >
            <button
              className="btn text-white rounded-pill mx-2"
              style={{ backgroundColor: "#222" }}
            >
              Filters <i class="fa-solid fa-filter text-white"></i>
            </button>
          </Popover>
        </div>
      </div>

      <div className="container-fluid" style={{ height: "100vh" }}>
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
    </Fragment>
  );
}
