import React from 'react';
import Slider from '../Slider/Slider';
import Deals from '../Deals/Deals';
import TopBrandsAndOffers from '../TopBrandsAndOffers/TopBrandsAndOffers';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Deals></Deals>
            <TopBrandsAndOffers></TopBrandsAndOffers>
        </div>
    );
};

export default Home;