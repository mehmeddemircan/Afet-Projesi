import React, { Fragment } from "react";
import GoogleMapReact from "google-map-react";
import { Button, Popover } from "antd";
const MarkerComponent = ({ task }) => {
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

const TaskMapDiv = ({ task }) => {
  const defaultProps = {
    center: {
      lat: task.location ? parseFloat(`${task.location.lat}`) : 35.5,
      lng: task.location ? parseFloat(` ${task.location.lng}`) : 35.5,
    },
    zoom: task.location ? 11 : 4,
  };

  return (
    <Fragment>
      <div className="container-fluid" style={{ height: "200px" }}>
        <GoogleMapReact center={defaultProps.center} zoom={defaultProps.zoom}>
          <MarkerComponent
            lat={task.location?.lat}
            lng={task.location?.lng}
            task={task}
            text={
              <>
                <a>görevv</a>
                {/* <a>{area.name} Depremi</a> */}
              </>
            }
          />
        </GoogleMapReact>
      </div>
    </Fragment>
  );
};

export default TaskMapDiv;
