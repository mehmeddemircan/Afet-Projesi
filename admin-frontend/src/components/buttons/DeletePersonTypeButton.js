import React, { Fragment } from "react";

const DeletePersonTypeButton = ({ personType , handleDeletePersonType }) => {
  return (
    <Fragment>
      <button
        className="btn btn-light rounded-pill text-danger"
        onClick={() =>{
          handleDeletePersonType(personType._id)
          
        }}
      >
        {" "}
        <i class="fa-solid fa-trash"></i>
      </button>
    </Fragment>
  );
};

export default DeletePersonTypeButton;
