import React from "react";
import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import ClohingBasketSegment from "../segment/ClohingBasketSegment";
import InfoBreadcrumb from "../breadcrumb/InfoBreadCrumb";
import ShelterBasketSegment from "../segment/ShelterBasketSegment";
import MealBasketSegment from "../segment/MealBasketSegment";
const BasketTabs = () => {
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane key="1" tab={<a>Giyim Sepetim</a>}>
        <InfoBreadcrumb
          items={[
            {
              title: "Anasayfa",
            },
            {
              title: "Sepetim",
            },
            {
              title: (
                <>
                  <a onClick={(e) => e.preventDefault()}>Giyim Sepetim</a>
                </>
              ),
            },
          ]}
        />
        <ClohingBasketSegment />
      </TabPane>
      <TabPane key="2" tab="Ev-Hotel Sepetim">
      <InfoBreadcrumb
          items={[
            {
              title: "Anasayfa",
            },
            {
              title: "Sepetim",
            },
            {
              title: (
                <>
                  <a onClick={(e) => e.preventDefault()}>Ev-Hotel Sepetim</a>
                </>
              ),
            },
          ]}
        />
        <ShelterBasketSegment />
      </TabPane>
      <TabPane key="3" tab="Gıda Sepetim">
      <InfoBreadcrumb
          items={[
            {
              title: "Anasayfa",
            },
            {
              title: "Sepetim",
            },
            {
              title: (
                <>
                  <a onClick={(e) => e.preventDefault()}>Gıda Sepetim</a>
                </>
              ),
            },
          ]}
        />
        <MealBasketSegment />
      </TabPane>
    </Tabs>
  );
};

export default BasketTabs;
