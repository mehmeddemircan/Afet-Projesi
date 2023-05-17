import { Card, Descriptions, Image, Input, List } from "antd";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveMealFromBasket } from "../../redux/actions/UserActions";

const MealBasketItem = ({ item }) => {
  const [visible, setVisible] = useState(false);

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [userId, setUserId] = useState(auth.user._id);
  const [itemId, setItemId] = useState(item._id);

  const handleRemoveMealFromBasket = () => {
    dispatch(RemoveMealFromBasket(userId, itemId));
  };

  return (
    <Fragment>
      <Card
        className="mb-3"
        actions={[
          <button
            className="btn btn-danger rounded-pill float-end me-2"
            onClick={() => handleRemoveMealFromBasket()}
          >
            Sepeten Çıkar
          </button>,
        ]}
      >
        <List.Item
          key={item._id}
          extra={
            <Fragment>
              <Image.PreviewGroup
                preview={{
                  visible,
                  onVisibleChange: (vis) => setVisible(vis),
                }}
              >
                <Image
                  preview={{
                    visible: false,
                  }}
                  width={182}
                  height={200}
                  src={item.mealProduct.image}
                  onClick={() => setVisible(true)}
                />
              </Image.PreviewGroup>
            </Fragment>
          }
        >
          <List.Item.Meta
            title={<a>{item.mealProduct.title}</a>}
            description={
              <Fragment>
                <Descriptions className="d-flex flex-column">
                  <Descriptions.Item
                    className="d-inline-block w-100"
                    label="Fiyat"
                  >
                    {item.mealProduct.price} TL
                  </Descriptions.Item>
                  {/* <Descriptions.Item
                    className="d-inline-block w-100"
                    label="Cinsiyet"
                  >
                    {item.mealProduct.gender}
                  </Descriptions.Item> */}
                  <Descriptions.Item
                    className="d-inline-block w-100"
                    label="Stock"
                  >
                    {item.mealProduct.stock} Adet Kaldı
                  </Descriptions.Item>
                  <Descriptions.Item
                    className="d-inline-block w-100"
                    label="Marka"
                  >
                    empty
                  </Descriptions.Item>
                  <Descriptions.Item
                    className="d-inline-block w-100"
                    label="Adet"
                  >
                    <Input
                      className="w-50"
                      placeholder="adet değiştir"
                      value={1}
                      type="number"
                    />
                  </Descriptions.Item>
                </Descriptions>
              </Fragment>
            }
          />
        </List.Item>
      </Card>
    </Fragment>
  );
};

export default MealBasketItem;
