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
          <div className="d-flex justify-content-center align-items-center">
            <a
              className="text-white "
              style={{ fontSize: "16px", textDecoration: "none" }}
            >
              {showMap ? "Haritayi Kapat" : "Haritayi Göster"}
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
            width: 'auto',
          height: "50px",
          right: "45vw",
          padding: "4px 20px",
        
        }}
      />
    </Fragment>
  );
};

export default ShowMapButton;
