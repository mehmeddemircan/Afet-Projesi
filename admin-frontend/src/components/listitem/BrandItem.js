import { Card, Tooltip } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { DeleteBrand } from "../../redux/actions/BrandActions";

const BrandItem = ({ brand }) => {

  const dispatch = useDispatch()
  const handleDeleteBrand = (id) => {
    dispatch(DeleteBrand(id))
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
      <a
        href={`/markalar/${brand._id}`}
        className="text-dark fs-3"
        style={{ textDecorationLine: "none" }}
      >
        {brand.name}
      </a>
    </Card>
  );
};

export default BrandItem;
