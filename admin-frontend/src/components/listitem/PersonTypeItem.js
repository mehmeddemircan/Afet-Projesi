import { List } from "antd";
import React, { useState } from "react";
import DeletePersonTypeButton from "../buttons/DeletePersonTypeButton";
import EditPersonTypeButton from "../buttons/EditPersonTypeButton";
import EditPersonTypeModal from "../modal/PersonType/EditPersonTypeModal";
import { useDispatch } from "react-redux";
import { DeletePersonType } from "../../redux/actions/PersonTypeActions";

const PersonTypeItem = ({ personType }) => {
  const [showEditPersonModal, setShowEditPersonModal] = useState(false);

  const handleShowEditPersonModal = () => {
    setShowEditPersonModal(true);
  };

  const handleCloseEditPersonModal = () => {
    setShowEditPersonModal(false);
  };
  const dispatch = useDispatch();
  const handleDeletePersonType = (id) => {
    dispatch(DeletePersonType(id));
  };

  return (
    <List.Item
      actions={[
        <>
          <EditPersonTypeButton
            handleShowEditPersonModal={handleShowEditPersonModal}
          />
          <EditPersonTypeModal
            showEditPersonModal={showEditPersonModal}
            handleCloseEditPersonModal={handleCloseEditPersonModal}
            personType={personType}
          />

          <DeletePersonTypeButton
            handleDeletePersonType={handleDeletePersonType}
            personType={personType}
          />
        </>,
      ]}
    >
      <List.Item.Meta
        title={<a>{personType.name}</a>}
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </List.Item>
  );
};

export default PersonTypeItem;
