import React, { Fragment, useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import AddTaskModal from "../components/modal/Task/AddTaskModal";
import TaskList from "../components/list/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { GetAllTask } from "../redux/actions/TaskActions";
import { message } from "antd";
import {
  ADD_TASK_RESET,
  UPDATE_TASK_RESET,
} from "../redux/constants/TaskConstants";
import SearchTask from "../components/search/SearchTask";
import MetaTitle from "../meta/MetaTitle";

const TasksPage = () => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const handleShowAddTaskModal = () => {
    setShowAddTaskModal(true);
  };

  const handleCloseAddTaskModal = () => {
    setShowAddTaskModal(false);
  };
  const dispatch = useDispatch();

  const addNewTask = useSelector((state) => state.task.addNewTask);
  const updateTask = useSelector((state) => state.task.updateTask);

  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    dispatch(GetAllTask(text, dueDate));
    if (addNewTask.success) {
      message.success("Successfully added task");
      dispatch({ type: ADD_TASK_RESET });
    }
    if (updateTask.isUpdated) {
      message.success(updateTask.message);
      dispatch({ type: UPDATE_TASK_RESET });
    }
  }, [dispatch, addNewTask.success, updateTask.isUpdated, text, dueDate]);

  const handleDateChange = (date, dateString) => {
    setDueDate(dateString);
  };
  return (
    <Fragment>
      <MetaTitle title="Genel Görevlerimiz" content="Genel Görevlerimiz" name="Genel Görevlerimiz" />
      <MainLayout>
        <SearchTask
          text={text}
          setText={setText}
          handleDateChange={handleDateChange}
          dueDate={dueDate}
        />

        <div className="row my-3">
          <div className="d-flex justify-content-end">
            <button
              className="btn text-white rounded-pill"
              style={{ backgroundColor: "#f50" }}
              onClick={handleShowAddTaskModal}
            >
              Add Task
            </button>
          </div>
        </div>

        <AddTaskModal
          showAddTaskModal={showAddTaskModal}
          handleCloseAddTaskModal={handleCloseAddTaskModal}
        />
        <TaskList />
      </MainLayout>
    </Fragment>
  );
};

export default TasksPage;
