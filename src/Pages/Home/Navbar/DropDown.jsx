import React from 'react';
import { Link } from "react-router-dom";
import { FaPlus, FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
const DropDown = () => {
    return (
        <div className="dropdown">
            <div className="drawer lg:hidden mr-10 z-50">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn  bg-white">
                  <GiHamburgerMenu />
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 min-h-full bg-white text-base-content gap-2">
                  <div>
                    <h1 className="text-center text-lg uppercase">Menu</h1>
                    <span className="divider"></span>
                    <div className="flex gap-3 justify-center">
                      <h1>
                        <FaSearch></FaSearch>
                      </h1>
                      <h1>
                        <FaUser></FaUser>
                      </h1>
                    </div>
                  </div>
                  {/* Sidebar content here */}
                  <li>
                    <div className="flex justify-between">
                      <Link>Make Up</Link>
                      <h1>
                        <FaPlus></FaPlus>
                      </h1>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <Link>Skin</Link>
                      <h1>
                        <FaPlus></FaPlus>
                      </h1>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <Link>Hair</Link>
                      <h1>
                        <FaPlus></FaPlus>
                      </h1>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <Link>Personal Care</Link>
                      <h1>
                        <FaPlus></FaPlus>
                      </h1>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <Link>Mom & Baby</Link>
                      <h1>
                        <FaPlus></FaPlus>
                      </h1>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <Link>Fragrance</Link>
                      <h1>
                        <FaPlus></FaPlus>
                      </h1>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <Link>Undergarments</Link>
                      <h1>
                        <FaPlus></FaPlus>
                      </h1>
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
                      <h1>
                        <FaPlus></FaPlus>
                      </h1>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    );
};

export default DropDown;