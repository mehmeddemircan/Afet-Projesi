import { Card, Descriptions, List, Tooltip } from "antd";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const FormInfoItem = ({
  isApproved,
  isClothingForm,
  form,
  handleApproveForm,
  handleDeleteForm,
  handleDeleteClothingForm,
  handleApproveClothingForm,
}) => {
  const getAllClothingForms = useSelector(
    (state) => state.clothingNeedForm.getAllClothingForms
  );

  return (
    <Fragment>
      <List.Item key={form._id} className="card my-3 px-2">
        <Descriptions
          title={
            <div className="d-flex justify-content-between">
              <a>User Info</a>{" "}
              <div>
                {isApproved ? null : (
                  <button
                    className="btn btn-outline-success rounded-pill"
                    onClick={() =>
                      isClothingForm
                        ? handleApproveClothingForm(form._id)
                        : handleApproveForm(form._id)
                    }
                  >
                    Approve
                  </button>
                )}

                <Tooltip title="Delete">
                  <button
                    className="btn btn-light"
                    onClick={() =>
                      isClothingForm
                        ? handleDeleteClothingForm(form._id)
                        : handleDeleteForm(form._id)
                    }
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </Tooltip>
              </div>
            </div>
          }
        >
          <Descriptions.Item label="Name">{form.name}</Descriptions.Item>
          <Descriptions.Item label="Telephone">
            {form.phoneNumber}
          </Descriptions.Item>
          <Descriptions.Item label="Email">{form.email}</Descriptions.Item>
          {getAllClothingForms.success ? null : (
            <>
              <Descriptions.Item label="Urgency">
                {form.urgency}
              </Descriptions.Item>
              <Descriptions.Item label="Number of Person">
                {form.numberOfPerson}
              </Descriptions.Item>
            </>
          )}
          <Descriptions.Item label="Address">{form.address}</Descriptions.Item>
        </Descriptions>
        {getAllClothingForms.success ? (
          <div className="d-flex flex-row flex-wrap justify-content-start">
            {form.clothingItems.map((item) => (
              <Card
                title={item.productCategory}
                bordered={true}
                className="mx-2"
              >
                <p>Size : {item.productSize}</p>
                <p>Gender :{item.gender} </p>
                <p>Quantity : {item.quantity}</p>
              </Card>
            ))}
          </div>
        ) : null}
      </List.Item>
    </Fragment>
  );
};

export default FormInfoItem;
