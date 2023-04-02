import React, { Fragment, useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { Card, Descriptions, Tooltip, Image, Badge, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import ProductImagesList from "../components/list/ProductImagesList";
import ProductDetailsDesc from "../components/descriptions/ProductDetailsDesc";

import { useParams } from "react-router-dom";
import {
  AddImageToProduct,
  GetSingleProdcut,
} from "../redux/actions/ProductActions";
import { useDispatch, useSelector } from "react-redux";
import InfoBreadcrumb from "../components/breadcrumb/InfoBreadcrumb";
import {
  ADD_IMAGE_TO_PRODUCT_RESET,
  UPDATE_PRODUCT_RESET,
} from "../redux/constants/ProductConstants";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import { toast } from "react-toastify";
const { Meta } = Card;
const ProductDetailsPage = () => {
  const [images, setImages] = useState([]);

  const [image, setImage] = useState("");
  const { product, loading } = useSelector(
    (state) => state.product.getSingleProduct
  );
  const deleteUpdateProduct = useSelector(
    (state) => state.product.deleteUpdateProduct
  );

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetSingleProdcut(id));
    if (deleteUpdateProduct.updateSuccess) {
      dispatch({ type: UPDATE_PRODUCT_RESET });
    }
    if (deleteUpdateProduct.addedImage) {
      toast(deleteUpdateProduct.message);

      dispatch({ type: ADD_IMAGE_TO_PRODUCT_RESET });
    }
  }, [
    dispatch,

    deleteUpdateProduct.updateSuccess,
    deleteUpdateProduct.addedImage,
  ]);

  const FileUploadChange = (e) => {
    let files = e.target.files;
    let allUploadedFiles = images;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          300,
          300,
          "JPEG",
          100,
          0,
          (uri) => {
            console.log(uri);

            axios
              .post("/api/uploadimages", { image: uri })
              .then((res) => {
                console.log("IMAGE UPLOAD RES DATA", res);
                allUploadedFiles.push(res.data);

                setImages(allUploadedFiles);
                setImage(images[0].url);
              })
              .catch((err) => {
                console.log("Cloudinary upload err ", err);
              });
          },
          "base64"
        );
      }
    }
  };

  const handleImageRemove = (public_id) => {
    console.log("remove img", public_id);
    setImage("");
    axios
      .post("/api/removeimage", { public_id })
      .then((res) => {
        let filteredImages = images.filter((item) => {
          return item.public_id !== public_id;
        });
        setImages(filteredImages);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddImage = () => {
    dispatch(AddImageToProduct(id, { image }));
  };

  useEffect(() => {
    if (!deleteUpdateProduct.addedImage) {
      setImage("");
      setImages([]);
    }
  }, [setImage, loading, deleteUpdateProduct.addedImage]);

  return (
    <MainLayout>
      <Fragment>
        <InfoBreadcrumb
          items={[
            {
              title: "Home",
            },
            {
              title: <a href="/urunler">Product</a>,
            },
            {
              title: <a href="">Product Details</a>,
            },
            {
              title: `${product.title}`,
            },
          ]}
        />

        {image}

        <div className="d-flex flex-wrap flex-row justify-content-center ">
          {loading ? <h4>loading</h4> : <ProductDetailsDesc />}

          <div className=" ms-4">
            <Card
              hoverable
              style={{
                width: 300,
              }}
              className="my-3"
              cover={
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  <Image.PreviewGroup>
                    <Image
                      alt="example"
                      src={
                        product && product._id === id
                          ? product.images && product.images.length == 0
                            ? "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            : product.images[0].url
                          : null
                      }
                      height={182}
                      width={300}
                      style={{ objectFit: "cover" }}
                    />
                  </Image.PreviewGroup>
                  <Tooltip placement="topLeft" title="Delete">
                    <button
                      className="btn btn-sm "
                      style={{ position: "absolute", top: 0, right: 0 }}
                      // onClick={handleDeleteProduct}
                    >
                      <i class="fa-solid fa-x"></i>
                    </button>
                  </Tooltip>
                </div>
              }
              actions={[
                image === "" ? (
                  <label className="btn btn-primary btn-sm">
                    <i class="fa-solid fa-plus me-2"></i>Image
                    <input
                      type="file"
                      multiple
                      hidden
                      accept="images/*"
                      onChange={FileUploadChange}
                    />
                  </label>
                ) : (
                  <label
                    className="btn btn-primary btn-sm"
                    onClick={handleAddImage}
                  >
                    Upload
                  </label>
                ),
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                //   avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                title={product.title}
                description="This is the description"
              />
            </Card>
            <div className="row">
              <div className="d-flex justify-content-end">
                {images &&
                  images.map((image) => (
                    <span className="avatar-item" style={{ margin: "0 7px" }}>
                      <Badge
                        count="X"
                        key={image.public_id}
                        onClick={() => handleImageRemove(image.public_id)}
                        style={{ cursor: "pointer" }}
                      >
                        <Avatar src={image.url} size={64} shape="square" />
                      </Badge>
                    </span>
                  ))}
              </div>
            </div>
          </div>
          <ProductImagesList product={product} />
        </div>
      </Fragment>
    </MainLayout>
  );
};

export default ProductDetailsPage;
