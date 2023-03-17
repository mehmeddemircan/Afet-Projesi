import React, { Fragment } from "react";
import CategoryItem from "../listitem/CategoryItem";
import { List } from "antd";
import { useSelector } from "react-redux";

const CategoryList = () => {
  const getAllCategory = useSelector((state) => state.getAllCategory);
  
  return (
    <Fragment>
      <div className="my-4 d-flex flex-wrap justify-content-between" >
        {getAllCategory.categories.map((category) => (
          <CategoryItem key={category._id} category={category} />
        ))}
      </div>
    </Fragment>
  );
};

export default CategoryList;
