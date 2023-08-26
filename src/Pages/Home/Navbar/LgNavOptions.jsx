import React from 'react';
import { Link } from 'react-router-dom';

const LgNavOptions = () => {
    return (
        <di>
            <div className='flex gap-6 text p-6 items-center justify-center'>
        <Link>MakeUp</Link>
        <Link>Skin</Link>
        <Link>Here</Link>
        <Link>Personal Care</Link>
        <Link>Mom & baby</Link>
        <Link>Fragrance</Link>
        <Link><button className='btn text-white btn-primary btn-xs sm:btn-sm md:btn-sm lg:btn-sm uppercase'>Under Garments</button></Link>
        <Link><button className='btn text-white btn-accent btn-xs sm:btn-sm md:btn-sm lg:btn-sm uppercase'>Combo</button></Link>

        <Link><button className='btn text-white btn-primary bg-purple-600  btn-xs sm:btn-sm md:btn-sm lg:btn-sm uppercase'>Buy 1 Get 1</button></Link>

        <Link><button className='btn text-white btn-primary bg-cyan-500  btn-xs sm:btn-sm md:btn-sm lg:btn-sm uppercase'>Clearance Sale</button></Link>

        <Link><button className='btn text-white btn-primary bg-green-600  btn-xs sm:btn-sm md:btn-sm lg:btn-sm uppercase'>Men</button></Link>
            
            </div>
        </di>
    );
};

export default LgNavOptions;