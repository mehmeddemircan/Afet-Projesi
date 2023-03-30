import { List, Tooltip } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTaskToUser,
  RemoveTaskFromUser,
} from "../../redux/actions/UserActions";
import EditTaskModal from "../modal/Task/EditTaskModal";
import moment from "moment";

const UserTaskItem = ({ user, userTask, addedTask }) => {

  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  const dispatch = useDispatch();
  const [taskId, setTaskId] = useState(userTask._id);
  const handleAddTaskUser = () => {
    dispatch(AddTaskToUser(user._id, { taskId }));
  };

  const handleRemoveTaskFromUser = () => {
    dispatch(RemoveTaskFromUser(user._id, userTask._id));
  };

 

  return (
    <List.Item>
      <List.Item.Meta
        description={
          <>
            <div className="d-flex justify-content-between">
              <div className="d-inline-flex col-md-9">
                <p>
                  {userTask.text.substring(0, 200)}
                  {userTask.text.length > 40 && showMore ? (
                    <> {userTask.text.substring(200, 2000)}</>
                  ) : (
                    <>{userTask.text.length < 40 ? "" : <>...</>}</>
                  )}
                  <p className="d-inline-block ms-2">
                    ({moment(userTask.dueDate).locale("tr").format("MMM Do YY")}
                    )
                  </p>
                </p>
                <a>
                  {userTask.text.length > 40 ? (
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
              </div>
              <div className="d-inline-flex align-items-start justify-content-between">
              
                {
                  addedTask ? (
                    <button
                      className="btn btn-light btn-sm w-100  ms-4"
                      onClick={handleRemoveTaskFromUser}
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      className="btn btn-light btn-sm w-100  ms-4"
                      onClick={handleAddTaskUser}
                    >
                      <i class="fa-solid fa-plus"></i> Add
                    </button>
                  )
                 
                }
              </div>
            </div>
          </>
        }
      />
    </List.Item>
  );
};

export default UserTaskItem;
