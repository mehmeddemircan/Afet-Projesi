import { List, Tag } from "antd";
import React, { useState } from "react";
import DeletePersonTypeButton from "../buttons/DeletePersonTypeButton";
import EditPersonTypeButton from "../buttons/EditPersonTypeButton";
import EditPersonTypeModal from "../modal/PersonType/EditPersonTypeModal";
import { useDispatch, useSelector } from "react-redux";
import { DeletePersonType } from "../../redux/actions/PersonTypeActions";
import { AddPersonToArea } from "../../redux/actions/AreaActions";
import AddPersonToAreaModal from "../modal/Area/AddPersonToAreaModal";

const PersonTypeItem = ({ isReqPersonItem,reqPerson,handleRemovePersonFromArea, personType }) => {
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

  const {success} = useSelector((state) => state.area.getRequriredPeople)


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

          ): isReqPersonItem ? (
            <button
            className="btn btn-danger btn-sm w-100 rounded-pill "
            onClick={() => handleRemovePersonFromArea(reqPerson._id)}
          >
            Remove
          </button>
          ) :( <button
          className="btn btn-light btn-sm w-100 "
          onClick={handleShowAddPersonToAreaModal}
        >
          <i class="fa-solid fa-plus"></i> Add{" "}
        </button> ) }
        </>,
      ]}
    > 

      {isReqPersonItem ?  null : (
          <AddPersonToAreaModal
          personType={personType}
          showAddPersonToAreaModal={showAddPersonToAreaModal}
          handleClosePersonToAreaModal={handleClosePersonToAreaModal}
        />
      )}
      <List.Item.Meta
        title={<a>{isReqPersonItem ? reqPerson.Person.name  : personType.name}</a>}
        description={
                isReqPersonItem ? (
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
                )

                 : "Ant Design, a design language for background applications, is refined by Ant UED Team"
               

        }

        />
    </List.Item>
  );
};

export default PersonTypeItem;
