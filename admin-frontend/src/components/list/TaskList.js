import { List } from "antd";
import React, { Fragment } from "react";
import TaskItem from "../listitem/TaskItem";
import { useSelector } from "react-redux";

const TaskList = () => {
  const getAllTask = useSelector((state) => state.getAllTask);

  return (
    <Fragment>
      <List className="my-4" itemLayout="horizontal">
        {getAllTask.tasks.map((task) => (
          <TaskItem key={task._id} task={task} />
        ))}
      </List>
    </Fragment>
  );
};

export default TaskList;
