import React from "react";
import dealsImgOne from '../../../assets/deals-img-1.gif'
import dealsImgTwo from '../../../assets/deals-img-2.png'
import dealsImgThree from '../../../assets/deals-img-3.png'
import dealsImgFour from '../../../assets/deals-img-4.png'
import { Link } from "react-router-dom";

const Deals = () => {
  return (
    <div>
      <h1 className="font-bold uppercase text-center mt-3">
        Deals You Cannot Miss
      </h1>
    
      <div className="images grid gird-cols-1 md:grid-cols-4 gap-3 md:gap-0 mt-3 md:px-8">
        {/* card 01 */}
        <Link>
        <div className="card w-full md:w-[300px] md:h-[300px] bg-white  mx-auto">
          <figure>
            <img
              src={dealsImgOne}
              alt="Loading"
            />
          </figure>
          </div>
        </Link>
        {/* card 02 */}
        <Link>
        <div className="card w-full md:w-[300px] md:h-[300px] bg-white  mx-auto">
          <figure>
            <img
              src={dealsImgTwo}
              alt="Loading"
            />
          </figure>
          </div>
        </Link>
        {/* card 03 */}
        <Link>
        <div className="card w-full md:w-[300px] md:h-[300px] bg-white mx-auto">
          <figure>
            <img
              src={dealsImgThree}
              alt="Loading"
            />
          </figure>
          </div>
        </Link>
        {/* card 04 */}
        <Link>
        <div className="card w-full md:w-[300px] md:h-[300px] bg-white mx-auto">
          <figure>
            <img
              src={dealsImgFour}
              alt="Loading"
            />
          </figure>
          </div>
        </Link>
      </div>

    </div>
  );
};

export default Deals;
