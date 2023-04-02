import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { DatePicker, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AddNewTask } from "../../../redux/actions/TaskActions";
import  {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import TaskAddLocationSearch from "../../search/TaskAddLocationSearch";

const AddTaskModal = ({ handleCloseAddTaskModal, showAddTaskModal }) => {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [address, setAddress] = useState("")

  const handleDateChange = (date, dateString) => {
    setDueDate(dateString);
  };
  const dispatch = useDispatch();
  const addNewTask = useSelector((state) => state.task.addNewTask);
  const handleAddNewTask = () => {
    dispatch(AddNewTask({ text, dueDate ,location}));
    handleCloseAddTaskModal();
  };
  useEffect(() => {
    if (addNewTask.success) {
      setText("");
      setDueDate("");
    }
  }, [addNewTask.success]);

  const [location, setLocation] = useState({
    lat : "",
    lng : "" 
  })

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);


  
    setLocation({
      lat  : latLng.lat,
      lng : latLng.lng
    })

    setAddress(value);
    // setCenter(latLng);

    // if (address.length > 20) {
    //   setZoom(13);
    // } else {
    //   setZoom(10);
    // }

    // mapRef.current.panTo(latLng);
  };

  return (
    <Modal
      centered
      open={showAddTaskModal}
      onOk={handleAddNewTask}
      onCancel={handleCloseAddTaskModal}
    >
      <form>
        <div class="form-group">
          <h4 class="text-center">New Task </h4>
          <div>
          <label for="recipient-name" class="col-form-label">
            Text
          </label>
          <textarea
            type="text"
            class="form-control "
            id="person-name"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
          />
          </div>
          <div className="mt-3">
            <label className="col-form-label">Due Date</label>
            <div>
              <Space direction="vertical">
                <DatePicker onChange={handleDateChange} />
              </Space>
            </div>
          </div>
        <div className="mt-3">
        <TaskAddLocationSearch address={address} setAddress={setAddress} handleSelect={handleSelect} />
        </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
