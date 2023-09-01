import React from "react";

import sliderImgOne from "../../../assets/slider-1.png";
import sliderImgTwo from "../../../assets/slider-2.jpg";
import sliderImgThree from "../../../assets/slider-3.jpg";
import sliderImgFour from "../../../assets/slider-3.png";
import { GoDotFill, } from "react-icons/go";

const Slider = () => {
  return (
    <div>
      <div className="carousel">
        <div id="item1" className="carousel-item w-full h-[40vh] md:h-[75vh] lg:h-[75vh]">
          <img
            src={sliderImgOne}
            alt="Loading"
            className="w-full h-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full h-[40vh] md:h-[75vh] lg:h-[75vh]">
          <img
            src={sliderImgTwo}
            alt="Loading"
            className="w-full h-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full h-[40vh] md:h-[75vh] lg:h-[75vh]">
          <img
            src={sliderImgThree}
            alt="Loading"
            className="w-full h-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full h-[40vh] md:h-[75vh] lg:h-[75vh]">
          <img
            src={sliderImgFour}
            alt="Loading"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="text-sm md:text-xl lg:text-xl">
          <GoDotFill></GoDotFill>
        </a>
        <a href="#item2" className="text-sm md:text-xl lg:text-xl">
        <GoDotFill></GoDotFill>
        </a>
        <a href="#item3" className="text-sm md:text-xl lg:text-xl">
        <GoDotFill></GoDotFill>
        </a>
        <a href="#item4" className="text-sm md:text-xl lg:text-xl">
        <GoDotFill></GoDotFill>
        </a>
      </div>
    </div>
  );
};

export default Slider;
