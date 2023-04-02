import { Drawer, message } from "antd";
import React, { Fragment, useEffect } from "react";
import UserTaskList from "../list/UserTaskList";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllTaskNotAdded,
  GetUserTasks,
} from "../../redux/actions/UserActions";
import {
  ADD_TASK_TO_USER_RESET,
  REMOVE_TASK_TO_USER_RESET,
} from "../../redux/constants/UserConstants";

const TaskDrawer = ({ userId, user, handleCloseDrawer, openDrawer }) => {
  const addRemoveTaskToUser = useSelector((state) => state.user.addRemoveTaskToUser);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userId == user._id) {
      dispatch(GetUserTasks(user._id));
      dispatch(GetAllTaskNotAdded(user._id));
    }

    if (addRemoveTaskToUser.isAdded) {
      message.success(addRemoveTaskToUser.message);
      dispatch({ type: ADD_TASK_TO_USER_RESET });
    }
    if (addRemoveTaskToUser.isRemoved) {
      message.success(addRemoveTaskToUser.message);
      dispatch({ type: REMOVE_TASK_TO_USER_RESET });
    }
  }, [
    user._id,
    userId,
    dispatch,
    addRemoveTaskToUser.isAdded,
    addRemoveTaskToUser.isRemoved,
  ]);

  return (
    <Fragment>
      <Drawer
        width={512}
        title="Basic Drawer"
        placement="right"
        onClose={handleCloseDrawer}
        open={openDrawer}
      >
        <UserTaskList key={user._id} user={user} />
      </Drawer>
    </Fragment>
  );
};

export default TaskDrawer;
