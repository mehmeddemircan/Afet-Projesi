import React,{ useState } from "react";
import AddAreaModal from "../../modal/Area/AddAreaModal";
import { Button, Tooltip } from "antd";

const CreateAreaMarker = ({ lat, lng, marker }) => {
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
  
export default CreateAreaMarker