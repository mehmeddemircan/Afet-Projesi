import { Carousel } from "antd";
import React, { Fragment } from "react";

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024, // Define a breakpoint for screen size
      settings: {
        slidesToShow: 3, // Update slidesToShow for screen size equal to or smaller than 1024px
      },
    },
    {
      breakpoint: 768, // Define another breakpoint for screen size
      settings: {
        slidesToShow: 1, // Update slidesToShow for screen size equal to or smaller than 768px
      },
    },
  ],
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
          width: "100%",

        }}
      >
        {children}
      </Carousel>
    </Fragment>
  );
};

export default BrandSlider;
