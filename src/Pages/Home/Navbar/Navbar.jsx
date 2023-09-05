import { Link } from "react-router-dom";
import LgNavOptions from "./LgNavOptions";
import { FaPlus, FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import DropDown from "./DropDown";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white  items-center justify-center">
        <div className="navbar-start">
         <DropDown></DropDown>
          {/* Navbar log and search field */}
          <div className="logo-and-search flex flex-col md:flex-row gap-0 ">
            <div className="logo-container flex flex-row mt-0 md:mt-4">
              <div className="logo">
                <img
                  src="https://shop.shajgoj.com/wp-content/themes/Shajgoj/assets/images/logov2.png"
                  alt="Loading"
                  className=" w-44"
                />
              </div>
              <div className="brand hidden md:block">
                <h2 className="font-semibold uppercase md:ml-10">Brands</h2>
              </div>
            </div>
            <div className="search-field relative">
              <input
                type="text"
                placeholder="search for products & brands"
                className="input input-bordered w-44  md:w-full mt-5  md:mt-0 md:ml-36 rounded-full border-[#ff3d71] bg-gray-100 text-center"
              />
             <h1 className="absolute left-40 top-1/2 transform -translate-y-1/2 text-gray-400 hidden md:block lg:block"><FaSearch></FaSearch></h1>
            </div>
          </div>
        </div>
        <div className="buttons flex flex-col md:flex-row ml-20  md:gap-0 lg:gap-0">
          <div className="accounts hidden md:block">
            <button className="bt bg-[#f5f5f5] text-[#222] hover:text-[#ff3d71] btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-full uppercase font-bold">
              My Account
            </button>
          </div>
          <div className="bag ml-5  hidden md:block">
            <button className="btn bg-[#ff3d71] hover:bg-[#ff3d71] btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-full text-white">
              <FaShoppingBag></FaShoppingBag>Bag (0)
            </button>
          </div>
        </div>
      </div>
      <span className="divider w-9/12 mx-auto"></span>
      <div className="nav-options hidden md:block lg:block">
        <LgNavOptions></LgNavOptions>
      </div>
    </div>
  );
};

export default Navbar;
