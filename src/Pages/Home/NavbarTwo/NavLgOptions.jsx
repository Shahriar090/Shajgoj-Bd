import React from "react";
import { Link } from "react-router-dom";

const NavLgOptions = () => {
  return (
    <div>
      <div className="flex gap-5 items-center justify-center">
        <div className="group relative">
        <Link className=" text-xs text-[#222]">Makeup</Link>

        <div className="hidden group-hover:block absolute z-10 top-full left-0 bg-white shadow-lg py-2 px-4 mt-3">
            <div className="makeup-items-parent-container flex gap-10">
            <div className="face-item-container p-2">
            <ul>
                <h1 className="font-bold uppercase">FACE</h1>
                <li><Link>Face Primer</Link></li>
                <li><Link>Concealer</Link></li>
                <li><Link>Foundation</Link></li>
                <li><Link>Compact & Pressed Powder</Link></li>
                <li><Link>Contour</Link></li>
                <li><Link>Loose Powder</Link></li>
                <li><Link>Blush</Link></li>
                <li><Link>Bronzer</Link></li>
                <li><Link>Tinted Moisturizer</Link></li>
                <li><Link>BB & CC cream</Link></li>
                <li><Link>Highlighters</Link></li>
                <li><Link>Makeup Remover</Link></li>
                <li><Link>Setting Spray</Link></li>
                <li><Link>Face Pallete</Link></li>
            </ul>
            </div>

                {/* eyes items */}
            <div className="eyes-item-container bg-gray-100 w-48 p-2">
            <ul>
                <h1 className="font-bold uppercase">EYES</h1>
                <li><Link>Kajal</Link></li>
                <li><Link>Eyeliner</Link></li>
                <li><Link>Mascara</Link></li>
                <li><Link>Eye Shadow</Link></li>
                <li><Link>Eye Brow Enhancers</Link></li>
                <li><Link>Eye Primer</Link></li>
                <li><Link>False Eyelashes</Link></li>
                <li><Link>Eye Makeup Remover</Link></li>
                <li><Link>Under Eye Concealer</Link></li>
            </ul>
            </div>

            {/* lips items */}

            <div className="lips-item-container">
            <ul>
                <h1 className="font-bold uppercase">LIPS</h1>
                <li><Link>Lipstick</Link></li>
                <li><Link>Liquid Lipsticks</Link></li>
                <li><Link>Lip Crayon</Link></li>
                <li><Link>Lip Gloss</Link></li>
                <li><Link>Lip Liner</Link></li>
                <li><Link>Lip Plumper</Link></li>
                <li><Link>Lip Stain</Link></li>
                <li><Link>Lip Balm</Link></li>
                <li><Link>Lip Exfoliator</Link></li>
            </ul>
            </div>

            {/* nails items */}

            <div className="nails-item-container p-2 w-48 bg-gray-100">
            <ul>
                <h1 className="font-bold uppercase ">Nails</h1>
                <li><Link>Nail Polish</Link></li>
                <li><Link>Nail Art Kits</Link></li>
                <li><Link>Nail Polish Sets</Link></li>
                <li><Link>Nail Care</Link></li>
                <li><Link>Nail Polish Remover</Link></li>
                <li><Link>Manicure & Pedicure Kits</Link></li>
            </ul>
            </div>

            {/* tools & brushes items */}

            <div className="tools-and-brushes-container">
            <ul>
                <h1 className="font-bold uppercase">TOOLS & BRUSHES</h1>
                <li><Link>Face Brush</Link></li>
                <li><Link>Blush Brush</Link></li>
                <li><Link>Eye Brush</Link></li>
                <li><Link>Lip Brush</Link></li>
                <li><Link>Brush Sets</Link></li>
                <li><Link>Eyelash Curlers</Link></li>
                <li><Link>Sponges & Applicators</Link></li>
                <li><Link>Tweezers</Link></li>
                <li><Link>Sharpeners</Link></li>
                <li><Link>Mirrors</Link></li>
                <li><Link>Makeup Pouches</Link></li>
            </ul>
            <h2 className="font-bold uppercase"><Link>Makeup Kits</Link></h2>
            </div>

            {/* top brands */}

            <div className="top-brands-container p-2 w-48 bg-gray-100">
            <ul>
                <h1 className="font-bold uppercase ">TOP BRANDS</h1>
                <li><Link>Wet n wild</Link></li>
                <li><Link>Technich</Link></li>
                <li><Link>W7</Link></li>
                <li><Link>Flormar</Link></li>
                <li><Link>Rimmel</Link></li>
                <li><Link>L’Oreal</Link></li>
                <li><Link>Milani</Link></li>
                <li><Link>Revlon</Link></li>
                <li><Link>M.A.C</Link></li>
            </ul>
            </div>
            </div>
        </div>
        </div>

        <Link className="text-xs text-[#222]">Skin</Link>
        <Link className="text-xs text-[#222]">Hair</Link>
        <Link className="text-xs text-[#222]">Personal Care</Link>
        <Link className="text-xs text-[#222]">Mom & baby</Link>
        <Link className="text-xs text-[#222]">Fragrance</Link>

        <Link>
          <button className="btn text-white bg-[rgb(34,92,228)] btn-xs  uppercase rounded-full hover:bg-[rgb(34,92,228)]">
            Under Garments
          </button>
        </Link>

        <Link>
          <button className="btn text-white bg-[rgb(231,38,80)] btn-xs  uppercase rounded-full hover:bg-[rgb(231,38,80)]">
            Combo
          </button>
        </Link>

        <Link>
          <button className="btn text-white bg-[rgb(176,71,201)]  btn-xs  uppercase rounded-full hover:bg-[rgb(176,71,201)]">
            Buy 1 Get 1
          </button>
        </Link>

        <Link>
          <button className="btn text-white bg-[rgb(9,181,181)]  btn-xs  uppercase rounded-full hover:bg-[rgb(9,181,181)]">
            Clearance Sale
          </button>
        </Link>

        <Link>
          <button className="btn text-white bg-[rgb(9,181,102)] btn-xs  uppercase rounded-full hover:bg-[rgb(9,181,102)]">
            Men
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavLgOptions;
