import pinkBeautyImg from "../../../assets/Slider-Images/pink-beauty-3.0.jpg"
import pujaSaleImg from "../../../assets/Slider-Images/puja-sale.png"
import preWinterImg from "../../../assets/Slider-Images/pre-winter.jpg"
import couponCodeImg from "../../../assets/Slider-Images/coupon-code.jpg"
import beautySolutionImg from "../../../assets/Slider-Images/beauty-solution.png"
import nirvanaImg from "../../../assets/Slider-Images/nirvana.jpg"
// slider images for mobile 
import pinkBeautyMobile from "../../../assets/Slider-Mobile/pink-beauty-mobile.jpg"
import pujaSaleMobile from "../../../assets/Slider-Mobile/puja-sale-mobile.png"
import preWinterMobile from "../../../assets/Slider-Mobile/pre-winter-mobile.jpg"
import couponCodeMobile from "../../../assets/Slider-Mobile/coupon-code-mobile.jpg"
import nirvanaMobile from "../../../assets/Slider-Mobile/nirvana-mobile.jpg"
import { GoDotFill } from "react-icons/go";
import { RiChatSmileFill } from "react-icons/ri";
import { BsBagDashFill } from "react-icons/bs";
import "./slider.css"
const Slider = () => {
  return (
    <div>
      {/* cart */}
      <div className="fixed right-0 top-72 bg-[#192038] border-2 border-[#ff3d71] rounded-lg z-50">
        <div className="p-1">
          <h1 className="text-xl text-white flex justify-center">
            <BsBagDashFill></BsBagDashFill>
          </h1>
          <p className="text-white">0 Items</p>
        </div>
        <div className="bg-[#ff3d71] text-white p-1">
          <p className="text-center ">$0</p>
        </div>
      </div>
      {/* Help desk chat */}
      <div className="help-desk fixed right-4 bottom-10 bg-[#ff3d71] rounded-full z-50">
        <div>
          <h1 className="text-4xl text-white p-2">
            <RiChatSmileFill></RiChatSmileFill>
          </h1>
        </div>
      </div>

      {/* slider */}

      <div className="carousel bg-white w-full">
        <div id="item1" className="carousel-item w-full h-auto">
          <picture>
            <img
              src={pinkBeautyImg}
              alt="Loading"
              className="w-full 2xl:w-[7000px] h-100% hidden md:block lg:block xl:block 2xl:block"
            />
            {/* image for mobile */}
            <img
              src={pinkBeautyMobile}
              alt="Loading"
              className="md:hidden lg:hidden w-[800px]"
            />
          </picture>
        </div>
        <div id="item2" className="carousel-item w-full h-auto">
          <picture>
            <img
              src={pujaSaleImg}
              alt="Loading"
              className="w-full 2xl:w-[7000px] h-100% hidden md:block lg:block xl:block 2xl:block"
            />
            {/* image for mobile */}
            <img
              src={pujaSaleMobile}
              alt=""
              className="md:hidden lg:hidden w-[800px]"
            />
          </picture>
        </div>
        <div id="item3" className="carousel-item w-full h-auto">
          <picture>
            <img
              src={preWinterImg}
              alt="Loading"
              className=" w-full 2xl:w-[7000px] h-100% hidden md:block lg:block xl:block 2xl:block"
            />
            {/* image for mobile */}
            <img
              src={preWinterMobile}
              alt=""
              className="md:hidden lg:hidden w-[800px]"
            />
          </picture>
        </div>

        <div id="item4" className="carousel-item w-full h-auto">
          <picture>
            <img
              src={couponCodeImg}
              alt="Loading"
              className=" w-full 2xl:w-[7000px] h-100% hidden md:block lg:block xl:block 2xl:block"
            />
            {/* image for mobile */}
            <img
              src={couponCodeMobile}
              alt=""
              className="md:hidden lg:hidden w-[800px]"
            />
          </picture>
        </div>

        <div id="item5" className="carousel-item w-full h-auto">
          <picture>
            <img
              src={beautySolutionImg}
              alt="Loading"
              className="w-full 2xl:w-[7000px] h-100% hidden md:block lg:block xl:block 2xl:block"
            />
            {/* image for mobile */}
            <img
              src=""
              alt=""
              className="hidden"
            />
          </picture>
        </div>

        <div id="item6" className="carousel-item w-full h-auto ">
          <picture>
            <img
              src={nirvanaImg}
              alt="Loading"
              className="w-full h-100% hidden md:block lg:block xl:block 2xl:block 2xl:w-[7000px]"
            />
            {/* img for mobile */}
            <img src={nirvanaMobile} alt="" className="md:hidden lg:hidden w-[800px]"/>
            
          </picture>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a
          href="#item1"
          className="text-sm md:text-xl lg:text-xl text-[#ff3d71]"
        >
          <GoDotFill></GoDotFill>
        </a>
        <a
          href="#item2"
          className="text-sm md:text-xl lg:text-xl text-[#ff3d71]"
        >
          <GoDotFill></GoDotFill>
        </a>
        <a
          href="#item3"
          className="text-sm md:text-xl lg:text-xl text-[#ff3d71]"
        >
          <GoDotFill></GoDotFill>
        </a>
        <a
          href="#item4"
          className="text-sm md:text-xl lg:text-xl text-[#ff3d71]"
        >
          <GoDotFill></GoDotFill>
        </a>
        <a
          href="#item5"
          className="text-sm md:text-xl lg:text-xl text-[#ff3d71]"
        >
          <GoDotFill></GoDotFill>
        </a>
        <a
          href="#item6"
          className="text-sm md:text-xl lg:text-xl hidden md:block lg:block text-[#ff3d71]"
        >
          <GoDotFill></GoDotFill>
        </a>
      </div>
    </div>
  );
};

export default Slider;
