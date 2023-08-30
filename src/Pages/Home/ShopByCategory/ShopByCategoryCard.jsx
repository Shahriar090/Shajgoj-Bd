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
    <div className="">
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
