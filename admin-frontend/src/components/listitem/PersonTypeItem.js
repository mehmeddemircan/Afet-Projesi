import { List } from "antd";
import React, { useState } from "react";
import DeletePersonTypeButton from "../buttons/DeletePersonTypeButton";
import EditPersonTypeButton from "../buttons/EditPersonTypeButton";
import EditPersonTypeModal from "../modal/PersonType/EditPersonTypeModal";
import { useDispatch, useSelector } from "react-redux";
import { DeletePersonType } from "../../redux/actions/PersonTypeActions";
import { AddPersonToArea } from "../../redux/actions/AreaActions";
import AddPersonToAreaModal from "../modal/Area/AddPersonToAreaModal";

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

  const {success} = useSelector((state) => state.getRequriredPeople)


  const [showAddPersonToAreaModal, setShowAddPersonToAreaModal] = useState(false)

  const handleShowAddPersonToAreaModal =() => {
    setShowAddPersonToAreaModal(true)
  }
  const handleClosePersonToAreaModal =() => {
    setShowAddPersonToAreaModal(false)
  }

  return (
    <List.Item
      actions={[
        <>
          {!success  ? 
          (
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
         /> </>

          ):  <button
          className="btn btn-light btn-sm w-100 "
          onClick={handleShowAddPersonToAreaModal}
        >
          <i class="fa-solid fa-plus"></i> Add{" "}
        </button> }
        </>,
      ]}
    > 

    <AddPersonToAreaModal
      personType={personType}
      showAddPersonToAreaModal={showAddPersonToAreaModal}
      handleClosePersonToAreaModal={handleClosePersonToAreaModal}
    />
      <List.Item.Meta
        title={<a>{personType.name}</a>}
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </List.Item>
  );
};

export default PersonTypeItem;
