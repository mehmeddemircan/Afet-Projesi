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
