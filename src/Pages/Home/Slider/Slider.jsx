import sliderImgOne from "../../../assets/slider-1.png"
import sliderImgTwo from "../../../assets/slider-2.jpg"
import sliderImgThree from "../../../assets/slider-3.jpg"
import sliderImgFour from "../../../assets/slider-4.png"
import sliderImgFive from "../../../assets/slider-5.jpg"
import { GoDotFill } from "react-icons/go";
import { RiChatSmileFill } from "react-icons/ri";
import { BsBagDashFill } from "react-icons/bs";

const Slider = () => {
  return (
    <div>
      {/* cart */}
      <div className="fixed right-0 top-72 bg-[#192038] border-2 border-[#ff3d71] rounded-lg z-50">
        <div className="p-1">
          <h1 className="text-2xl text-white ml-3">
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

      <div className="carousel">
        <div id="item1" className="carousel-item w-full">
          <picture>
          <img
            src={sliderImgOne}
            alt="Loading"
            className="w-full h-48 md:h-auto lg:h-auto"
            loading="lazy"
          />
          </picture>
        </div>
        <div id="item2" className="carousel-item w-full">
          <picture>
          <img
            src={sliderImgTwo}
            alt="Loading"
            className=" w-full h-48 md:h-auto lg:h-auto"
            loading="lazy"
          />
          </picture>
        </div>

        <div id="item3" className="carousel-item w-full">
         <picture>
         <img
            src={sliderImgThree}
            alt="Loading"
            className=" w-full h-48 md:h-auto lg:h-auto"
            loading="lazy"
          />
         </picture>
        </div>

        <div id="item4" className="carousel-item w-full">
          <picture>
            
          <img
            src={sliderImgFour}
            alt="Loading"
            className="w-full h-48 md:h-auto lg:h-auto"
            loading="lazy"
          />
          </picture>
          
        </div>

        <div id="item5" className="carousel-item w-full">
          <picture>
          <img
            src={sliderImgFive}
            alt="Loading"
            className="w-full h-48 md:h-auto lg:h-auto"
            loading="lazy"
          />
          </picture>
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
        <a href="#item5" className="text-sm md:text-xl lg:text-xl">
          <GoDotFill></GoDotFill>
        </a>
      </div>
    </div>
  );
};

export default Slider;
