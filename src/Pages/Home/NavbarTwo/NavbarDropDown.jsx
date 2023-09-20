import React from 'react';
import { CgMenuLeftAlt } from 'react-icons/cg';
import { FaPlus,FaRegUserCircle } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { HiOutlineSearch, } from "react-icons/hi";
import { BsPlus, } from "react-icons/bs";

const NavbarDropDown = () => {
    return (
        <div className="dropdown">
              <div className="drawer lg:hidden z-50">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label
                    htmlFor="my-drawer"
                    className="btn btn-outline border-0 drawer-button"
                  >
                    <h1 className="text-2xl">
                      <CgMenuLeftAlt></CgMenuLeftAlt>
                    </h1>
                  </label>
                </div>
                <div className="drawer-side">
                  <label htmlFor="my-drawer" className="drawer-overlay"></label>
                  <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
                  <div>
              {/* <h1 className="text-center text-lg uppercase">Menu</h1> */}
              <div className="flex justify-between">
                <div className="heading mx-auto">
                  <h1 className="uppercase text-lg">Menu</h1>
                </div>
                <div className="icon">
                 <h1 className="text-xl text-[#ff3d71]"><RxCross1></RxCross1></h1>
                </div>
              </div>
              <span className="divider"></span>
              <div className="flex gap-3 justify-center">
                <h1 className='text-lg'>
                  <HiOutlineSearch></HiOutlineSearch>
                </h1>
                <h1 className='text-lg'>
                  <FaRegUserCircle></FaRegUserCircle>
                </h1>
              </div>
            </div>
                    {/* Sidebar content here */}
                    <li>
              <div className="flex justify-between">
                <Link>Make Up</Link>
                <h1 className='text-lg'>
                  <BsPlus></BsPlus>
                </h1>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <Link>Skin</Link>
                <h1 className='text-lg'>
                <BsPlus></BsPlus>
                </h1>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <Link>Hair</Link>
                <h1 className='text-lg'>
                <BsPlus></BsPlus>
                </h1>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <Link>Personal Care</Link>
                <h1 className='text-lg'>
                <BsPlus></BsPlus>
                </h1>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <Link>Mom & Baby</Link>
                <h1 className='text-lg'>
                <BsPlus></BsPlus>
                </h1>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <Link>Fragrance</Link>
                <h1 className='text-lg'>
                <BsPlus></BsPlus>
                </h1>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <Link>Undergarments</Link>
                <h1 className='text-lg'>
                <BsPlus></BsPlus>
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
                <h1 className='text-lg'>
                <BsPlus></BsPlus>
                </h1>
              </div>
            </li>
                  </ul>
                </div>
              </div>
            </div>
    );
};

export default NavbarDropDown;