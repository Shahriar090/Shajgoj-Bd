import React from 'react';
import Slider from '../Slider/Slider';
import Deals from '../Deals/Deals';
import TopBrandsAndOffers from '../TopBrandsAndOffers/TopBrandsAndOffers';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import ShopByConcern from '../ShopByConcern/ShopByConcern';
import Discount from '../Discount/Discount';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Deals></Deals>
            <TopBrandsAndOffers></TopBrandsAndOffers>
            <ShopByCategory></ShopByCategory>
            <ShopByConcern></ShopByConcern>
            <Discount></Discount>
        </div>
    );
};

export default Home;