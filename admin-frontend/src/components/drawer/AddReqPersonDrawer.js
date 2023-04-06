import { Drawer, List, Tag, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllPersonType } from "../../redux/actions/PersonTypeActions";
import {
  AddPersonToArea,
  AllArea,
  GetRequriredPeople,
  RemovePersonFromArea,
} from "../../redux/actions/AreaActions";
import {
  ADD_REQURIRED_PERSON_TO_AREA_RESET,
  REMOVE_REQURIRED_PERSON_TO_AREA_RESET,
} from "../../redux/constants/AreaConstants";

const AddReqPersonDrawer = ({
  areaId,
  handleCloseAddReqPersonDrawer,
  showAddReqPersonDrawer,
  handleDrawerVisibleChange,
}) => {
  const getAllPersonType = useSelector(
    (state) => state.personType.getAllPersonType
  );
  const addPersonToArea = useSelector((state) => state.area.addPersonToArea);
  const getRequriredPeople = useSelector(
    (state) => state.area.getRequriredPeople
  );
  const removePersonFromArea = useSelector(
    (state) => state.area.removePersonFromArea
  );
  const { area } = useSelector((state) => state.area.getSingleArea);

  const dispatch = useDispatch();

  const [filteredReqPeople, setFilteredReqPeople] = useState(
    getAllPersonType.personTypes
  );
  const [priorityOrders, setPriorityOrders] = useState([
    "Cok Acil",
    "Acil",
    "Normal",
    "Acil Degil",
  ]);

  const [quantity, setQuantity] = useState(0);
  const [priorityOrder, setPriorityOrder] = useState("");
  const [Person, setPerson] = useState("");

  const filterReqPeople = () => {
    const filtered = getAllPersonType.personTypes.filter(
      (item) =>
        !getRequriredPeople.requrired_people.some(
          (newItem) => newItem.Person._id === item._id
        )
    );
    setFilteredReqPeople(filtered);
  };

  useEffect(() => {
    if (areaId == area._id) {
      dispatch(GetRequriredPeople(areaId));
    }
  }, [
    dispatch,
    areaId,
    area,
    addPersonToArea.addedPerson,
    removePersonFromArea.isRemoved,
  ]);
  useEffect(() => {
    filterReqPeople();
  }, [
    areaId,
    area._id,
    addPersonToArea,
    removePersonFromArea,
    getAllPersonType.personTypes,
    getRequriredPeople.requrired_people,
  ]);
  const handleRemovePersonFromArea = (personId) => {
    dispatch(RemovePersonFromArea(areaId, personId));
  };
  useEffect(() => {
    dispatch(AllPersonType());
  }, [dispatch]);
  const handleAddReqPersonToArea = () => {
    dispatch(AddPersonToArea(areaId, { Person, quantity, priorityOrder }));
    handleCloseAddReqPersonDrawer();
  };
  useEffect(() => {
    if (areaId === area._id) {
      dispatch(AllArea([]));

      if (addPersonToArea.addedPerson) {
        setQuantity(0);
        setPriorityOrder("");
        message.success(addPersonToArea.message);
        dispatch({ type: ADD_REQURIRED_PERSON_TO_AREA_RESET });
      }
      if (removePersonFromArea.isRemoved) {
        message.success(removePersonFromArea.message);
        dispatch({ type: REMOVE_REQURIRED_PERSON_TO_AREA_RESET });
      }
    }
  }, [
    dispatch,
    areaId,
    area,
    area._id,
    addPersonToArea.addedPerson,
    removePersonFromArea.isRemoved,
  ]);

  return (
    <Drawer
      afterOpenChange={handleDrawerVisibleChange}
      width={512}
      title="Add Required Person "
      placement="right"
      onClose={handleCloseAddReqPersonDrawer}
      open={showAddReqPersonDrawer}
    >
        <div className="card">
            <div className="card-body">
            <h2>{area.name} {area.disaster_type}</h2>
      <form>
        <label for="recipient-name1" class="col-form-label">
          Person Type{" "}
        </label>
        <select
          className="form-control w-100"
          placeholder="Select Priority"
          value={Person}
          onChange={(e) => setPerson(e.target.value)}
        >
          <option selected>Select Person Type</option>

          {filteredReqPeople.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>

        {/* button  */}

        <div class="form-group">
          <label for="recipient-name" class="col-form-label">
            Quantity{" "}
          </label>
          <input
            type="number"
            class="form-control "
            id="person-name"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        {/* button  */}

        <div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <label for="recipient-name" class="col-form-label">
              Priority Order{" "}
            </label>
          </div>
          <select
            className="form-control w-100"
            placeholder="Select Priority"
            value={priorityOrder}
            onChange={(e) => setPriorityOrder(e.target.value)}
          >
            <option selected>Select priority</option>
            {priorityOrders.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex justify-content-end my-4">
          <button
            type="button"
            className="btn btn-dark   rounded-pill"
            onClick={handleAddReqPersonToArea}
          >
            Add
          </button>
        </div>
      </form>
     
            </div>
        </div>
        
      <List className="mt-4" itemLayout="horizontal">
        <div
          className="scrollbar-ripe-malinka"
          style={{ maxHeight: "360px", overflowY: "auto" }}
        >
          {getRequriredPeople.requrired_people.map((reqPerson) => (
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
                title={<a>{reqPerson.Person.name}</a>}
                description={
                  <>
                    <p>
                      Adet :
                      <Tag color="#108ee9" className="ms-2">
                        {reqPerson.quantity}
                      </Tag>
                    </p>
                    <p>Aciliyet : {reqPerson.priorityOrder}</p>
                  </>
                }
              />
            </List.Item>
          ))}
        </div>
      </List>
    </Drawer>
  );
};

export default AddReqPersonDrawer;
