import React, { Fragment, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import MainFooter from "../footer/MainFooter";

import BackTopButton from "../backtop/BackTop";
import ShowMapButton from "../floatbutton/ShowMapButton";
import SimpleMap from "../map/MapComponent";
import { Popover } from "antd";

const MainLayout = (props) => {
  const [showMap, setShowMap] = useState(false);

  const handleToggleShowMap = () => {
    setShowMap((prev) => !prev);
  };

  return (
    <Fragment>
      <Header />
      {showMap ? (
        <>
          <div className="container my-3">
            <div className="d-flex flex-row justify-content-end">
           
              <Popover placement="bottom" content={(
                <div className="d-flex flex-column">
                  <div className="px-2 mb-2 border-bottom">  <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault" /> <a style={{
                    fontSize : '15px'
                  }}>Cok Acil Olanlar</a></div>
                   <div className="px-2  mb-2 border-bottom">  <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault" /> <a style={{
                    fontSize : '15px'
                  }}> Acil Olanlar</a></div>
                    <div className="px-2 mb-2 border-bottom">  <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault" /> <a style={{
                    fontSize : '15px'
                  }}>Normal Olanlar</a></div>
                    <div className="px-2 mb-2 border-bottom">  <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault" /> <a style={{
                    fontSize : '15px'
                  }}>Suan Gerekli olmayanlar</a></div>
                
                </div>
              )} title="Filters" trigger="click">
              <button
                className="btn text-white rounded-pill mx-2"
                style={{ backgroundColor: "#222" }}
              >
                Filters <i class="fa-solid fa-filter text-white"></i>
              </button>
    </Popover>
            </div>
          </div>
          <SimpleMap />
        </>
      ) : (
        <div className="container">{props.children}</div>
      )}
      <ShowMapButton
        handleToggleShowMap={handleToggleShowMap}
        showMap={showMap}
      />
      <BackTopButton />
      <MainFooter />
    </Fragment>
  );
};

export default MainLayout;
