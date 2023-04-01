import React from "react";
import MainLayout from "../components/layout/MainLayout";
import HomeJumbotron from "../components/jumbotron/HomeJumbotron";
import CardSlider from "../components/slider/CardSlider";

const HomePage = () => {
  return (
    <MainLayout>
      <HomeJumbotron />
      <CardSlider />
    </MainLayout>
  );
};

export default HomePage;
