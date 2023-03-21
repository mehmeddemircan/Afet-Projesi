import { Popover } from 'antd'
import React, { Fragment } from 'react'

const FiltersButton = ({handleCheckboxChange}) => {
  return (
   <Fragment>
      <Popover
            placement="bottom"
            content={
              <div className="d-flex flex-column">
                <div className="px-2 mb-2 border-bottom">
                  {" "}
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value="Cok Acil"
                    id="flexCheckDefault"
                    onClick={(e)  => handleCheckboxChange(e.target.value) }
                  />{" "}
                  <a
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    Cok Acil Olanlar
                  </a>
                </div>
                <div className="px-2  mb-2 border-bottom">
                  {" "}
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value="Acil"
                    id="flexCheckDefault"
                    onClick={(e)  => handleCheckboxChange(e.target.value) }
                  />{" "}
                  <a
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    {" "}
                    Acil Olanlar
                  </a>
                </div>
                <div className="px-2 mb-2 border-bottom">
                  {" "}
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value="Normal"
                    id="flexCheckDefault"
                    onClick={(e)  => handleCheckboxChange(e.target.value) }
                  />{" "}
                  <a
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    Normal Olanlar
                  </a>
                </div>
                <div className="px-2 mb-2 border-bottom">
                  {" "}
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value="Acil Degil"
                    id="flexCheckDefault"
                    onClick={(e)  => handleCheckboxChange(e.target.value) }
                  />{""}
                  <a
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    Suan Gerekli olmayanlar
                  </a>
                </div>
              
              </div>
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