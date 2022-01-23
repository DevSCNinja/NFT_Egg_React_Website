import React from 'react';

import Slider from "react-slick";
import { AiOutlineArrowRight } from 'react-icons/ai';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderBackground from '../../../assets/img/home-slider-image-1.png';

const Homepage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <section className="banner-wrapper">
            <Slider {...settings} className="banner-slider">
                <div className="banner-slider-item">
                    <div className="slider-background"><img src={SliderBackground} width="100%" alt="Slider Background" /></div>
                    <div className="container mx-auto">
                        <div className="title-box">
                            <div>
                                <h5 className="text-white text-base md:text-2xl font-bold mb-2">The Battle Dubai</h5>
                                <p className="text-primary text-xs md:text-lg font-bold">2021-11-05 11:00 AM (UTC)</p>
                            </div>
                            <div>
                                <button className="rounded-full w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-primary text-block-black"><AiOutlineArrowRight size={19} /></button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="banner-slider-item">
                    <div className="slider-background"><img src={SliderBackground} width="100%" alt="Slider Background" /></div>
                    <div className="container mx-auto">
                        <div className="title-box">
                            <div>
                                <h5 className="text-white text-base md:text-2xl font-bold mb-2">The Battle Paris</h5>
                                <p className="text-primary text-xs md:text-lg font-bold">2021-12-05 11:00 AM (UTC)</p>
                            </div>
                            <div>
                                <button className="rounded-full w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-primary text-block-black"><AiOutlineArrowRight size={19} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    );
};
export default Homepage;
