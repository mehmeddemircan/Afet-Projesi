import { Carousel } from "antd";
import React, { Fragment } from "react";

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
};

const BrandSlider = ({ children, title }) => {
  return (
    <Fragment>
      <h4 className="my-4">{title}</h4>

      <Carousel
        autoplay
        {...settings}
        style={{
          marginTop: 10,
          height: 280,
          padding: "0px 0px",
       
        }}
      >
        {children}
      </Carousel>
    </Fragment>
  );
};

export default BrandSlider;
