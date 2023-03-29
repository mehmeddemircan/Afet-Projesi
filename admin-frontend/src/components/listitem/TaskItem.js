import { List } from "antd";
import React, { Fragment } from "react";
import moment from "moment";
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
   
          description={<>
            <a className="text-dark" style={{textDecorationLine :'none'}}>{task.text}</a>
            <a>    {moment(task.dueDate).locale("tr").format("MMM Do YY")}  </a>
          </>}
        />
      </List.Item>
    </Fragment>
  );
};

export default TaskItem;
