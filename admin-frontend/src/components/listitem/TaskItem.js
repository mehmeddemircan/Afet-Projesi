import { Avatar, List, Space, Tooltip } from "antd";
import React, { useState } from "react";
import EditTaskModal from "../modal/Task/EditTaskModal";
import moment from "moment";
import TaskMapDiv from "../map/TaskMapDiv";
const { Meta } = List;

const TaskItem = ({ task }) => {
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);

  const handleShowEditTaskModal = () => {
    setShowEditTaskModal(true);
  };

  const handleCloseEditTaskModal = () => {
    setShowEditTaskModal(false);
  };
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };


  
  return (
    <List.Item className="d-flex justify-content-between">
      <div className="col-md-8">
        <div>
          <p>{moment(task.dueDate).locale("tr").format("MMM Do YY")}</p>
        </div>
        <p className="d-inline-flex ">
          {task.text.substring(0, 200)}
          {task.text.length > 100 && showMore ? (
            <> {task.text.substring(200, 2000)}</>
          ) : (
            <>{task.text.length < 100 ? "" : <>...</>}</>
          )}

          <a>
            {task.text.length > 100 ? (
              <Tooltip placement="topLeft" title={<a>More</a>}>
                <a onClick={handleShowMore}>
                  {showMore ? (
                    <i class="fa-solid fa-angle-up"></i>
                  ) : (
                    <i class="fa-solid fa-angle-down"></i>
                  )}
                </a>
              </Tooltip>
            ) : null}
          </a>
        </p>
       <p>Address : {task.address}</p>
        <div>
          <button
            className=" btn btn-light btn-sm  text-white rounded-3"
            style={{ backgroundColor: "#108ee9" }}
            onClick={handleShowEditTaskModal}
          >
            Edit{" "}
          </button>
          <EditTaskModal
            task={task}
            showEditTaskModal={showEditTaskModal}
            handleCloseEditTaskModal={handleCloseEditTaskModal}
          />
        </div>
      </div>

      <div className="col-md-3 ">
        <TaskMapDiv task={task} />
      </div>
    </List.Item>
  );
};

export default TaskItem;
