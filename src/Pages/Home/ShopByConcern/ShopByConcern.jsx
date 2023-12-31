import React, { useEffect, useState } from 'react';
import ConcernCard from './ConcernCard';

const ShopByConcern = () => {
    const [concerns, setConcern] = useState([])
    useEffect(()=>{
        fetch('concern.json')
        .then(res=>res.json())
        .then(data=>setConcern(data))
    },[])
    return (
        <div>
            <div className="heading">
            <h1 className="font-semibold uppercase text-center mt-5 mb-1 text-xs text-[#222222]">
        Shop By Concern
      </h1>
            </div>

            <main>
                <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 max-w-screen-lg mx-auto gap-2 px-1 md:px-5 lg:px-5'>
                    {
                        concerns.map(data => <ConcernCard
                        key={data.id}
                        data={data}
                        ></ConcernCard>)
                    }
                </div>
            </main>
        </div>
    );
};

export default ShopByConcern;