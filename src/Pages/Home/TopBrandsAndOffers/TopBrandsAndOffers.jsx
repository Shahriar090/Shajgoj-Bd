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
            <h1 className="font-bold uppercase text-center mt-5 mb-5">
        Top Brands & Offers
      </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto p-5 '>
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