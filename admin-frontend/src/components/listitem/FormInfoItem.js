import { Card, Descriptions, List, Tag, Tooltip } from "antd";
import DescriptionsItem from "antd/es/descriptions/Item";
import moment from "moment";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const FormInfoItem = ({
  isApproved,
  isClothingForm,
  isShelterForm,
  form,
  handleApproveForm,
  handleDeleteForm,
  handleDeleteClothingForm,
  handleApproveClothingForm,
  handleDeleteShelterForm,
  handleApproveShelterForm
}) => {
  const getAllClothingForms = useSelector(
    (state) => state.clothingNeedForm.getAllClothingForms
  );
  const getAllShelterForm = useSelector(
    (state) => state.shelterNeedForm.getAllShelterForm
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
                        ? handleApproveClothingForm(form._id) : 
                        isShelterForm ? handleApproveShelterForm(form._id) 
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
                        ? handleDeleteClothingForm(form._id) : 
                        isShelterForm ? handleDeleteShelterForm(form._id)
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
          {getAllClothingForms.success || getAllShelterForm.success ? null : (
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
          {getAllShelterForm.success && (
            <>
              <Descriptions.Item label="City Options">
                {form.cityOptions.map((city) => (
                  <Tag color="#108ee9">{city.name}</Tag>
                ))}
              </Descriptions.Item>
              <DescriptionsItem></DescriptionsItem>
              <Descriptions.Item label="Chekin Date">
                {moment(form.checkinDate).locale("tr").format("MMM Do YY")}
              </Descriptions.Item>
              <Descriptions.Item label="Chekin Date">
                {moment(form.checkoutDate).locale("tr").format("MMM Do YY")}
              </Descriptions.Item>
              <DescriptionsItem></DescriptionsItem>
              <Descriptions.Item label="Number of Adults">
                {form.numberOfAdults}
              </Descriptions.Item>
              <Descriptions.Item label="Number Of Children">
                {form.numberOfChildren}
              </Descriptions.Item>
            </>
          )}

          <Descriptions.Item label="Additional Info">
            {form.additionalInfo}
          </Descriptions.Item>
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
