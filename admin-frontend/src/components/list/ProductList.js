import React, { Fragment } from "react";
import ProductItem from "../listitem/ProductItem";
import { List } from "antd";
import { useSelector } from "react-redux";

const ProductList = () => {
  const getAllProduct = useSelector((state) => state.product.getAllProduct);

  return (
    <Fragment>
     <div className="my-4 d-flex flex-row flex-wrap justify-content-center">
        {getAllProduct.products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
   </div>
    </Fragment>
  );
};

export default ProductList;
