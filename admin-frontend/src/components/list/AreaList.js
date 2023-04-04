import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import AreaItem from "../listitem/AreaItem";

const AreaList = () => {
  const getAllArea = useSelector((state) => state.area.getAllArea);
  const getAreasByProductTitle = useSelector((state) => state.area.getAreasByProductTitle)

  return (
    <Fragment>
      <div className="row">
        <div className="d-flex flex-wrap justify-content-between">
          {getAreasByProductTitle.success ? getAreasByProductTitle.areas.map((area) => (
            <AreaItem key={area._id} area={area} />
          )) :  getAllArea.areas.map((area) => (
            <AreaItem key={area._id} area={area} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default AreaList;
