import React from "react";
import { List, Tooltip } from "antd";
import moment from "moment";
import { useState } from "react";

const UserTaskItem = ({ userTask }) => {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <List.Item>
      <List.Item.Meta
        description={
          <>
            <div className="d-flex justify-content-between">
              <div className="col-md-9">
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
              </div>
              <a>
                {userTask.text.length > 40 ? (
                  <a onClick={handleShowMore}>
                    {showMore ? (
                      <i class="fa-solid fa-angle-up"></i>
                    ) : (
                      <i class="fa-solid fa-angle-down"></i>
                    )}
                  </a>
                ) : null}
              </a>
            </div>
          </>
        }
      />
    </List.Item>
  );
};

export default UserTaskItem;
