import React, { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Link } from 'react-router-dom';

const Login = () => {
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    return (
        <div>
            <section>
                <div className='container w-full h-auto max-w-screen-sm mx-auto mt-20 mb-20 items-center justify-center px-5'>

                    <h1 className='text-4xl mb-5 text-[#222222]'>Login</h1>
                   <h4>Phone<span className='text-[#ff3d71]'>*</span></h4><br />
                   {/* input field for login */}
                    <input type="text"  placeholder='Phone' className='border-2 w-80 px-3 md:w-96 lg:w-96 max-w-full h-10 ' />
                   <div className="captcha mt-3">
                     {/* captcha */}
                
                   
                   {/* input field for captcha */}
                   <h4>Captcha</h4>
                   <input type="text"  placeholder='Type The Captcha Above' className='border-2 w-80 px-3 md:w-96 lg:w-96 max-w-full h-10 ' />
                    {/* captcha */}
                    
                    <LoadCanvasTemplate />
                    
                   </div>
                    {/* login with otp */}
                    <button className='btn btn-sm px-5 mt-8 bg-[#ff3d71] text-white uppercase hover:bg-[#ff3d71]'>Login With Otp</button>
                    <br />
                    <span className='flex justify-center mt-3'>OR</span>

                    <Link className='uppercase underline font-bold text-xs flex justify-center mt-2'>
                    Login with email & password</Link>
                </div>
            </section>
        </div>
    );
};

export default Login;