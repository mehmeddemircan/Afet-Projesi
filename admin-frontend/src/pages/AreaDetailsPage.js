import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import ProductList from "../components/list/ProductList";
import { Badge, Card, List, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AllProduct } from "../redux/actions/ProductActions";
import AddProductToAreaModal from "../components/modal/Area/AddProductToAreaModal";
import AreaProductItem from "../components/listitem/AreaProductItem";
import {
  ADD_REQUIRED_PRODUCT_TO_AREA_RESET,
  REMOVE_REQURIRED_PRODUCT_FROM_RESET,
} from "../redux/constants/AreaConstants";
import { toast } from "react-toastify";
import {
  GetRequriredProducts,
  RemoveProductFromArea,
} from "../redux/actions/AreaActions";
import { useParams } from "react-router-dom";

import AddedReqProductItem from "../components/listitem/AddedReqProductItem";
import ProductItem from "../components/listitem/ProductItem";

const { TabPane } = Tabs;
const AreaDetailsPage = () => {
  const { id } = useParams();

  const getAllProduct = useSelector((state) => state.getAllProduct);
  const addProductToArea = useSelector((state) => state.addProductToArea);
  const removeProductFromArea = useSelector(
    (state) => state.removeProductFromArea
  );
  const getRequriredProducts = useSelector(
    (state) => state.getRequriredProducts
  );
  const dispatch = useDispatch();

  const handleRemoveProductFromArea = (productId) => {
    dispatch(RemoveProductFromArea(id, productId));
  };

  const [filteredArray, setFilteredArray] = useState(getAllProduct.products);

  const filterArray = () => {
    const filtered = getAllProduct.products.filter(
      (item) =>
        !getRequriredProducts.requrired_products.some(
          (newItem) => newItem.Product._id === item._id
        )
    );
    setFilteredArray(filtered);
  };

  useEffect(() => {
    dispatch(AllProduct());
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetRequriredProducts(id));

    if (addProductToArea.addedProduct) {
      toast(addProductToArea.message);
      dispatch({ type: ADD_REQUIRED_PRODUCT_TO_AREA_RESET });
    }
    if (removeProductFromArea.isRemoved) {
      toast(removeProductFromArea.message);
      dispatch({ type: REMOVE_REQURIRED_PRODUCT_FROM_RESET });
    }
  }, [
    dispatch,
    addProductToArea.addedProduct,
    removeProductFromArea.isRemoved,
  ]);
  useEffect(() => {
    filterArray();
  }, [filteredArray]);

  return (
    <MainLayout>
      <h5 className="my-4 text-center">AreaDetailsPage</h5>

      <Card
        style={{
          width: "100%",
        }}
        title="Card title"
        extra={<a href="#">More</a>}
      >
        <Tabs>
          <TabPane tab="Add Requrired Products" key="1">
            <div className="row">
              <div className="col-md-12 my-2">
                <h4>Ekleme Kısmı</h4>

                <div className="my-4 d-flex flex-row flex-wrap justify-content-between">
                  {filteredArray.map((product) => (
                    <ProductItem key={product._id} product={product} />
                  ))}
                </div>
              </div>

            
            </div>
          </TabPane>
          <TabPane tab={ <Badge className="" count={getRequriredProducts.requrired_products.length}>
                <p className="mb-0 mt-1"> Added Products</p>
              </Badge>}key="2">
         

              <div className="my-4 d-flex flex-row flex-wrap justify-content-between">
                {getRequriredProducts.requrired_products.map((reqProduct) => (
                  <AddedReqProductItem
                    key={reqProduct._id}
                    reqProduct={reqProduct}
                    handleRemoveProductFromArea={handleRemoveProductFromArea}
                  />
                ))}
            </div>
          </TabPane>
        </Tabs>
      </Card>
    </MainLayout>
  );
};

export default AreaDetailsPage;
