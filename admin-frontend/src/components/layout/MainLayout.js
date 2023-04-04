import React, { Fragment, useState } from "react";
import Header from "../header/Header";
import MainFooter from "../footer/MainFooter";
import BackTopButton from "../backtop/BackTop";
import ShowMapButton from "../floatbutton/ShowMapButton";
import MapComponent from "../map/MapComponent";

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
          <MapComponent />
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
