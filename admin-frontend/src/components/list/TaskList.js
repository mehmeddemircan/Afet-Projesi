import { List } from "antd";
import React, { Fragment } from "react";

import { useSelector } from "react-redux";
import UserTaskItem from "../listitem/UserTaskItem";

const TaskList = () => {
  const getAllTask = useSelector((state) => state.getAllTask);
  
  return (
    <Fragment>
      <List className="my-4" itemLayout="horizontal">
        {getAllTask.tasks.map((task) => (
          <UserTaskItem key={task._id} userTask={task} />
        ))}
      </List>
    </Fragment>
  );
};

export default TaskList;
