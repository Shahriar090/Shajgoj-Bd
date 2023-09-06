import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../../Pages/Home/Footer/Footer';
import NavbarTwo from '../../Pages/Home/NavbarTwo/NavbarTwo';

const Main = () => {
    return (
        <div>

            <NavbarTwo></NavbarTwo>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;