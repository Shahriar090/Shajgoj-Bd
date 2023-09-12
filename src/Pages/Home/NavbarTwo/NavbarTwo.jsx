import React from "react";


import { FaSearch, FaShoppingBag } from "react-icons/fa";

import logoImg from "../../../assets/logov2.png";
import NavbarDropDown from "./NavbarDropDown";
import NavLgOptions from "./NavLgOptions";

const NavbarTwo = () => {
  return (
    <div>
      <div className="navbar bg-white flex flex-col md:flex-row lg:flex-row max-w-screen-xl mx-auto border-b-0 md:border-b-2">
        <div className="">
          <div className="navbar-start">
            <NavbarDropDown></NavbarDropDown>
          </div>
          <div className="nav-logo flex gap-8">
            <div>
              <img src={logoImg} alt="Loading" className="w-48 md:w-96" />
            </div>
            <div className="brands hidden md:block">
              <h1 className="uppercase font-semibold">Brands</h1>
            </div>
          </div>
        </div>

        <div className="nav-search md:hidden p-2 md:p-0 lg:p-0 ml-0 md:ml-60 relative">
          <input
            type="text"
            placeholder="Search For Products, Brands..."
            className="input w-80 md:w-96 max-w-full md:border-[#ff3d71] bg-gray-100 rounded-none md:rounded-full text-center"
          />
          <div className="absolute left-6 ">
            <h1 className="text-gray-400"><FaSearch></FaSearch></h1>
          </div>
        </div>

        
        <div className="navbar-center flex gap-4">
        <div className="nav-search hidden md:block p-2 md:p-0 lg:p-0 ml-0 md:ml-60 relative">
          <input
            type="text"
            placeholder="Search For Products, Brands..."
            className="input w-96 max-w-full md:border-[#ff3d71] bg-gray-100 rounded-none md:rounded-full text-center"
          />
          <div className="absolute left-4 bottom-4">
            <h1 className="text-gray-400"><FaSearch></FaSearch></h1>
          </div>
        </div>
          <div className="nav-buttons flex">
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
        
      </div>
      {/* <span className="divider max-w-screen-xl mx-auto hidden md:block"></span> */}
      <div className="nav-lg-options hidden md:block lg:block mt-0 md:mt-2">
        <NavLgOptions></NavLgOptions>
      </div>
      
      

      
    </div>
  );
};

export default NavbarTwo;
