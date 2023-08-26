import React from 'react';

const TopBrandsAndOffersCards = ({offer}) => {
    const {id, shopName, productName, productImg,productDiscount, price} = offer;

    return (
        <div>
           <div className="w-96 mx-auto">
            <figure><img src={productImg} alt="Shoes" /></figure>
  
        </div>
        </div>
    );
};

export default TopBrandsAndOffersCards;