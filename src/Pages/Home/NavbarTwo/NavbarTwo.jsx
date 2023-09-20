import React from "react";

import { FaSearch, FaShoppingBag } from "react-icons/fa";

import logoImg from "../../../assets/logov2.png";
import NavbarDropDown from "./NavbarDropDown";
import NavLgOptions from "./NavLgOptions";
import { Link } from "react-router-dom";

const NavbarTwo = () => {
  return (
    <nav>
      {/* navbar for small device */}
      <div className="navbar-container md:hidden lg:hidden py-2 px-4">
        {/* logo and dropdown container for small device */}
        <div className="navbar-start flex items-center w-full gap-14">
          <div className="dropdown">
            <NavbarDropDown></NavbarDropDown>
          </div>

          <div className="navbar-logo">
            <div>
              <img src={logoImg} alt="Loading" className="w-32" />
            </div>
            <div className="brands hidden md:block">
              <h1 className="uppercase font-semibold">Brands</h1>
            </div>
          </div>
        </div>
        <div className="search-field m-3">
          <div className="nav-search md:hidden relative">
            <input
              type="text"
              placeholder="Search For Products, Brands..."
              className="input w-full  md:border-[#ff3d71] bg-gray-100 rounded-none text-center"
            />
            <div className="absolute left-6 bottom-4">
              <h1 className="text-gray-400">
                <FaSearch></FaSearch>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* navbar for large device */}
      <div className="navbar bg-white max-w-screen-lg mx-auto  hidden md:block lg:block">
        <div className="logo-container ml-12 mr-16 ">
          <div className="nav-logo flex gap-6">
            <div>
              <img src={logoImg} alt="Loading" className="w-32 mt-1" />
            </div>
            <div className="brands text-xs">
              
              <Link><button className="btn btn-xs uppercase font-bold bg-white border-0 hover:bg-white">Brands</button></Link>
            </div>
          </div>
        </div>

        <div className="navbar-search ml-28">
          <div className="nav-search  relative">
            <input
              type="text"
              placeholder="Search For Products, Brands..."
              className="input w-80 h-9 border-[#ff3d71] bg-gray-100 rounded-full text-center"
            />
            <div className="absolute bottom-3 left-4">
              <h1 className="text-gray-400">
                <FaSearch></FaSearch>
              </h1>
            </div>
          </div>

          <div className="nav-buttons ml-3 flex gap-2">
            <div className="accounts">
              <button className="btn btn-sm bg-[#f5f5f5] text-[#222] hover:text-[#ff3d71]  rounded-full uppercase font-bold">
                My Account
              </button>
            </div>

            <div className="bag">
              <button className="btn btn-sm bg-[#ff3d71] hover:bg-[#ff3d71]  rounded-full text-white">
                <FaShoppingBag></FaShoppingBag>Bag (0)
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:block lg:block p-1 border-t-2 max-w-screen-lg mx-auto mt-1">
        <NavLgOptions></NavLgOptions>
      </div>
      </div>

      
    </nav>
  );
};

export default NavbarTwo;
