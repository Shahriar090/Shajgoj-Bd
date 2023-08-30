import React from "react";

import sliderImgOne from "../../../assets/slider-1.png";
import sliderImgTwo from "../../../assets/slider-2.jpg";
import sliderImgThree from "../../../assets/slider-3.jpg";
import sliderImgFour from "../../../assets/slider-3.png";

const Slider = () => {
  return (
    <div>
      <div className="carousel">
        <div id="item1" className="carousel-item w-full h-52 md:h-96 lg:h-96">
          <img
            src={sliderImgOne}
            alt="Loading"
            className="w-full h-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full h-52 md:h-96 lg:h-96 ">
          <img
            src={sliderImgTwo}
            alt="Loading"
            className="w-full h-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full h-52 md:h-96 lg:h-96">
          <img
            src={sliderImgThree}
            alt="Loading"
            className="w-full h-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full h-52 md:h-96 lg:h-96">
          <img
            src={sliderImgFour}
            alt="Loading"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Slider;
