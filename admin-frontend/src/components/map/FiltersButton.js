import { Popover } from 'antd'
import React, { Fragment } from 'react'

const FiltersButton = ({content,title,children}) => {
  return (
   <Fragment>
      <Popover
            placement="bottom"
            content={
              content
            }
            title={title}
            trigger="click"
          >
            <button
              className="btn text-white rounded-pill mx-2"
              style={{ backgroundColor: "#222" }}
            >
              {children} <i class="fa-solid fa-filter text-white"></i>
            </button>
          </Popover>
   </Fragment>
  )
}

export default FiltersButton