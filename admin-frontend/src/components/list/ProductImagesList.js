import { Image } from "antd";
import React, { Fragment } from "react";
import "../scrollbar/ProductImagesScroll.css";
const ProductImagesList = ({ product }) => {
  return (
    <Fragment>
      <div
        className="scrollbar mt-3 "
        style={{ maxHeight: "320px", overflowY: "auto" }}
      >
        <ul
          style={{
            listStyle: "none",
            marginBottom: 2,
          }}
        >
          <Image.PreviewGroup>
            {product.images &&
              product.images.map((i) => (
                <li style={{ margin: "3px 3px", width: 90, height: 80 }}>
                  <Image
                    style={{
                      objectFit: "cover",
                    }}
                    width={80}
                    height={75}
                    src={i.url}
                  />
                </li>
              ))}
          </Image.PreviewGroup>
        </ul>
      </div>
    </Fragment>
  );
};

export default ProductImagesList;
