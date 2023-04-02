import { DatePicker, Modal, Space } from "antd";
import moment from "moment";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import { EditTask } from "../../../redux/actions/TaskActions";
import TaskAddLocationSearch from "../../search/TaskAddLocationSearch";

import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
const EditTaskModal = ({
  task,
  showEditTaskModal,
  handleCloseEditTaskModal,
}) => {
  const [text, setText] = useState(task.text);

  var taskDate = moment(task.dueDate).format("YYYY/MM/DD").toString();
  const [dueDate, setDueDate] = useState(taskDate);
  const [address, setAddress] = useState(task.address);
  const [location, setLocation] = useState({
    lat: task.location.lat,
    lng: task.location.lng,
  });
  const handleDateChange = (date, dateString) => {
    setDueDate(dateString);
  };

  const dispatch = useDispatch();

  const handleEditTask = () => {
    dispatch(EditTask(task._id, { text, dueDate, location }));
    handleCloseEditTaskModal();
  };

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);

    setLocation({
      lat: latLng.lat,
      lng: latLng.lng,
    });

    setAddress(value);
  };

  return (
    <Fragment>
      <Modal
        centered
        open={showEditTaskModal}
        onOk={handleEditTask}
        onCancel={handleCloseEditTaskModal}
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
                  <DatePicker
                    value={dayjs(taskDate)}
                    onChange={handleDateChange}
                  />
                </Space>
              </div>
            </div>
            <div className="mt-3">
              <TaskAddLocationSearch
                address={address}
                setAddress={setAddress}
                handleSelect={handleSelect}
              />
            </div>
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default EditTaskModal;
