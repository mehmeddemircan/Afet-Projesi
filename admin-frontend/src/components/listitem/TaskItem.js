import { List } from "antd";
import React, { Fragment, useState } from "react";
import moment from "moment";
import EditTaskModal from "../modal/Task/EditTaskModal";
const TaskItem = ({ task }) => {
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);

  const handleShowEditTaskModal = () => {
    setShowEditTaskModal(true);
  };

  const handleCloseEditTaskModal = () => {
    setShowEditTaskModal(false);
  };

  return (
    <Fragment>
      <List.Item
        actions={[
          <>
            <button
              className="btn btn-light btn-sm w-100 text-white rounded-3"
              style={{ backgroundColor: "#108ee9" }}
              onClick={handleShowEditTaskModal}
            >
              Edit{" "}
            </button>
          </>,
        ]}
      >
        <EditTaskModal
          task={task}
          showEditTaskModal={showEditTaskModal}
          handleCloseEditTaskModal={handleCloseEditTaskModal}
        />

        <List.Item.Meta
          description={
            <>
              <a className="text-dark" style={{ textDecorationLine: "none" }}>
                {task.text}
              </a>
              <a> {moment(task.dueDate).locale("tr").format("MMM Do YY")} </a>
            </>
          }
        />
      </List.Item>
    </Fragment>
  );
};

export default TaskItem;
