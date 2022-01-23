import React from 'react';

import { NavLink } from 'react-router-dom';

import { AiOutlineTwitter } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-secondary">
            <div className="container mx-auto">
                <div className="flex items-center justify-center mb-20 sm:flex-nowrap flex-wrap">
                    <NavLink to="/faq" className="uppercasefont-londrina-black bg-transparent rounded-full w-60 text-center p-2 border-4 border-white hover:border-opacity-70 font-bold text-white text-2xl mx-5 sm:mb-0 mb-3">
                        FAQS
                    </NavLink>
                    <button className="font-londrina-black bg-transparent rounded-full w-60 text-center p-2 border-4 border-white hover:border-opacity-70 font-bold text-white text-2xl mx-5 uppercase">
                        Join Discord
                    </button>
                </div>
                <div className="flex items-center justify-between flex-wrap md:flex-nowrap">
                    <p className="md:text-left text-center text-white text-lg font-robot-mono mb-3 md:mb-0 w-full md:w-auto">© 2021 Studio Eggy Ltd</p>
                    <div className="flex items-center md:justify-start justify-center md:w-auto w-full">
                        <button className="bg-white rounded-full w-10 h-10 flex items-center justify-center mr-7"><AiOutlineTwitter size={24} className="text-secondary" /></button>
                        <button className="bg-white rounded-full w-10 h-10 flex items-center justify-center mr-7"><FaDiscord size={24} className="text-secondary" /></button>
                        <button className="bg-white rounded-full w-10 h-10 flex items-center justify-center"><AiOutlineTwitter size={24} className="text-secondary" /></button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
