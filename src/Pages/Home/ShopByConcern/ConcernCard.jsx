import React from 'react';

const ConcernCard = ({data}) => {
    const {id, image, price, problem, solution, description} = data;

    return (
        <div className="">
      <figure>
        <img
          src={image}
          alt="Loading"
        />
      </figure>
     
    </div>
    );
};

export default ConcernCard;