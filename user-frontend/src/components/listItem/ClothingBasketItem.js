import { Card, Descriptions, Image, Input, List } from "antd";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveClothingFromBasket } from "../../redux/actions/UserActions";

const ClothingBasketItem = ({ item }) => {
  const [visible, setVisible] = useState(false);

const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const [userId, setUserId] = useState(auth.user._id)
  const [itemId, setItemId] = useState(item._id)

  const handleRemoveClothingFromBasket = () => {
    dispatch(RemoveClothingFromBasket(userId,itemId))
  }


  return (
    <Fragment>
      <Card
       className="mb-3"
        actions={[
          <button className="btn btn-danger rounded-pill float-end me-2" onClick={() => handleRemoveClothingFromBasket()} >
            Sepeten Çıkar  
          </button>,
        ]}
      >
        <List.Item
          key={item._id}
          extra={
            <Fragment>
              <Image
                preview={{
                  visible: false,
                }}
                width={182}
                height={200}
                src={item.clothingProduct.images[0].url}
                onClick={() => setVisible(true)}
              />
              <div
                style={{
                  display: "none",
                }}
              >
                <Image.PreviewGroup
                  preview={{
                    visible,
                    onVisibleChange: (vis) => setVisible(vis),
                  }}
                >
                  {item.clothingProduct.images.map((image) => (
                    <Image src={image.url} width={182} height={200} />
                  ))}
                </Image.PreviewGroup>
              </div>
            </Fragment>
          }
        >
          <List.Item.Meta
            title={<a>{item.clothingProduct.title}</a>}
            description={
              <Fragment>
                <Descriptions className="d-flex flex-column">
                  <Descriptions.Item
                    className="d-inline-block w-100"
                    label="Fiyat"
                  >
                    {item.clothingProduct.price} TL
                  </Descriptions.Item>
                  <Descriptions.Item
                    className="d-inline-block w-100"
                    label="Cinsiyet"
                  >
                    {item.clothingProduct.gender}
                  </Descriptions.Item>
                  <Descriptions.Item
                    className="d-inline-block w-100"
                    label="Stock"
                  >
                    {item.clothingProduct.stock} Adet Kaldı
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

export default ClothingBasketItem;
