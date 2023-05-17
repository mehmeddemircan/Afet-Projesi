import React, { Fragment, useEffect } from "react";

import cookies from "js-cookie";
import i18next from "i18next";
import { Modal, Tabs } from "antd";
import languages from "../../redux/constants/languages/Languages";
const { TabPane } = Tabs;
const LanguageModal = ({ showLanguageModal, handleCancelLanguageModal }) => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);

  return (
    <Fragment>
      <Modal
        open={showLanguageModal}
        footer={null}
        onCancel={handleCancelLanguageModal}
        width={1040}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="Language and Region" key="1">
            <div
              style={{
                maxHeight: 480,
                overflowY: "auto",
              }}
            >
              <div className="px-3 my-3">
                <h6 style={{ fontSize: 21, color: "#484848" }}>
                  Recommended Language
                </h6>
              </div>

              <li
                style={{
                  display: "inline-block",
                  padding: 4,
                  fontSize: 15,
                  height: 50,
                  lineHeight: "40px",
                  borderRadius: 20,
                  margin: "8px",
                  color: "",
                  // currentLanguageCode === "en" ? "#1890ff" : "",
                  border: "1px solid rgba(34,34,34,0.10)",
                  // currentLanguageCode === "en"
                  //   ? "1px solid #1890ff"
                  // : "1px solid rgba(34,34,34,0.10)",
                }}
                className="col-md-2"
                onClick={() => {
                  i18next.changeLanguage("en");
                  handleCancelLanguageModal();
                }}
              >
                <a style={{ padding: "9px 12px" }}>
                  <img
                    src={`https://flagicons.lipis.dev/flags/4x3/gb.svg`}
                    alt=""
                    class="img-fluid mx-2"
                    width={24}
                    height={24}

                    // style={{
                    //   opacity: currentLanguageCode === code ? 0.5 : 1,
                    // }}
                  />
                  English
                </a>
              </li>

              <div className="px-3 mt-5 mb-3">
                <h6 style={{ fontSize: 21, color: "#484848" }}>
                  Choose a language & Region
                </h6>
              </div>

              <div class="container">
                <div class="d-flex justify-content-start row  gy-5">
                  {languages.map(
                    ({ code, name, country_code, country_name }) => (
                      <div
                        class="col col-lg-3 col-md-4 col-sm-12"
                        key={country_code}
                      >
                        <button
                          class=" w-100 btn btn-md btn-sm  btn-light rounded-pill p-3 my-2 "
                          onClick={() => {
                            i18next.changeLanguage(code);
                            handleCancelLanguageModal();
                          }}
                          style={{
                            opacity: currentLanguageCode === code ? 0.5 : 1,

                            border:
                              currentLanguageCode === code
                                ? "1px solid #1890ff"
                                : "1px solid rgb(221,221,221)",
                          }}
                        >
                          <span
                            className="d-inline-flex justify-content-center "
                            style={{ fontSize: "16px" }}
                          >
                            <img
                              src={`https://flagicons.lipis.dev/flags/4x3/${country_code}.svg`}
                              alt=""
                              class="img-fluid mx-2"
                              width={24}
                              height={24}
                            />
                            {name}
                          </span>
                        </button>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </TabPane>
          {/* Currency */}
          <TabPane tab="Currency" key="2">
            <h4 style={{ padding: "5px 0px 5px 10px" }}>Choose a currency</h4>
            <div
              style={{
                maxHeight: 480,
                overflowY: "auto",
              }}
              className="container d-flex justify-content-center flex-wrap"
            >
              {languages.map(({ code, name, country_code }) => (
                <div class="col col-lg-3 col-md-4 col-sm-12" key={country_code}>
                  <button
                    class=" w-100 btn btn-md btn-sm  btn-light rounded-pill p-3 my-2 "
                    aria-disabled={currentLanguageCode === code}
                    onClick={() => {
                      i18next.changeLanguage(code);
                      handleCancelLanguageModal();
                    }}
                  >
                    <span
                      className="d-inline-flex justify-content-center "
                      style={{ fontSize: "16px" }}
                    >
                      {" "}
                      <p
                        className={`flag-icon flag-icon-${country_code} mx-2`}
                        // style={{
                        //   opacity: currentLanguageCode === code ? 0.5 : 1,
                        // }}
                      ></p>
                      {name}
                    </span>
                  </button>
                </div>
              ))}

              <div style={{ height: "110vh" }}></div>
            </div>
          </TabPane>
        </Tabs>
      </Modal>
    </Fragment>
  );
};

export default LanguageModal;