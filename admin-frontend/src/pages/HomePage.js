import React from "react";
import MainLayout from "../components/layout/MainLayout";
import HomeJumbotron from "../components/jumbotron/HomeJumbotron";
import CardSlider from "../components/slider/CardSlider";
import ClothesBrandSlider from "../components/slider/ClothesBrandSlider";
import ShelterBrandSlider from "../components/slider/ShelterBrandSlider";
import MealBrandSlider from "../components/slider/MealBrandSlider";

const HomePage = () => {
  return (
    <MainLayout>
      <HomeJumbotron />
   
      {/* <ClothesBrandSlider />
      <ShelterBrandSlider />
      <MealBrandSlider /> */}
    </MainLayout>
  );
};

export default HomePage;
