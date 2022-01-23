import React, { useRef } from 'react';

import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingCreators = () => {
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
        slidesToShow: 4,
        slidesToScroll: 1,
        arrow: false,
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
              settings: "unslick"
            },
        ]
    }
    return (
        <section className="hottest-nfts-wrapper py-12">
            <div className="container mx-auto">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="flex items-center text-white font-bold text-2xl md:text-4xl"><img src="./assets/img/emoji.png" className="mr-3" alt="Emoj" />Hottest NFT</h2>
                    <button className="md:hidden px-4 py-2 text-white font-semibold bg-block-black rounded-xl">See all</button>
                    <div className="hidden md:flex items-center">
                        <button className="w-6 h-6 flex items-center justify-center mx-2 bg-gray rounded-full text-white text-opacity-50" onClick={sliderPrev}><MdKeyboardArrowLeft size={16} /></button>
                        <button className="w-6 h-6 flex items-center justify-center mx-2 bg-gray rounded-full text-white text-opacity-50" onClick={sliderNext}><MdKeyboardArrowRight size={16} /></button>
                    </div>
                </div>
                <Slider ref={sliderRef} {...settings} className="md:-mx-4">
                    <div className="px-4 md:mb-0 mb-5">
                        <div className="rounded-lg bg-block-black box-shadow">
                            <div><img src="./assets/img/demo/demo8.png" className="rounded-t-lg w-full" width="100%" height="244" alt="Demo8" /></div>
                            <div className="p-8">
                                <div className="mb-2.5">
                                    <h5 className="text-lg text-white font-bold mb-1">Name of collection</h5>
                                    <p className="text-white text-opacity-50 text-sm">by <span className="text-primary font-semibold">thebattledubai</span></p>
                                </div>
                                <div className="text-right mb-4">
                                    <p className="text-white text-lg text-bold">$13,999,999</p>
                                    <p className="text-sm text-white">≈0.02 ETH</p>
                                </div>
                                <button className="w-full py-1.5 text-white font-medium text-center rounded-lg bg-btn-black">Buy now</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="px-4 md:mb-0 mb-5">
                        <div className="rounded-lg bg-block-black box-shadow">
                            <div><img src="./assets/img/demo/demo8.png" className="rounded-t-lg w-full" width="100%" height="244" alt="Demo8" /></div>
                            <div className="p-8">
                                <div className="mb-2.5">
                                    <h5 className="text-lg text-white font-bold mb-1">Name of collection</h5>
                                    <p className="text-white text-opacity-50 text-sm">by <span className="text-primary font-semibold">thebattledubai</span></p>
                                </div>
                                <div className="text-right mb-4">
                                    <p className="text-white text-lg text-bold">$13,999,999</p>
                                    <p className="text-sm text-white">≈0.02 ETH</p>
                                </div>
                                <button className="w-full py-1.5 text-white font-medium text-center rounded-lg bg-btn-black">Buy now</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="px-4 md:mb-0 mb-5">
                        <div className="rounded-lg bg-block-black box-shadow">
                            <div><img src="./assets/img/demo/demo9.png" className="rounded-t-lg w-full" width="100%" height="244" alt="Demo9" /></div>
                            <div className="p-8">
                                <div className="mb-2.5">
                                    <h5 className="text-lg text-white font-bold mb-1">Name of collection</h5>
                                    <p className="text-white text-opacity-50 text-sm">by <span className="text-primary font-semibold">thebattledubai</span></p>
                                </div>
                                <div className="text-right mb-4">
                                    <p className="text-white text-lg text-bold">$13,999,999</p>
                                    <p className="text-sm text-white">≈0.02 ETH</p>
                                </div>
                                <button className="w-full py-1.5 text-white font-medium text-center rounded-lg bg-btn-black">Buy now</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="px-4 md:mb-0 mb-5">
                        <div className="rounded-lg bg-block-black box-shadow">
                            <div><img src="./assets/img/demo/demo10.png" className="rounded-t-lg w-full" width="100%" height="244" alt="Demo10" /></div>
                            <div className="p-8">
                                <div className="mb-2.5">
                                    <h5 className="text-lg text-white font-bold mb-1">Name of collection</h5>
                                    <p className="text-white text-opacity-50 text-sm">by <span className="text-primary font-semibold">thebattledubai</span></p>
                                </div>
                                <div className="text-right mb-4">
                                    <p className="text-white text-lg text-bold">$13,999,999</p>
                                    <p className="text-sm text-white">≈0.02 ETH</p>
                                </div>
                                <button className="w-full py-1.5 text-white font-medium text-center rounded-lg bg-btn-black">Buy now</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="px-4 md:mb-0 mb-5">
                        <div className="rounded-lg bg-block-black box-shadow">
                            <div><img src="./assets/img/demo/demo11.png" className="rounded-t-lg w-full" width="100%" height="244" alt="Demo11" /></div>
                            <div className="p-8">
                                <div className="mb-2.5">
                                    <h5 className="text-lg text-white font-bold mb-1">Name of collection</h5>
                                    <p className="text-white text-opacity-50 text-sm">by <span className="text-primary font-semibold">thebattledubai</span></p>
                                </div>
                                <div className="text-right mb-4">
                                    <p className="text-white text-lg text-bold">$13,999,999</p>
                                    <p className="text-sm text-white">≈0.02 ETH</p>
                                </div>
                                <button className="w-full py-1.5 text-white font-medium text-center rounded-lg bg-btn-black">Buy now</button>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};
export default TrendingCreators;
