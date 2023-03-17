import React, { Fragment } from 'react'
import SubCategoryItem from '../listitem/SubCategoryItem'
import { List } from 'antd'
import { useSelector } from 'react-redux'
import '../scrollbar/SubCategoryScroll.css'
const SubCategoryList = () => {

    const getAllSubCategory = useSelector((state) => state.getAllSubCategory)

  return (
    <Fragment>
         <div
        className="scrollbar-ripe-malinka"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
   <List className="my-4" itemLayout="horizontal">
          {getAllSubCategory.subs.map((sub) => (
              <SubCategoryItem key={sub._id} sub={sub} />
          ))}
</List>
</div>
    </Fragment>
 
  )
}

export default SubCategoryList