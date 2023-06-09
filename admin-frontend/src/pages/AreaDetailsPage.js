import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";

import { Badge, Card, List, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AllProduct } from "../redux/actions/ProductActions";

import {
  ADD_REQUIRED_PRODUCT_TO_AREA_RESET,
  ADD_REQURIRED_PERSON_TO_AREA_RESET,
  REMOVE_REQURIRED_PERSON_TO_AREA_RESET,
  REMOVE_REQURIRED_PRODUCT_FROM_RESET,
} from "../redux/constants/AreaConstants";
import { toast } from "react-toastify";
import {
  GetRequriredPeople,
  GetRequriredProducts,
  RemovePersonFromArea,
  RemoveProductFromArea,
} from "../redux/actions/AreaActions";
import { useParams } from "react-router-dom";

import ProductItem from "../components/listitem/ProductItem";
import { AllPersonType } from "../redux/actions/PersonTypeActions";
import PersonTypeItem from "../components/listitem/PersonTypeItem";

import InfoBreadcrumb from "../components/breadcrumb/InfoBreadcrumb";
import MetaTitle from "../meta/MetaTitle";

const { TabPane } = Tabs;
const AreaDetailsPage = () => {
  const { id } = useParams();

  const getAllProduct = useSelector((state) => state.product.getAllProduct);
  const addProductToArea = useSelector((state) => state.area.addProductToArea);
  const removeProductFromArea = useSelector(
    (state) => state.area.removeProductFromArea
  );
  const getRequriredProducts = useSelector(
    (state) => state.area.getRequriredProducts
  );
  const getAllPersonType = useSelector(
    (state) => state.personType.getAllPersonType
  );
  const addPersonToArea = useSelector((state) => state.area.addPersonToArea);
  const getRequriredPeople = useSelector(
    (state) => state.area.getRequriredPeople
  );
  const removePersonFromArea = useSelector(
    (state) => state.area.removePersonFromArea
  );

  const dispatch = useDispatch();

  const handleRemoveProductFromArea = (productId) => {
    dispatch(RemoveProductFromArea(id, productId));
  };

  const [filteredReqProducts, setFilteredReqProducts] = useState(
    getAllProduct.products
  );
  const [filteredReqPeople, setFilteredReqPeople] = useState(
    getAllPersonType.personTypes
  );

  const filterReqProducts = () => {
    const filtered = getAllProduct.products.filter(
      (item) =>
        !getRequriredProducts.requrired_products.some(
          (newItem) => newItem.Product._id === item._id
        )
    );
    setFilteredReqProducts(filtered);
  };

  const filterReqPeople = () => {
    const filtered = getAllPersonType.personTypes.filter(
      (item) =>
        !getRequriredPeople.requrired_people.some(
          (newItem) => newItem.Person._id === item._id
        )
    );
    setFilteredReqPeople(filtered);
  };

  useEffect(() => {
    dispatch(AllProduct());
    dispatch(AllPersonType());
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetRequriredPeople(id));
    if (addPersonToArea.addedPerson) {
      toast(addPersonToArea.message);
      dispatch({ type: ADD_REQURIRED_PERSON_TO_AREA_RESET });
    }
    if (removePersonFromArea.isRemoved) {
      toast(removePersonFromArea.message);
      dispatch({ type: REMOVE_REQURIRED_PERSON_TO_AREA_RESET });
    }
  }, [dispatch, addPersonToArea.addedPerson, removePersonFromArea.isRemoved]);

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
    filterReqProducts();
  }, [filteredReqProducts]);
  useEffect(() => {
    filterReqPeople();
  }, [filteredReqPeople]);

  const handleRemovePersonFromArea = (personId) => {
    dispatch(RemovePersonFromArea(id, personId));
  };

  return (
    <MainLayout>
      <MetaTitle title="Alan Detayları" name="alanDetayları" content="alanDetayları" />
      <h5 className="my-4 text-center">AreaDetailsPage</h5>
      
      <InfoBreadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: <a href="/alanlar">Areas</a>,
          },
          {
            title: <a>Area Details</a>,
          },
          // Area name
        ]}
      />
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
                  {filteredReqProducts.map((product) => (
                    <ProductItem key={product._id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane
            tab={
              <Badge
                className=""
                count={getRequriredProducts.requrired_products.length}
              >
                <p className="mb-0 mt-1"> Added Products</p>
              </Badge>
            }
            key="2"
          >
            <div className="my-4 d-flex flex-row flex-wrap justify-content-between">
              {getRequriredProducts.requrired_products.map((reqProduct) => (
                <ProductItem
                  isReqProductItem={true}
                  key={reqProduct._id}
                  reqProduct={reqProduct}
                  handleRemoveProductFromArea={handleRemoveProductFromArea}
                />
              ))}
            </div>
          </TabPane>
          <TabPane
            tab={
              <Badge
                className=""
                count={getRequriredPeople.requrired_people.length}
              >
                <p className="mb-0 mt-1">Requrired People</p>
              </Badge>
            }
          >
            <div
              className="scrollbar-ripe-malinka"
              style={{ maxHeight: "400px", overflowY: "auto" }}
            >
              <List className="my-4" itemLayout="horizontal">
                {filteredReqPeople.map((personType) => (
                  <PersonTypeItem
                    isReqPersonItem={false}
                    key={personType._id}
                    personType={personType}
                  />
                ))}
              </List>
            </div>
            <hr />
            <div
              className="scrollbar-ripe-malinka"
              style={{ maxHeight: "400px", overflowY: "auto" }}
            >
              <List className="my-4" itemLayout="horizontal">
                {getRequriredPeople.requrired_people.map((reqPerson) => (
                  <PersonTypeItem
                    handleRemovePersonFromArea={handleRemovePersonFromArea}
                    isReqPersonItem={true}
                    key={reqPerson._id}
                    reqPerson={reqPerson}
                  />
                ))}
              </List>
            </div>
          </TabPane>
        </Tabs>
      </Card>
    </MainLayout>
  );
};

export default AreaDetailsPage;
