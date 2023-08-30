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
    <div className="w-60 md:w-full lg:w-full mx-auto p-2 md:p-0 lg:p-0">
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
