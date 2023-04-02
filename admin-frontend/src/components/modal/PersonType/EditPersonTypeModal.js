import { Modal } from "antd";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdatePersonType } from "../../../redux/actions/PersonTypeActions";
import { toast } from "react-toastify";

const EditPersonTypeModal = ({
  showEditPersonModal,
  handleCloseEditPersonModal,
  personType,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(personType.name);
  const deleteUpdatePersonType = useSelector(
    (state) => state.personType.deleteUpdatePersonType
  );
  const handleEditPersonTpe = () => {
    dispatch(UpdatePersonType(personType._id, { name }));

    if (!deleteUpdatePersonType.updateSuccess) {
      handleCloseEditPersonModal();
      toast("Successfully edited")
    }
  };

  return (
    <Fragment>
      <Modal
        centered
        open={showEditPersonModal}
        onOk={handleEditPersonTpe}
        onCancel={handleCloseEditPersonModal}
      >
        <form>
          <div class="form-group">
            <h4 class="text-center">New Person Type </h4>
            <label for="recipient-name" class="col-form-label">
              Person Type{" "}
            </label>
            <input
              type="text"
              class="form-control "
              id="person-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default EditPersonTypeModal;
