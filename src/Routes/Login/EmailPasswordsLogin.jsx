import React from 'react';
import { Link } from 'react-router-dom';

const EmailPasswordsLogin = () => {
    return (
        <div>
           <section className='container w-full h-auto max-w-screen-md mx-auto  mb-20 pt-28  px-12'>
            <h1 className='text-4xl mb-5 text-[#222]'>Login</h1>
            <div className="input-field">
                <p className='font-extralight mb-2'>Username Or Email Address <span className='text-[#ff3d71]'>*</span></p>
                <input type="text" name='email' placeholder='' className='border-2 w-80 px-3 md:w-full lg:w-full max-w-full h-10 mb-6' />
                {/* password */}
                <p className='font-extralight mb-2'>Password <span className='text-[#ff3d71]'>*</span></p>
                <input type="password" name='password' placeholder='' className='border-2 w-80 px-3 md:w-full lg:w-full max-w-full h-10' />
                
            </div>
            {/* checkbox and login button */}
            <div className='flex justify-between'>
            <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text font-extralight ml-1">Remember me</span> 
            </label>
            <div className="">
            <button className='btn btn-sm px-5 mt-8 bg-[#ff3d71] text-white uppercase hover:bg-[#ff3d71] '>Log in</button>
            </div>
            </div>
            <div>
                <Link className='text-[#008eff] font-extralight flex justify-center mt-5'>Lost Your Password? | Register With Email</Link> 
                <span className='flex justify-center font-extralight mt-2 mb-2'>OR</span>
                <Link to='/login' className='flex justify-center underline text-sm'>Login With Otp</Link>
            </div>
           </section>
        </div>
    );
};

export default EmailPasswordsLogin;