import { Button, Popover } from 'antd';
import React from 'react'
;
const TaskMarker = ({ task }) => {
    return (
      <Popover
        overlayStyle={{
          maxWidth: "300px",
        }}
        trigger={"hover"}
        title={<h6>{task.text}</h6>}
      >
        <Button type="default" icon={<i class="fa-solid fa-check"></i>} />
      </Popover>
    );
  };

  export default TaskMarker