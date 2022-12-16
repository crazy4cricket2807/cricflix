import React from "react";
import { Carousel } from "react-responsive-carousel";
import { carouselData } from "../../public/data";
import HeroCarouselItem from "./HeroCarouselItem";

const HeroCarousel = (props) => {
  return (
    <Carousel {...props}>
      {carouselData.map((carouselItem, index) => (
        <HeroCarouselItem
          title={carouselItem.title}
          photo={carouselItem.photo}
        />
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
