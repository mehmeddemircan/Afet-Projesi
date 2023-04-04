import { Descriptions, List, Tooltip } from "antd";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ApproveGetHelpForm,
  DeleteGetHelpForm,
} from "../../redux/actions/FormActions";

const FormInfoItem = ({isApproved, form, handleApproveForm, handleDeleteForm }) => {
  return (
    <Fragment>
      <List.Item key={form._id} className="card my-3 px-2">
        <Descriptions
          title={
            <div className="d-flex justify-content-between">
              <a>User Info</a>{" "}
              <div>
                  {isApproved ? null : <button
                  className="btn btn-outline-success rounded-pill"
                  onClick={() => handleApproveForm(form._id)}
                >
                  Approve
                </button>}

                <Tooltip title="Delete">
                  <button
                    className="btn btn-light"
                    onClick={() => handleDeleteForm(form._id)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </Tooltip>
              </div>
            </div>
          }
        >
          <Descriptions.Item label="Name">{form.name}</Descriptions.Item>
          <Descriptions.Item label="Telephone">{form.phoneNumber}</Descriptions.Item>
          <Descriptions.Item label="Email">{form.email}</Descriptions.Item>
          <Descriptions.Item label="Urgency">{form.urgency}</Descriptions.Item>
          <Descriptions.Item label="Number of Person">{form.numberOfPerson}</Descriptions.Item>
          <Descriptions.Item label="Address">
            {form.address}
          </Descriptions.Item>
        </Descriptions>
      </List.Item>
    </Fragment>
  );
};

export default FormInfoItem;
