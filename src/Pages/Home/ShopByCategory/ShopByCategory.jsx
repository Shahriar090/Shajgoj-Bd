import React, { useEffect, useState } from 'react';
import ShopByCategoryCard from './ShopByCategoryCard';

const ShopByCategory = () => {
    const [Categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('category.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <>
            <h1 className="font-bold uppercase text-center mt-5 mb-5">
        Shop Beauty Products By Categories
      </h1>
            </>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-0 md:gap-3 lg:gap-3 max-w-screen-xl mx-auto'>
                {
                    Categories.map(singleItem => <ShopByCategoryCard
                    key={singleItem.id}
                    singleItem={singleItem}
                    ></ShopByCategoryCard>)
                }
            </div>
            
        </div>
    );
};

export default ShopByCategory;