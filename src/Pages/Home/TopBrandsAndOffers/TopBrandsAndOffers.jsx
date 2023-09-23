import React, { useEffect, useState } from 'react';
import TopBrandsAndOffersCards from './TopBrandsAndOffersCards';

const TopBrandsAndOffers = () => {
    const [offers, setOffers] = useState([]);
    useEffect(()=>{
        fetch('topBrands.json')
        .then(res=>res.json())
        .then(data=>setOffers(data))
    },[])
    return (
        <div>
            <div>
            <h1 className="font-bold md:font-semibold uppercase text-center mt-16 mb-2 text-xs text-[#222222]">
        Top Brands & Offers
      </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto px-1 md:px-5 lg:px-5'>
                {
                    offers.map(offer=> <TopBrandsAndOffersCards
                    key={offer.id}
                    offer={offer}
                    ></TopBrandsAndOffersCards>)
                }
            </div>
        </div>
    );
};

export default TopBrandsAndOffers;