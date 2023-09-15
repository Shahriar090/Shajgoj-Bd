import React from 'react';
import { Link } from 'react-router-dom';

const NavLgOptions = () => {
    return (
        <div>
             
             <div>
        <ul className='flex gap-6 pb-3 items-center justify-center'>
        <li> <Link className='makeup-dropdown-wrapper text-sm text-[#222]'>
        {/* mega dropdown for makeup here */}
            <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="">Makeup</label>
             <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 w-auto mt-3 mx-auto">
           <div className="mega-dropdown-parent flex gap-5">
            <div className="face w-60 pl-2 uppercase">
            <h1 className='font-bold text-black uppercase'>Face</h1>
            <div className='flex flex-col gap-1'>
            <Link>Face Primer</Link>
            <Link>Concealer</Link>
            <Link>Foundation</Link>
            <Link>Compact & Pressed Powder</Link>
            <Link>Contour</Link>
            <Link>Loose Powder</Link>
            <Link>Blush</Link>
            <Link>Bronzer</Link>
            <Link>Tinted Moisturizer</Link>
            <Link>Highlighters</Link>
            <Link>Makeup Remover</Link>
            <Link>Setting Spray</Link>
            <Link>Face Pallete</Link>
            </div>
            </div>

            <div className="eyes w-60 pl-2 bg-gray-100 uppercase">
            <h1 className='font-bold text-black uppercase'>Eyes</h1>
            <div className='flex flex-col gap-2'>
            <Link>Kajal</Link>
            <Link>Eyeliner</Link>
            <Link>Mascara</Link>
            <Link>Eye Shadow</Link>
            <Link>Eye Brow Enhancers</Link>
            <Link>Eye Primer</Link>
            <Link>False Eyelashes</Link>
            <Link>Eye Makeup Remover</Link>
            <Link>Under Eye Concealer</Link>
            </div>
            </div>

            <div className="lips w-52 uppercase pl-2">
            <h1 className='font-bold text-black uppercase'>Lips</h1>
            <div className='flex flex-col gap-2'>
            <Link>Lipstick</Link>
            <Link>Liquid Lipsticks</Link>
            <Link>Lip Crayon</Link>
            <Link>Lip Gloss</Link>
            <Link>Lip Liner</Link>
            <Link>Lip Plumper</Link>
            <Link>Lip Stain</Link>
            <Link>Lip Balm</Link>
            <Link>Lip Exfoliatorr</Link>
            </div>
            </div>

            <div className="nails w-52 pl-2 uppercase bg-gray-100">
            <h1 className='font-bold text-black uppercase'>Nails</h1>
            <div className='flex flex-col gap-2'>
            <Link>Nail Polish</Link>
            <Link>Nail Art Kits</Link>
            <Link>Nail Polish Sets</Link>
            <Link>Nail Care</Link>
            <Link>Nail Polish Remover</Link>
            <Link>Manicure & Pedicure Kits</Link>
            </div>
            </div>

            <div className="tools-and-brushes w-52 pl-2 uppercase">
            <h1 className='font-bold text-black uppercase'>Tools & Brushes</h1>
            <div className='flex flex-col gap-2'>
            <Link>Face Brush</Link>
            <Link>Blush Brush</Link>
            <Link>Eye Brush</Link>
            <Link>Lip Brush</Link>
            <Link>Brush Sets</Link>
            <Link>Eyelash Curlers</Link>
            <Link>Sponges & Applicators</Link>
            <Link>Sponges & Applicators</Link>
            <Link>Tweezers</Link>
            <Link>Sharpeners</Link>
            <Link>Mirrors</Link>

            <h1 className='font-bold text-black uppercase'>Makeup Kits</h1>
            </div>
            </div>

            <div className="top-brands pl-2 bg-gray-100 uppercase w-100%">
            <h1 className='font-bold text-black uppercase'>Top Brands</h1>
            <div className='flex flex-col gap-2'>
            <Link>Wet n wild</Link>
            <Link>Technic</Link>
            <Link>W7</Link>
            <Link>Flormar</Link>
            <Link>Rimmel</Link>
            <Link>L’Oreal</Link>
            <Link>Milani</Link>
            <Link>Revlonl</Link>
            <Link>M.A.C</Link>
            </div>
            </div>
           </div>

    </ul>
    {/* mega dropdown of makeup section end here */}
    </div>

        </Link>
       
        </li>
        <li><Link className='text-sm text-[#222]'>Skin</Link></li>
        <li> <Link className='text-sm text-[#222]'>Here</Link></li>
        <li> <Link className='text-sm text-[#222]'>Personal Care</Link></li>
        <li><Link className='text-sm text-[#222]'>Mom & baby</Link></li>
        <li><Link className='text-sm text-[#222]'>Fragrance</Link></li>
        
        <li> <Link><button className='btn text-white bg-[rgb(34,92,228)] btn-xs sm:btn-sm md:btn-sm lg:btn-sm uppercase rounded-full hover:bg-[rgb(34,92,228)]'>Under Garments</button></Link></li>

        <li> <Link><button className='btn text-white bg-[rgb(231,38,80)] btn-xs sm:btn-sm md:btn-sm lg:btn-sm uppercase rounded-full hover:bg-[rgb(231,38,80)]'>Combo</button></Link></li>

        <li><Link><button className='btn text-white bg-[rgb(176,71,201)]  btn-xs sm:btn-sm md:btn-sm lg:btn-sm uppercase rounded-full hover:bg-[rgb(176,71,201)]'>Buy 1 Get 1</button></Link></li>

        <li><Link><button className='btn text-white bg-[rgb(9,181,181)]  btn-xs sm:btn-sm md:btn-sm lg:btn-sm uppercase rounded-full hover:bg-[rgb(9,181,181)]'>Clearance Sale</button></Link></li>

        <li> <Link><button className='btn text-white bg-[rgb(9,181,102)] btn-xs sm:btn-sm md:btn-sm lg:btn-sm uppercase rounded-full hover:bg-[rgb(9,181,102)]'>Men</button></Link></li>
        </ul>
            
            </div>
           
        </div>
    );
};

export default NavLgOptions;