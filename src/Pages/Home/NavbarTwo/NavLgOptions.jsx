import React from 'react';
import { Link } from 'react-router-dom';

const NavLgOptions = () => {
    return (
        <div>
             
             <div className='flex gap-6 pb-3 items-center justify-center'>
        <Link>MakeUp</Link>
        <Link>Skin</Link>
        <Link>Here</Link>
        <Link>Personal Care</Link>
        <Link>Mom & baby</Link>
        <Link>Fragrance</Link>
        <Link><button className='btn text-white bg-[rgb(34,92,228)] btn-xs sm:btn-sm md:btn-sm lg:btn-sm uppercase'>Under Garments</button></Link>
        <Link><button className='btn text-white bg-[rgb(231,38,80)] btn-xs sm:btn-sm md:btn-sm lg:btn-sm uppercase'>Combo</button></Link>

        <Link><button className='btn text-white bg-[rgb(176,71,201)]  btn-xs sm:btn-sm md:btn-sm lg:btn-sm uppercase'>Buy 1 Get 1</button></Link>

        <Link><button className='btn text-white bg-[rgb(9,181,181)]  btn-xs sm:btn-sm md:btn-sm lg:btn-sm uppercase'>Clearance Sale</button></Link>

        <Link><button className='btn text-white bg-[rgb(9,181,102)] btn-xs sm:btn-sm md:btn-sm lg:btn-sm uppercase'>Men</button></Link>
            
            </div>
           
        </div>
    );
};

export default NavLgOptions;