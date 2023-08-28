import React from "react";

const ShopByCategoryCard = ({ singleItem }) => {
  const {
    id,
    category,
    shopName,
    productName,
    productImg,
    productDiscount,
    price,
  } = singleItem;
  return (
    <div className="w-60 mx-auto p-8 md:p-0 lg:p-0">
      <figure>
        <img
          src={productImg}
          alt="Loading"
        />
      </figure>
     
    </div>
  );
};

export default ShopByCategoryCard;
