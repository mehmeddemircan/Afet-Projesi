import React, { Fragment } from 'react'

const FiltersButtonMapContent = ({handleCheckboxChange}) => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default FiltersButtonMapContent