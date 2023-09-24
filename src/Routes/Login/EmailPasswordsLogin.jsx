import React from 'react';

const EmailPasswordsLogin = () => {
    return (
        <div>
           <section className='container w-full h-auto max-w-screen-md mx-auto mt-20 mb-20 items-center justify-center px-12'>
            <h1 className='text-4xl mb-5 text-[#222222]'>Login</h1>
            <div className="input-field">
                <p>Username Or Email Address<span>*</span></p>
                <input type="text" name='email' placeholder='' className='border-2 w-80 px-3 md:w-full lg:w-full max-w-full h-10' />
                {/* password */}
                <p>Password<span>*</span></p>
                <input type="password" name='password' placeholder='' className='border-2 w-80 px-3 md:w-full lg:w-full max-w-full h-10' />
                
            </div>
            {/* checkbox and login button */}
            <div className='flex justify-between'>
            <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Remember me</span> 
            </label>
            <div className="">
            <button className='btn btn-sm px-5 mt-8 bg-[#ff3d71] text-white uppercase hover:bg-[#ff3d71] '>Log in</button>
            </div>
            </div>
           </section>
        </div>
    );
};

export default EmailPasswordsLogin;