import React from 'react';
import discountImg from '../../../assets/discount-banner.png'
import footerImg from '../../../assets/footer-banner.png'


const Discount = () => {
    return (
        <div>
            <div className="img max-w-screen-lg mx-auto px-0 md:px-5 lg:px-5 mt-20 mb-20">
                <img src={discountImg} alt="" />
            </div>
            <div className="footer-banner bg-purple-900 h-auto w-100%">
                <img src={footerImg} alt="" className='mx-auto' />
            </div>
        </div>
    );
};

export default Discount;