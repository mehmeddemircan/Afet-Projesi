import { Popover } from 'antd'
import React, { Fragment } from 'react'

const FiltersButton = ({content}) => {
  return (
   <Fragment>
      <Popover
            placement="bottom"
            content={
              content
            }
            title="Filters"
            trigger="click"
          >
            <button
              className="btn text-white rounded-pill mx-2"
              style={{ backgroundColor: "#222" }}
            >
              Filters <i class="fa-solid fa-filter text-white"></i>
            </button>
          </Popover>
   </Fragment>
  )
}

export default FiltersButton