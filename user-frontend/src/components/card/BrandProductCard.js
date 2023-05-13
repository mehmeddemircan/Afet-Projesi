import { Card, Carousel , Image } from "antd";
import React from "react";
const {Meta} = Card
const BrandProductCard = ({item}) => {
  return (
    <Card
      hoverable
      style={{
        width: 300,
      }}
      className="my-3 mx-2"
      cover={
        <div
          style={{
            position: "relative",
            display: "inline-block",
          }}
        >
          {item.brand.category === "Giyim" || item.category === "Ev" || item.category === "Hotel" ? (
            <Image.PreviewGroup>
              <Carousel dotPosition="bottom" arrows>
                {item.images &&
                  item.images.map((image) => (
                    <Image
                      alt="example"
                      src={image.url}
                      height={182}
                      width={300}
                      style={{ objectFit: "cover" }}
                    />
                  ))}
              </Carousel>
            </Image.PreviewGroup>
          ) : null}
          {item.brand.category === "Gıda" && (
            <Image.PreviewGroup>
              <Image
                alt="example"
                src={item.image}
                height={182}
                width={300}
                style={{ objectFit: "cover" }}
              />
            </Image.PreviewGroup>
          )}
        </div>
      }
    >
      <Meta
        title={item.title}
        description={
          <>
            {item.category === "Ev-Hotel" && (
              <>
                <p>description : {item.description.substring(0, 10)} ...</p>
                {item.category == "Ev" && <p>Room : {item.roomNumber}</p>}
              </>
            )}
            <p>Price : {item.price} TL</p>
            {item.category === "Giyim" && <p>gender : {item.gender}</p>}
            <p>Stock : {item.stock} Adet</p>
          </>
        }
      />
    </Card>
  );
};

export default BrandProductCard;
