import React from "react";
import { Card, Descriptions, List, Tag, Tooltip, Badge } from "antd";
import DescriptionsItem from "antd/es/descriptions/Item";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import DeletePopconfirm from "../popconfirm/DeletePopconfirm";
import {
  DeleteClothingForm,
  DeleteMealForm,
  DeleteShelterForm,
} from "../../redux/actions/FormActions";
import { useState } from "react";
import EditClothingFormModal from "../modal/EditClothingFormModal";
import EditMealFormModal from "../modal/EditMealFormModal";
import EditShelterFormModal from "../modal/EditShelterFormModal";


const FormInfoCard = ({ form, isClothingForm, isShelterForm, isMealForm }) => {
  const getAllClothingForm = useSelector(
    (state) => state.form.getAllClothingForm
  );
  const getAllShelterForm = useSelector(
    (state) => state.form.getAllShelterForm
  );

  const getAllMealForm = useSelector((state) => state.form.getAllMealForm);

  const dispatch = useDispatch();
  const handleDeleteClothingForm = (userId, formId) => {
    dispatch(DeleteClothingForm(userId, formId));
  };

  const handleDeleteShelterForm = (userId, formId) => {
    dispatch(DeleteShelterForm(userId, formId));
  };

  const handleDeleteMealForm = (userId, formId) => {
    dispatch(DeleteMealForm(userId, formId));
  };

  const [showEditClothingFormModal, setShowEditClothingFormModal] =
    useState(false);

  const handleShowEditClothingFormModal = () => {
    setShowEditClothingFormModal(true);
  };
  const handleCloseEditClothingFormModal = () => {
    setShowEditClothingFormModal(false);
  };

  const [showEditMealFormModal, setShowEditMealFormModal] = useState(false)

  const handleShowEditMealFormModal = () => {
    setShowEditMealFormModal(true)
  }
  const handleCloseEditMealFormModal = () => {
    setShowEditMealFormModal(false)
  }

  const [showEditShelterFormModal, setShowEditShelterFormModal] = useState(false)

  const handleShowEditShelterFormModal = () => {
    setShowEditShelterFormModal(true)
  }

  const handleCloseEditShelterFormModal = () => {
    setShowEditShelterFormModal(false)
  }
  
  

  return (
    <List.Item key={form._id} className="card my-3 px-2">
      <Descriptions
        title={
          <div className="d-flex justify-content-between my-1">
            <a>Form Bilgileri</a>{" "}
            <div>
              <Tooltip title="Düzenle">
                <button
                  className="btn btn-light mx-2"
                  onClick={() => isClothingForm ? handleShowEditClothingFormModal() : isMealForm ? handleShowEditMealFormModal() : isShelterForm ? handleShowEditShelterFormModal() : null}
                >
                  Düzenle
                </button>
              </Tooltip>
              {showEditClothingFormModal && (
                <EditClothingFormModal
                  form={form}
                  showEditClothingFormModal={showEditClothingFormModal}
                  handleCloseEditClothingFormModal={
                    handleCloseEditClothingFormModal
                  }
                />
              )}
              {showEditMealFormModal && (
                <EditMealFormModal 
                    form={form}
                    showEditMealFormModal={showEditMealFormModal}
                    handleCloseEditMealFormModal={handleCloseEditMealFormModal}
                />
              )}
              {showEditShelterFormModal && (
                <EditShelterFormModal 
                    form={form}
                    showEditShelterFormModal={showEditShelterFormModal}
                    handleCloseEditShelterFormModal={handleCloseEditShelterFormModal}
                />
              )}

              <Tooltip title="Sil">
                <button
                  className="btn btn-light"
                  onClick={() =>
                    isClothingForm
                      ? handleDeleteClothingForm(form.userId, form._id)
                      : isShelterForm
                      ? handleDeleteShelterForm(form.userId, form._id)
                      : handleDeleteMealForm(form.userId, form._id)
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
        {getAllClothingForm.success ||
        getAllShelterForm.success ||
        getAllMealForm.success ? null : (
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
        {getAllMealForm.success && (
          <>
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
      {getAllClothingForm.success ? (
        <div className="d-flex flex-row flex-wrap justify-content-between">
          {form.clothingItems.map((item) => (
            <Card
              title={item.productCategory}
              hoverable={true}
              bordered={true}
              className="mx-2"
              style={{
                border: "2px solid rgb(221,221,221)",
              }}
            >
              <p>Size : {item.productSize}</p>
              <p>Gender :{item.gender} </p>
              <p>Quantity : {item.quantity}</p>
            </Card>
          ))}
        </div>
      ) : null}
    </List.Item>
  );
};

export default FormInfoCard;
