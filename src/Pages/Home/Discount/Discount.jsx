import React from 'react';
import discountImg from '../../../assets/discount-banner.png'
import footerImg from '../../../assets/footer-banner.png'


const Discount = () => {
    return (
        <div>
            <div className="img max-w-screen-xl mx-auto p-5">
                <img src={discountImg} alt="" />
            </div>
            <div className="footer-banner bg-purple-900 h-auto max-w-100%">
                <img src={footerImg} alt="" />
            </div>
        </div>
    );
};

export default Discount;