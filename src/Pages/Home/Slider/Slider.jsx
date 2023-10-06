import sliderImgOne from "../../../assets/Slider-Images/slider-1.png";
import sliderImgTwo from "../../../assets/Slider-Images/slider-2.jpg";
import sliderImgThree from "../../../assets/Slider-Images/slider-3.jpg";
import sliderImgFour from "../../../assets/Slider-Images/slider-4.png";
import sliderImgFive from "../../../assets/Slider-Images/slider-5.jpg";
import sliderImgSix from "../../../../src/assets/Slider-Images/slider-6.png";
import mobileSliderOne from "../../../assets/Slider-Mobile/Mobile-Banner-1.png";
import mobileSliderTwo from "../../../assets/Slider-Mobile/Mobile-Slider-2.png";
import mobileSliderThree from "../../../assets/Slider-Mobile/Mobile-Banner-3 .jpg";
import mobileSliderFour from "../../../assets/Slider-Mobile/Mobile-Banner-4.jpg";
import mobileSliderFive from "../../../assets/Slider-Mobile/Mobile-Banner-5.jpg";
import newSliderOne from "../../../assets/Slider-Images/New-Slider-1.jpg";
import newSliderOneMobile from "../../../assets/Slider-Mobile/New-mobile-banner-1.jpg";
import { GoDotFill } from "react-icons/go";
import { RiChatSmileFill } from "react-icons/ri";
import { BsBagDashFill } from "react-icons/bs";

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

      <div className="carousel w-full pt-32 md:pt-0 lg:pt-0 xl:pt-0 xxl:pt-0">
        <div id="item1" className="carousel-item w-full h-auto">
          <picture>
            <img
              src={newSliderOne}
              alt="Loading"
              className="w-full h-100% hidden md:block lg:block"
            />
            {/* mobile slider */}
            <img
              src={newSliderOneMobile}
              alt="Loading"
              className="md:hidden lg:hidden"
            />
          </picture>
        </div>
        <div id="item2" className="carousel-item w-full h-auto">
          <picture>
            <img
              src={sliderImgSix}
              alt="Loading"
              className="w-full h-100% hidden md:block lg:block"
            />
            {/* mobile slider */}
            <img src={mobileSliderTwo} alt="" className="md:hidden lg:hidden" />
          </picture>
        </div>
        <div id="item3" className="carousel-item w-full h-auto">
          <picture>
            <img
              src={sliderImgTwo}
              alt="Loading"
              className=" w-full h-100% hidden md:block lg:block"
            />
            {/* mobile slider */}
            <img
              src={mobileSliderThree}
              alt=""
              className="md:hidden lg:hidden"
            />
          </picture>
        </div>

        <div id="item4" className="carousel-item w-full h-auto">
          <picture>
            <img
              src={sliderImgThree}
              alt="Loading"
              className=" w-full h-100% hidden md:block lg:block"
            />
            {/* mobile slider */}
            <img
              src={mobileSliderFour}
              alt=""
              className="md:hidden lg:hidden"
            />
          </picture>
        </div>

        <div id="item5" className="carousel-item w-full h-auto">
          <picture>
            <img
              src={sliderImgFour}
              alt="Loading"
              className="w-full h-100% hidden md:block lg:block"
            />
            {/* mobile slider */}
            <img
              src={mobileSliderFive}
              alt=""
              className="md:hidden lg:hidden"
            />
          </picture>
        </div>

        <div
          id="item6"
          className="carousel-item w-full h-auto hidden md:block lg:block"
        >
          <picture>
            <img src={sliderImgFive} alt="Loading" className="w-full h-100% " />
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
