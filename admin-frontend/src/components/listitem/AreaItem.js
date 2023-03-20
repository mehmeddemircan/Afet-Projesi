import { Card, Descriptions, Tooltip } from "antd";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import AlanCardDescription from "../descriptions/AlanCardDescription";
import { useDispatch } from "react-redux";
import { DeleteArea } from "../../redux/actions/AreaActions";
const { Meta } = Card;
const AreaItem = ({ area }) => {

  
  const dispatch = useDispatch()

  const handleDeleteArea = () => {
    dispatch(DeleteArea(area._id))
  }

  return (
    <Fragment>
      <Card
        hoverable
        style={{
          width: 350,
          border : '1px solid rgb(221,221,221)'
        }}
        title={area.name}
        extra={  <Tooltip placement="topLeft" title="Delete">
        <button
          className="btn btn-sm "
          style={{ position: "absolute", top: 0, right: 0 }}
          onClick={handleDeleteArea}
        >
          <i class="fa-solid fa-x"></i>
        </button>
      </Tooltip>}
        className="my-3"
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <a
          style={{
            textDecoration: "none",
          }}
          href={`/alanlar/${area._id}`}
        >
          <Meta
            description={
                <AlanCardDescription key={area._id} area={area}/>
            }
          />
        </a>
      </Card>
    </Fragment>
  );
};

export default AreaItem;
