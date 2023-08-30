import React from 'react';

const TopBrandsAndOffersCards = ({offer}) => {
    const {id, shopName, productName, productImg,productDiscount, price} = offer;

    return (
        <div>
           <div className="">
            <figure><img src={productImg} alt="Shoes" /></figure>
  
        </div>
        </div>
    );
};

export default TopBrandsAndOffersCards;