import React from 'react';

import sliderImgOne from '../../../assets/slider-1.png'
import sliderImgTwo from '../../../assets/slider-2.jpg'
import sliderImgThree from '../../../assets/slider-3.jpg'
import sliderImgFour from '../../../assets/slider-3.png'

const Slider = () => {
    return (
        <div>
            <div className='carousel w-full'>

                <div id='item1' className='carousel-item w-full'>

                    <img src={sliderImgOne} alt="Loading" className='w-full h-[250px] md:h-[600px] lg:h-[600px]'  />
                </div>
                <div id='item2' className='carousel-item w-full'>

                    <img src={sliderImgTwo} alt="Loading"  className='w-full h-[250px] md:h-[600px] lg:h-[600px]' />
                </div>
                <div id='item3' className='carousel-item w-full'>

                    <img src={sliderImgThree} alt="Loading" className='w-full h-[250px] md:h-[600px] lg:h-[600px]'/>
                </div>
                <div id='item4' className='carousel-item w-full'>

                    <img src={sliderImgFour} alt="Loading" className='w-full h-[250px] md:h-[600px] lg:h-[600px]' />
                </div>

            </div>
        </div>
    );
};

export default Slider;