import React from "react";
import { Link } from "react-router-dom";
import LgNavOptions from "./LgNavOptions";
import { FaPlus, FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white  items-center justify-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div className="drawer lg:hidden mr-10 z-50">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn  bg-white">
                  <GiHamburgerMenu></GiHamburgerMenu>
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
               
                <ul className="menu p-4 w-80 min-h-full bg-white text-base-content gap-2">
                <div>
                  <h1 className="text-center text-lg uppercase">Menu</h1>
                  <span className="divider"></span>
                 <div className="flex gap-3 justify-center">
                 <h1><FaSearch></FaSearch></h1>
                 <h1><FaUser></FaUser></h1>
                 </div>
                </div>
                  {/* Sidebar content here */}
                  <li>
                   <div className="flex justify-between">
                   <Link>Make Up</Link>
                   <h1><FaPlus></FaPlus></h1>
                   </div>
                  </li>
                  <li>
                  <div className="flex justify-between">
                   <Link>Skin</Link>
                   <h1><FaPlus></FaPlus></h1>
                   </div>
                  </li>
                  <li>
                  <div className="flex justify-between">
                   <Link>Hair</Link>
                   <h1><FaPlus></FaPlus></h1>
                   </div>
                  </li>
                  <li>
                  <div className="flex justify-between">
                   <Link>Personal Care</Link>
                   <h1><FaPlus></FaPlus></h1>
                   </div>
                  </li>
                  <li>
                  <div className="flex justify-between">
                   <Link>Mom & Baby</Link>
                   <h1><FaPlus></FaPlus></h1>
                   </div>
                  </li>
                  <li>
                  <div className="flex justify-between">
                   <Link>Fragrance</Link>
                   <h1><FaPlus></FaPlus></h1>
                   </div>
                  </li>
                  <li>
                  <div className="flex justify-between">
                   <Link>Undergarments</Link>
                   <h1><FaPlus></FaPlus></h1>
                   </div>
                  </li>
                  <li>
                  <div className="flex justify-between">
                   <Link>Combo</Link>
                   {/* <h1><FaPlus></FaPlus></h1> */}
                   </div>
                  </li>
                  <li>
                  <div className="flex justify-between">
                   <Link>Buy 1 Get 1</Link>
                   {/* <h1><FaPlus></FaPlus></h1> */}
                   </div>
                  </li>
                  <li>
                  <div className="flex justify-between">
                   <Link>Clearance Sale</Link>
                   {/* <h1><FaPlus></FaPlus></h1> */}
                   </div>
                  </li>
                  <li>
                  <div className="flex justify-between">
                   <Link>Men</Link>
                   <h1><FaPlus></FaPlus></h1>
                   </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
            <div className="search-field">
              <input
                type="text"
                placeholder="search for products & brands"
                className="input input-bordered w-44  md:w-full mt-5  md:mt-0 md:ml-36 rounded-full border-[#ff3d71] bg-gray-100"
              />
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
