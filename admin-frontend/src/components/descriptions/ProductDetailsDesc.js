import { Descriptions } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCategories } from "../../redux/actions/CategoryActions";
import {
  GetSingleProdcut,
  UpdateProduct,
} from "../../redux/actions/ProductActions";
import { UPDATE_PRODUCT_RESET } from "../../redux/constants/ProductConstants";
import { useParams } from "react-router-dom";

const ProductDetailsDesc = () => {
  const { id } = useParams();
  const { product, loading } = useSelector((state) => state.product.getSingleProduct);
  const deleteUpdateProduct = useSelector((state) => state.product.deleteUpdateProduct);
  const getCategories = useSelector((state) => state.category.getCategories);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const [disabledEditForm, setDisabledEditForm] = useState(false);

  const handleToogleDisabledEditForm = () => {
    setDisabledEditForm((prev) => !prev);
    if (!disabledEditForm) {
      dispatch(GetCategories());
    }
  };

  const handleUpdateProduct = () => {
    dispatch(UpdateProduct(product._id, { title, description, category }));
  };

  useEffect(() => {
    if (!loading) {
      setTitle(product.title);
      setDescription(product.description);
      if (product.category !== null) {
        setCategory(product.category._id);
      }
    }
  }, [
    dispatch,
    deleteUpdateProduct.updateSuccess,
    loading,
    product,
    product.category,
    id,
  ]);

  return (
    <Fragment>
      <div className="col">
      <div className="card  mt-3">
        <div className="card-body">
          <Descriptions
            title={
              <div className="d-flex justify-content-between">
                <div>Category Info {product._id} </div>

                <div>
                  <button
                    className="btn btn-outline-primary  rounded-pill mx-2"
                    onClick={handleToogleDisabledEditForm}
                  >
                    {disabledEditForm ? "Cancel" : "Edit"}
                  </button>
                </div>
              </div>
            }
            layout="horizontal"
          >
            <form>
              <div class="form-group w-100">
                <div>
                  <label for="recipient-name" class="col-form-label">
                    Product Title{" "}
                  </label>
                  <input
                    type="text"
                    disabled={disabledEditForm ? false : true}
                    class="form-control w-75"
                    id="product-name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label for="recipient-name" class="col-form-label">
                    Description{" "}
                  </label>
                  <input
                    type="text"
                    disabled={disabledEditForm ? false : true}
                    class="form-control w-75"
                    id="product-name"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div>
                  <label for="recipient-name" class="col-form-label">
                    Category{" "}
                  </label>
                  <select
                    class="form-select w-75"
                    aria-label="Default select example"
                    onChange={(e) => setCategory(e.target.value)}
                    disabled={disabledEditForm ? false : true}
                  >
                    <option selected> {category} </option>
                    {getCategories.categories.map((category) => (
                      <option value={category._id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn rounded-3 text-white"
                    style={{ background: "#222" }}
                    onClick={handleUpdateProduct}
                  >
                    Complete
                  </button>
                </div>
              </div>
            </form>
          </Descriptions>
        </div>
      </div>
      </div>
    </Fragment>
  );
};

export default ProductDetailsDesc;
