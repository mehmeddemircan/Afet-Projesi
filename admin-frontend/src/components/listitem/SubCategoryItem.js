import { List } from "antd";
import React, { useState } from "react";
import SubCategoryMenuButton from "../popover/SubCategoryMenuButton";
import { useDispatch } from "react-redux";
import { UpdateSubCategory } from "../../redux/actions/SubCategoryActions";
import { toast } from "react-toastify";

const SubCategoryItem = ({ sub }) => {
  const [name, setName] = useState(sub.name);
  const [showEditForm, setShowEditForm] = useState(false);

  const dispatch = useDispatch();

  const handleUpdateSubCategory = (e) => {
    if (e.key == "Enter") {
      dispatch(UpdateSubCategory(sub._id, { name }));
      setShowEditForm(false);
    }
  };

  const handleShowEditForm = () => {
    setShowEditForm((prev) => !prev);
  };
  return (
    <List.Item
      actions={[
        <>
          <SubCategoryMenuButton
            showEditForm={showEditForm}
            handleShowEditForm={handleShowEditForm}
            sub={sub}
          />
        </>,
      ]}
    >
      <List.Item.Meta
        title={
          <>
            {showEditForm ? (
              <input
                className="form-control  rounded-3 ms-1"
                style={{
                  maxWidth: "230px",
                }}
                onKeyDown={handleUpdateSubCategory}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            ) : (
              <a>{sub.name}</a>
            )}
          </>
        }
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </List.Item>
  );
};

export default SubCategoryItem;
