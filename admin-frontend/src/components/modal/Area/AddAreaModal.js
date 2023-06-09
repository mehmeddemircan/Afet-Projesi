import { List, Modal } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddArea } from "../../../redux/actions/AreaActions";
import { toast } from "react-toastify";

const AddAreaModal = ({
  lat,
  lng,
  showAddAreaModal,
  handleCloseAddAreaModal,
}) => {
  const addArea = useSelector((state) => state.area.addArea);
  const [name, setName] = useState("");
  const [coordinates, setCoordinates] = useState({
    longitude: 0,
    latitude: 0,
  });
  const [disaster_type, setDisaster_type] = useState("")
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setLatitude(lat.toFixed(6));
    setLongitude(lng.toFixed(6));
  }, [lat, lng]);

  const handleAddNewArea = () => {
    dispatch(AddArea({ name,disaster_type, coordinates }));

    if (!addArea.success) {
      handleCloseAddAreaModal();
      toast("Successly added area");
    }
  };

  useEffect(() => {
    setCoordinates({
      longitude: longitude,
      latitude: latitude,
    });
  }, [setCoordinates, longitude, latitude]);

  const [disasterTypes, setDisasterTypes] = useState([
    "Deprem",
    "Sel",
    "Heyelan",
    "Tsunami",
  ]); 



  return (
    <Fragment>
      <Modal
        centered
        open={showAddAreaModal}
        onOk={handleAddNewArea}
        onCancel={handleCloseAddAreaModal}
      >
        <form>
          <div class="form-group">
            <h4 class="text-center">New Area </h4>
            <div>
              <label for="recipient-name" class="col-form-label">
                Area Name
              </label>
              <input
                type="text"
                class="form-control "
                id="area-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label for="recipient-name" class="col-form-label">
                Disaster Type 
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={disaster_type}
                onChange={(e) => setDisaster_type(e.target.value)}
              >
             
                <option selected>Open this select menu</option>
                {disasterTypes.map((disasterType) => (
                  <option key={disasterType} value={disasterType}>{disasterType}</option>
                ))}
              </select>
            </div>
            <div className="d-flex">
              <div className="me-4 col-5">
                <label for="recipient-name" class="col-form-label">
                  Latitude
                </label>
                <input
                  type="number"
                  class="form-control "
                  id="latitude"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                />
              </div>
              <div className="ms-4 col-5 ">
                <label for="recipient-name" class="col-form-label">
                  Longitude{" "}
                </label>
                <input
                  type="number"
                  class="form-control "
                  id="longitude"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                />
              </div>
            </div>
            <div
              className="my-4"
              style={{ maxHeight: "200px", overflowY: "auto" }}
            ></div>
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default AddAreaModal;
