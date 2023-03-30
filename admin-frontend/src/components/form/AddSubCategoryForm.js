import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { AddSubCategory } from "../../redux/actions/SubCategoryActions";

const AddSubCategoryForm = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch()
    const handleAddSubCategory = () => {
            dispatch(AddSubCategory({name}))
            
            setName("")
            
    }
 
  return (
    <Fragment>
      <form>
        <div class="form-group">
          <label for="recipient-name" class="col-form-label">
            SubCategory Name
          </label>
          <div class="input-group">
            <input
              type="text"
              class="form-control rounded-3"
              placeholder="Search"
            
              value={name}
              onChange={(e) => setName(e.target.value)}
         
            />
            <div class="input-group-append">
              <button class="btn btn-secondary ms-1" type="button"
              disabled={name === "" ? true : false }
              style={{
                background: '#222',
                opacity : name !== "" ? 1 : 0.5 
              }}
                onClick={handleAddSubCategory}
               
              >
                Add Sub
              </button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default AddSubCategoryForm;
