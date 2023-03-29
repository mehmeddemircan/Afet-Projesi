import { List } from "antd";
import React, { Fragment } from "react";

const TaskItem = ({task}) => {
  return (
    <Fragment>
      <List.Item
        actions={[
          <>
            <button className="btn btn-light btn-sm w-100 ">Edit </button>
          </>,
        ]}
      >
        <List.Item.Meta
          title={<a>{task.dueDate}</a>}
          description={task.text}
        />
      </List.Item>
    </Fragment>
  );
};

export default TaskItem;
