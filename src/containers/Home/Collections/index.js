import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Collections = () => {
    const sliderRef = useRef(null);

    const sliderPrev = () => {
        sliderRef.current.slickPrev();
    }

    const sliderNext = () => {
        sliderRef.current.slickNext();
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
              }
            },
        ]
    }
    return (
        <section className="collections-wrapper py-12">
            <div className="container mx-auto">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-white font-bold text-2xl md:text-4xl">Recommended Collections</h2>
                    <div className="flex items-center">
                        <NavLink to="#" className="text-blue font-bold mr-8 hidden md:block">View all collections</NavLink>
                        <div className="flex items-center">
                            <button className="w-6 h-6 flex items-center justify-center mx-2 bg-gray rounded-full text-white text-opacity-50" onClick={sliderPrev}><MdKeyboardArrowLeft size={16} /></button>
                            <button className="w-6 h-6 flex items-center justify-center mx-2 bg-gray rounded-full text-white text-opacity-50" onClick={sliderNext}><MdKeyboardArrowRight size={16} /></button>
                        </div>
                    </div>
                </div>
                <Slider ref={sliderRef} {...settings} className="md:-mx-4">
                    <div className="slider-item px-4">
                        <div className="rounded-lg bg-block-black box-shadow">
                            <div><img src="./assets/img/demo/demo5.png" className="rounded-t-lg w-full" width="442" height="244" alt="Demo5" /></div>
                            <div className="p-8 flex items-center">
                                <img src="./assets/img/avatars/avatar.png" className="h-12 w-12 md:w-14 md:h-14 rounded-full mr-4" width="60" height="60" alt="Avatar" />
                                <div>
                                    <h5 className="text-lg text-white font-bold mb-1">Name of collection</h5>
                                    <p className="text-white text-opacity-50 text-sm">by <span className="text-primary font-semibold">thebattledubai</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="slider-item px-4">
                        <div className="rounded-lg bg-block-black box-shadow">
                            <div><img src="./assets/img/demo/demo6.png" className="rounded-t-lg w-full" width="442" height="244" alt="Demo6" /></div>
                            <div className="p-8 flex items-center">
                                <img src="./assets/img/avatars/avatar.png" className="h-12 w-12 md:w-14 md:h-14 rounded-full mr-4" width="60" height="60" alt="Avatar" />
                                <div>
                                    <h5 className="text-lg text-white font-bold mb-1">Name of collection</h5>
                                    <p className="text-white text-opacity-50 text-sm">by <span className="text-primary font-semibold">thebattledubai</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="slider-item px-4">
                        <div className="rounded-lg bg-block-black box-shadow">
                            <div><img src="./assets/img/demo/demo7.png" className="rounded-t-lg w-full" width="442" height="244" alt="Demo7" /></div>
                            <div className="p-8 flex items-center">
                                <img src="./assets/img/avatars/avatar.png" className="h-12 w-12 md:w-14 md:h-14 rounded-full mr-4" width="60" height="60" alt="Avatar" />
                                <div>
                                    <h5 className="text-lg text-white font-bold mb-1">Name of collection</h5>
                                    <p className="text-white text-opacity-50 text-sm">by <span className="text-primary font-semibold">thebattledubai</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="slider-item px-4">
                        <div className="rounded-lg bg-block-black box-shadow">
                            <div><img src="./assets/img/demo/demo5.png" className="rounded-t-lg w-full" width="442" height="244" alt="Demo5" /></div>
                            <div className="p-8 flex items-center">
                                <img src="./assets/img/avatars/avatar.png" className="h-12 w-12 md:w-14 md:h-14 rounded-full mr-4" width="60" height="60" alt="Avatar" />
                                <div>
                                    <h5 className="text-lg text-white font-bold mb-1">Name of collection</h5>
                                    <p className="text-white text-opacity-50 text-sm">by <span className="text-primary font-semibold">thebattledubai</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};
export default Collections;
