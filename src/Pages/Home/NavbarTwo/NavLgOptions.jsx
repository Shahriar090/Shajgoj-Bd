import React from 'react';
import { Link } from 'react-router-dom';

const NavLgOptions = () => {
    return (
        <div>
             {/* text-sm text-[#222] */}
             <div className='flex gap-6 pb-3 items-center justify-center'>
        <Link className='text-sm text-[#222]'>MakeUp</Link>
        <Link className='text-sm text-[#222]'>Skin</Link>
        <Link className='text-sm text-[#222]'>Here</Link>
        <Link className='text-sm text-[#222]'>Personal Care</Link>
        <Link className='text-sm text-[#222]'>Mom & baby</Link>
        <Link className='text-sm text-[#222]'>Fragrance</Link>
        <Link><button className='btn text-white bg-[rgb(34,92,228)] btn-xs sm:btn-sm md:btn-sm lg:btn-sm uppercase rounded-full'>Under Garments</button></Link>
        <Link><button className='btn text-white bg-[rgb(231,38,80)] btn-xs sm:btn-sm md:btn-sm lg:btn-sm uppercase rounded-full'>Combo</button></Link>

        <Link><button className='btn text-white bg-[rgb(176,71,201)]  btn-xs sm:btn-sm md:btn-sm lg:btn-sm uppercase rounded-full'>Buy 1 Get 1</button></Link>

        <Link><button className='btn text-white bg-[rgb(9,181,181)]  btn-xs sm:btn-sm md:btn-sm lg:btn-sm uppercase rounded-full'>Clearance Sale</button></Link>

        <Link><button className='btn text-white bg-[rgb(9,181,102)] btn-xs sm:btn-sm md:btn-sm lg:btn-sm uppercase rounded-full'>Men</button></Link>
            
            </div>
           
        </div>
    );
};

export default NavLgOptions;