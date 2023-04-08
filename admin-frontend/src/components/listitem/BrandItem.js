import { Card, Tooltip } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteBrand } from "../../redux/actions/BrandActions";
import { EditOutlined } from "@ant-design/icons";
import EditBrandModal from "../modal/Brand/EditBrandModal";
const BrandItem = ({ brand }) => {

  const dispatch = useDispatch()
  const handleDeleteBrand = (id) => {
    dispatch(DeleteBrand(id))
  }
  const [showEditBrandModal, setShowEditBrandModal] = useState(false)

  const handleShowEditBrandModal = () => {
    setShowEditBrandModal(true)
  }

  const handleCloseEditBrandModal = () => {
    setShowEditBrandModal(false)
  }


  return (
    <Card
      className="my-2 mx-2"
      hoverable={true}
      style={{
        width: 300,
      }}
      cover={
        <div
          style={{
            position: "relative",
            display: "inline-block",
          }}
        >
          <img width={300} height={200} alt="example" src={brand.image} />

          <Tooltip placement="topLeft" title="Remove" >
            <button
              className="btn btn-sm "
              style={{ position: "absolute", top: 0, right: 0 }}
               onClick={() => handleDeleteBrand(brand._id)}
            >
              <i class="fa-solid fa-x"></i>
            </button>
          </Tooltip>
        </div>
      }
    >
      <div className="d-flex flex-row flex-wrap justify-content-between align-items-center" >
      <a
        href={`/markalar/${brand._id}`}
        className="text-dark fs-5 w-90"
        style={{ textDecorationLine: "none" }}
      >
        {brand.name}
      </a>
      
      <a onClick={handleShowEditBrandModal}> <EditOutlined /></a>
        <EditBrandModal
          brand ={brand}
          showEditBrandModal={showEditBrandModal}
          handleCloseEditBrandModal={handleCloseEditBrandModal}
        />
      </div>
    </Card>
  );
};

export default BrandItem;
