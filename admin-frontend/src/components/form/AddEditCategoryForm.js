import React from 'react'

const AddEditCategoryForm = ({name,setName}) => {
  return (
    <form>
          <div class="form-group">
            <h4 class="text-center">New Category </h4>
            <label for="recipient-name" class="col-form-label">
              Category Name
            </label>
            <input
              type="text"
              class="form-control "
              id="person-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </form>
  )
}

export default AddEditCategoryForm