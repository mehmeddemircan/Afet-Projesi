import { List, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUserTasks, UpdateUserRole } from "../../redux/actions/UserActions";
import TaskDrawer from "../drawer/TaskDrawer";
import { GetAllTaskNotAdded } from "../../redux/actions/UserActions";
import { ADD_TASK_TO_USER_RESET, REMOVE_TASK_TO_USER_RESET } from "../../redux/constants/UserConstants";

const UserItem = ({ user }) => {
  const dispatch = useDispatch();

  const handleMakeAdmin = () => {
    dispatch(UpdateUserRole(user._id));
  };

  const [openDrawer, setOpenDrawer] = useState(false);
  const { loading } = useSelector((state) => state.getUserTasks);
  const addRemoveTaskToUser = useSelector((state) => state.addRemoveTaskToUser);

  useEffect(() => {
    dispatch(GetUserTasks(user._id));
    dispatch(GetAllTaskNotAdded(user._id));
    if (addRemoveTaskToUser.isAdded) {
      message.success(addRemoveTaskToUser.message);
      dispatch({ type: ADD_TASK_TO_USER_RESET });
    }
    if (addRemoveTaskToUser.isRemoved) {
      message.success(addRemoveTaskToUser.message)
      dispatch({type : REMOVE_TASK_TO_USER_RESET})
    }
  }, [dispatch, user._id, addRemoveTaskToUser.isAdded,addRemoveTaskToUser.isRemoved]);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <List.Item
      actions={[
        <>
          <button
            className="btn btn-sm btn-light text-dark rounded-pill me-2"
            onClick={handleMakeAdmin}
            style={{
              border: "2.4px solid rgb(221,221,221)",
            }}
          >
            Make Admin{" "}
          </button>
          <button
            className="btn btn-sm btn-light text-white rounded-pill"
            onClick={handleOpenDrawer}
            style={{ background: "#222" }}
          >
            Add Task{" "}
          </button>
        </>,
      ]}
    >
      <TaskDrawer
        user={user}
        openDrawer={openDrawer}
        handleCloseDrawer={handleCloseDrawer}
      />
      <List.Item.Meta
        title={<a>{user.name}</a>}
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </List.Item>
  );
};

export default UserItem;
