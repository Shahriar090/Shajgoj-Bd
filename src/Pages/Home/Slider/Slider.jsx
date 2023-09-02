import React from "react";

import sliderImgOne from "../../../assets/slider-1.png";
import sliderImgTwo from "../../../assets/slider-2.jpg";
import sliderImgThree from "../../../assets/slider-3.jpg";
import sliderImgFour from "../../../assets/slider-3.png";
import { GoDotFill, } from "react-icons/go";
import { FaFacebookMessenger, FaShoppingBag } from "react-icons/fa";
import chatImg from '../../../assets/chat.png'

const Slider = () => {
  return (
    <div>
      
       <div className="fixed right-0 top-72 bg-[#192038] border-2 border-[#ff3d71] rounded-lg z-50">
       <div className="p-1">
        <h1 className="text-2xl text-center text-white "><FaShoppingBag></FaShoppingBag></h1>
        <p className="text-white">0 Items</p>
        </div>
        <div className="bg-[#ff3d71] text-white p-1">
        <p className="text-center ">$0</p>
        </div>
       
       </div>

       <div className="help-desk fixed right-6 bottom-10 bg-[#ff3d71] rounded-full z-50">
        <div>
          <h1 className="text-3xl text-white p-2"><FaFacebookMessenger></FaFacebookMessenger></h1>
        </div>
       </div>
      
      <div className="carousel">
        <div id="item1" className="carousel-item w-full h-[40vh] md:h-[75vh] lg:h-[75vh]">
          <img
            src={sliderImgOne}
            alt="Loading"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full h-[40vh] md:h-[75vh] lg:h-[75vh]">
          <img
            src={sliderImgTwo}
            alt="Loading"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full h-[40vh] md:h-[75vh] lg:h-[75vh]">
          <img
            src={sliderImgThree}
            alt="Loading"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full h-[40vh] md:h-[75vh] lg:h-[75vh]">
          <img
            src={sliderImgFour}
            alt="Loading"
            className="w-full"
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
