import { Button, Popover, Space } from "antd";
import { useDispatch } from "react-redux";
import { DeleteSubCategory, UpdateSubCategory } from "../../redux/actions/SubCategoryActions";
import { useState } from "react";

const SubCategoryMenuButton = ({sub ,handleShowEditForm,showEditForm}) => {
    


    

    const dispatch = useDispatch()

    const handleDeleteSubCategory = (id) => {
        dispatch(DeleteSubCategory(id))
    }

 

  return (
    <Space wrap>
    <Popover content={<>
        <div className="d-flex flex-column">
    <button
      className="btn btn-sm mb-2 btn-light rounded-pill text-white"
      style={{ background: "#222" }}
      onClick={handleShowEditForm}
    >
     {showEditForm ? "Cancel" : "Edit"}
    </button>
    <button
      className="btn  btn-sm btn-light rounded-pill text-white"
      style={{ background: "rgb(255,56,92)" }}
      onClick={() => handleDeleteSubCategory(sub._id)}
    >
      Delete
    </button>
  </div>
    </>} placement="left" trigger="click">
      <Button type="ghost">
        More<i class="fa-solid fa-ellipsis ms-2"></i>{" "}
      </Button>
    </Popover>
  </Space>
  )


  };
export default SubCategoryMenuButton;
