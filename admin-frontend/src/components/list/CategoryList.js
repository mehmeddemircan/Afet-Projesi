import React, { Fragment } from "react";
import CategoryItem from "../listitem/CategoryItem";
import { useSelector } from "react-redux";

const CategoryList = () => {
  const getAllCategory = useSelector((state) => state.category.getAllCategory);
  
  return (
    <Fragment>
      <div className="my-4 d-flex flex-wrap justify-content-center" >
        {getAllCategory.categories.map((category) => (
          <CategoryItem key={category._id} category={category} />
        ))}
      </div>
    </Fragment>
  );
};

export default CategoryList;
