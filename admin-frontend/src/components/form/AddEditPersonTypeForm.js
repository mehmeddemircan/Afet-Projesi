import React from 'react'

const AddEditPersonTypeForm = ({name,setName}) => {
  return (
    <form>
    <div class="form-group">
      <h4 class="text-center">New Person Type </h4>
      <label for="recipient-name" class="col-form-label">
        Person Type{" "}
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

export default AddEditPersonTypeForm