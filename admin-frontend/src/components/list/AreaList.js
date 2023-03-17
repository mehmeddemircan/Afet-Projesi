import React, { Fragment } from "react";

import { useSelector } from "react-redux";
import AreaItem from "../listitem/AreaItem";

const AreaList = () => {
  const getAllArea = useSelector((state) => state.getAllArea);

  return (
    <Fragment>
      <div className="row">
        <div className="d-flex flex-wrap justify-content-between">
          {getAllArea.areas.map((area) => (
            <AreaItem key={area.id} area={area} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default AreaList;
