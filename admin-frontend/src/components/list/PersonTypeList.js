import { List } from "antd";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import PersonTypeItem from "../listitem/PersonTypeItem";

const PersonTypeList = () => {
  const getAllPersonType = useSelector((state) => state.personType.getAllPersonType);

  return (
    <Fragment>
      <List className="my-4" itemLayout="horizontal">
        {getAllPersonType.personTypes.map((personType) => (
          <PersonTypeItem key={personType._id} personType={personType} />
        ))}
      </List>
    </Fragment>
  );
};

export default PersonTypeList;
