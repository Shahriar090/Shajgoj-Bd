import React from 'react';
import Slider from '../Slider/Slider';
import Deals from '../Deals/Deals';
import TopBrandsAndOffers from '../TopBrandsAndOffers/TopBrandsAndOffers';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Deals></Deals>
            <TopBrandsAndOffers></TopBrandsAndOffers>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;