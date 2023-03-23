import { FloatButton } from "antd";
import React, { Fragment } from "react";

const ShowMapButton = ({ showMap, handleToggleShowMap }) => {
  return (
    <Fragment>
      <FloatButton
        type="button"
        className="rounded-pill"
        shape="square"
        onClick={handleToggleShowMap}
        description={
          <div className="d-flex align-items-center">
            <a
              className="text-white "
              style={{ fontSize: "16px", textDecoration: "none" }}
            >
              {showMap ? "Close Map" : "Show Map"}
            </a>
            {showMap ? (
              <i class="fa-solid fa-x mx-2 fs-5 text-white"></i>
            ) : (
              <i class="fa-solid fa-map mx-2 fs-5 text-white"></i>
            )}
          </div>
        }
        style={{
          backgroundColor: "#222",
          width: "150px",
          height: "50px",
          right: "45vw",
        }}
      />
    </Fragment>
  );
};

export default ShowMapButton;
