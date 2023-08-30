import React from "react";
import { Link } from "react-router-dom";
import LgNavOptions from "./LgNavOptions";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white p-6 items-center justify-center">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-48"
            >
              <li>
                <Link>Make Up</Link>
              </li>
              <li>
                <Link>Skin</Link>
              </li>
              <li>
                <Link>Hair</Link>
              </li>
              <li>
                <Link>Personal Care</Link>
              </li>
              <li>
                <Link>Mom & Baby</Link>
              </li>
              <li>
                <Link>Fragrance</Link>
              </li>
              <div className="mt-3 mb-3">
              <button className="btn btn-outline border-orange-600 hover:bg-orange-600 btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-full uppercase">My Account</button>
              <button className="btn btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-full text-white ml-2">Bag</button>
              </div>
            </ul>
          </div>
       <div className="logo-and-search flex flex-col md:flex-row gap-0 ">
      <div className="logo-container flex flex-row mt-0 md:mt-5">
      <div className="logo">
          <img src="https://shop.shajgoj.com/wp-content/themes/Shajgoj/assets/images/logov2.png" alt="Loading" className=" w-52" />
        </div>
        <div className="brand hidden md:block">
          <h2 className="font-semibold uppercase md:ml-3">Brands</h2>
        </div>
      </div>
        <div className="search-field">
          <input type="text" placeholder="search for products & brands" className="input input-bordered w-44 md:w-56 mt-5  md:mt-0 md:ml-20 rounded-full border-[#ff3d71]" />
        </div>
       </div>
        </div>
        <div className="buttons flex flex-col md:flex-row ml-20  md:gap-0 lg:gap-0">
          <div className="accounts hidden md:block">
            <button className="bt bg-[#f5f5f5] text-[#222] hover:text-[#ff3d71] btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-full uppercase font-bold">My Account</button>
          </div>
          <div className="bag ml-5  hidden md:block">
            <button className="btn bg-[#ff3d71] hover:bg-[#ff3d71] btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-full text-white">Bag (0)</button>
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
