import { Button, Descriptions, Popover, Tooltip } from "antd";
import moment from "moment";
import React, { useState } from "react";
const TaskMarker = ({ task }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <Popover
      overlayStyle={{
        maxWidth: "320px",
      }}
      trigger={"hover"}
      title={
        <Descriptions
          title={
            <div className="d-flex justify-content-between">
              <h6>Task Info</h6>
              <a>{moment(task.dueDate).locale("tr").format("MMM Do YY")}</a>
            </div>
          }
          layout="horizontal"
        >
          <Descriptions.Item className="d-block" label="Text">
            <p className="d-inline-flex ">
              {task.text.substring(0, 200)}
              {task.text.length > 60 && showMore ? (
                <> {task.text.substring(60, 2000)}</>
              ) : (
                <>{task.text.length < 60 ? "" : <>...</>}</>
              )}

              <a>
                {task.text.length > 60 ? (
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
          </Descriptions.Item>
          <Descriptions.Item className="d-block" label="DueDate">
            {moment(task.dueDate).locale("tr").format("MMM Do YY")}
          </Descriptions.Item>

          <Descriptions.Item className="d-block " label="Address">
            {task.address}
          </Descriptions.Item>
        </Descriptions>
      }
    >
      <Button type="default" icon={<i class="fa-solid fa-check"></i>} />
    </Popover>
  );
};

export default TaskMarker;
