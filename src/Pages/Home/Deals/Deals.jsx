import React from "react";
import dealsImgOne from "../../../assets/deals-img-1.gif";
import dealsImgTwo from "../../../assets/deals-img-2.png";
import dealsImgThree from "../../../assets/deals-img-3.png";
import dealsImgFour from "../../../assets/deals-img-4.png";

// updated deals section images
import newSliderImgOne from "../../../assets/New-deals-image/new-deals-img-1.gif";
import newSliderImgTwo from "../../../assets/New-deals-image/new-deals-img-2.jpg";
import newSliderImgThree from "../../../assets/New-deals-image/new-deals-img-3.jpg";
import newSliderImgFour from "../../../assets/New-deals-image/new-deals-img-4.gif";
import { Link } from "react-router-dom";

const Deals = () => {
  return (
    <div>
      <h1 className="font-bold md:font-semibold text-xs text-[#222222] uppercase text-center mt-7 mb-2">
        Deals You Cannot Miss
        {/* images grid gird-cols-1 md:grid-cols-4 gap-3 md:gap-0 mt-1 md:px-8 max-w-screen-xl mx-auto p-1 md:p-0 lg:p-0 */}
      </h1>

      <div className="images grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-2 p-0 max-w-screen-lg mx-auto px-1 md:px-5">
        {/* card 01 */}
        <Link>
          <div className="card w-full md:w-full bg-white  mx-auto">
            <figure>
              <picture>
                <img
                  src={newSliderImgOne}
                  alt="Loading"
                  className="h-auto max-w-100%"
                />
              </picture>
            </figure>
          </div>
        </Link>
        {/* card 02 */}
        <Link>
          <div className="card w-full md:w-full bg-white  mx-auto">
            <figure>
              <picture>
                <img
                  src={newSliderImgTwo}
                  alt="Loading"
                  className="h-auto max-w-100%"
                />
              </picture>
            </figure>
          </div>
        </Link>
        {/* card 03 */}
        <Link>
          <div className="card w-full md:w-full bg-white mx-auto">
            <figure>
              <picture>
                <img
                  src={newSliderImgThree}
                  alt="Loading"
                  className="h-auto max-w-100%"
                />
              </picture>
            </figure>
          </div>
        </Link>
        {/* card 04 */}
        <Link>
          <div className="card w-full md:w-full bg-white mx-auto">
            <figure>
              <picture>
                <img
                  src={newSliderImgFour}
                  alt="Loading"
                  className="h-auto max-w-100%"
                />
              </picture>
            </figure>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Deals;
