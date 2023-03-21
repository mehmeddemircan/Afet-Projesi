import { List, Tag } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { RemovePersonFromArea } from "../../redux/actions/AreaActions";
import { useParams } from "react-router-dom";

const AddedReqPersonItem = ({ reqPerson }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleRemovePersonFromArea = (personId) => {
    dispatch(RemovePersonFromArea(id, personId));
  };

  return (
    <List.Item
      actions={[
        <>
          <button
            className="btn btn-danger btn-sm w-100 rounded-pill "
            onClick={() => handleRemovePersonFromArea(reqPerson._id)}
          >
            Remove
          </button>
        </>,
      ]}
    >
      <List.Item.Meta
        title={
          <>
            <a>{reqPerson.Person.name}</a>
          </>
        }
        description={
          <>
            <p>
              Adet :{" "}
              <Tag color="#108ee9" className="ms-2">
                {" "}
                {reqPerson.quantity}
              </Tag>
            </p>
            <p>Aciliyet : {reqPerson.priorityOrder}</p>
          </>
        }
      />
    </List.Item>
  );
};

export default AddedReqPersonItem;
