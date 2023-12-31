import React from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import paymentPic from '../../../assets/payment-pic.png'

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 justify-center items-center bg-[#192038] text-neutral-content">
        <div className="flex flex-col md:flex-row lg:flex-row">
        
          
        <div className="parent flex flex-col md:flex-row lg:flex-row gap-12">
        <div className="uppercase mt-5 space-y-2 ">
       <div className="pb-5">
       <img src="https://shop.shajgoj.com/wp-content/themes/Shajgoj/assets/images/logov2L.png" alt="Loading" className="w-52" />
       </div>
            <p>Our Story?</p>
            <p>Shajgoj Outlets</p>
            <p>Join Out Team</p>
            <p className="border-b-2">Authenticity</p>
            <p>Share Your Love</p>
            <div className="logo-container">
                <div className="logos flex gap-2 text-xl">
                    <h1><FaFacebook></FaFacebook></h1>
                    <h1><FaYoutube></FaYoutube></h1>
                    <h1><FaInstagram></FaInstagram></h1>
                    <h1><FaPinterest></FaPinterest></h1>
                </div>
            </div>
            
        </div>
        <div className="details patent flex flex-col md:flex-row lg:flex-row gap-20 pt-3">
            <div className="uppercase space-y-2">
                <h1 className="text-[#ff3d71] text-lg mb-5">Top Categories</h1>
                <p>Makeup</p>
                <p>Skin</p>
                <p>Eye Care</p>
                <p>Hair</p>
                <p>Personal Care</p>
                <p>Nature</p>
                <p>Mom & Baby</p>
            </div>

            <div  className="uppercase space-y-2">
                <h1 className="text-[#ff3d71] text-lg mb-5">Quick Lines</h1>
                <p>Offers</p>
                <p>Mens Products</p>
                <p>Skin Concerns</p>
                <p>New Arrival</p>
                <p>MakeUp</p>

            </div>
            <div className="uppercase space-y-2">
                <h1 className="text-[#ff3d71] text-lg mb-5">All About Beauty</h1>
                <p>Know Your Routine</p>
                <p>Hair Care 101</p>
                <p>Skin Care 101</p>
                <p>Makeup 101</p>
            </div>

            <div className="uppercase space-y-2">
                <h1 className="text-[#ff3d71] text-lg mb-5">Help</h1>
                <p>Contact Us</p>
                <p>Points</p>
                <p>Faqs</p>
                <p>Shipping & Delivery</p>
                <p>Terms & Conditions</p>
                <p>Refund & Return Policy</p>
                <p>Trade Licenses</p>
                <p className="border-b-2">Privacy Policy</p>
                <p>Payment Accepted</p>
                <div className="payment-systems flex gap-2">
                   <img src={paymentPic} alt="" />
                </div>
            </div>
        </div>
        </div>
        
        
        </div>
        
       
      
      </footer>
      <div className="footer footer-center p-4 bg-[#192038] text-white border-2 md:border-0 lg:border-0">
        <div>
    
            <div className="uppercase space-x-5">
                <Link>Authenticity</Link>
                <Link>Terms & Conditions</Link>
                <Link>Privacy Policy</Link>
                <Link>Refund & Return Policy</Link>
                <Link>Faqs</Link>
            </div>
          <p>Copyright © 2020 Shajgoj Limited. All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
