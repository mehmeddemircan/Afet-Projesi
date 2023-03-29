import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { DatePicker, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AddNewTask } from "../../../redux/actions/TaskActions";

const AddTaskModal = ({ handleCloseAddTaskModal, showAddTaskModal }) => {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleDateChange = (date, dateString) => {
    setDueDate(dateString);
  };
  const dispatch = useDispatch();
  const addNewTask = useSelector((state) => state.addNewTask);
  const handleAddNewTask = () => {
    dispatch(AddNewTask({ text, dueDate }));
    handleCloseAddTaskModal();
  };
  useEffect(() => {
    if (addNewTask.success) {
      setText("");
      setDueDate("");
    }
  }, [addNewTask.success]);

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
          <div className="mt-3">
            <label className="col-form-label">Due Date</label>
            <div>
              <Space direction="vertical">
                <DatePicker onChange={handleDateChange} />
              </Space>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
