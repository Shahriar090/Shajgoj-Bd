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
      <div className="navbar-container bg-white fixed z-10 w-full  lg:hidden py-2 px-4">
        {/* logo and dropdown container for small device */}
        <div className="navbar-start flex items-center w-full gap-14">
          <div className="dropdown">
            <NavbarDropDown></NavbarDropDown>
          </div>

          <div className="navbar-logo">
            <div>
              <img src={logoImg} alt="Loading" className="w-32" />
            </div>
            <div className="brands hidden md:block lg:block">
              <h1 className="uppercase font-semibold">Brands</h1>
            </div>
          </div>
        </div>
        <div className="search-field m-3">
          <div className="nav-search  relative">
            <input
              type="text"
              placeholder="Search For Products, Brands..."
              className="input w-full   bg-gray-100 rounded-none px-10"
            />
            <div className="absolute left-4 bottom-4">
              <h1 className="text-gray-400">
                <FaSearch></FaSearch>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* navbar for large device */}
      <div className="navbar bg-white max-w-screen-lg mx-auto  hidden md:hidden lg:block px-4">
        <div className="logo-container">
          <div className="nav-logo flex gap-10">
            <div>
            <Link to='/'>  <img src={logoImg} alt="Loading" className="w-32 mt-1" /></Link>
            </div>
            <div className="brands text-xs">
              
              <Link className=" uppercase font-bold bg-white border-0 hover:bg-white"> Brands</Link>
            </div>
          </div>
        </div>

        <div className="navbar-search ml-60">
          <div className="nav-search  relative">
            <input
              type="text"
              placeholder="Search For Products, Brands..."
              className="input w-80 h-8 border-[#ff3d71] bg-gray-100 rounded-full px-8 py-2"
            />
            <div className="absolute bottom-2 left-2">
              <h1 className="text-gray-400">
                <FaSearch></FaSearch>
              </h1>
            </div>
          </div>

          <div className="nav-buttons ml-3 flex gap-2">
            <div className="accounts">
              <Link to='/login'><button className="btn btn-sm bg-[#f5f5f5] text-[#222] hover:text-[#ff3d71]  rounded-full uppercase font-bold text-xs" title="Login / Register">
                My Account
              </button></Link>
            </div>

            <div className="bag">
              <button className="btn btn-sm bg-[#ff3d71] hover:bg-[#ff3d71]  rounded-full text-white text-xs">
                <FaShoppingBag></FaShoppingBag>Bag (0)
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:block lg:block border-t-2 max-w-screen-lg mx-auto mt-1 pt-1">
        <NavLgOptions></NavLgOptions>
      </div>
      </div>

      
    </nav>
  );
};

export default NavbarTwo;
