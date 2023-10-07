import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../../Pages/Home/Footer/Footer';
import NavbarTwo from '../../Pages/Home/NavbarTwo/NavbarTwo';

const Main = () => {
    return (
        <div>

            <NavbarTwo></NavbarTwo>
           <div className='bg-white pt-28 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0'>
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;