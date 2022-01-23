import React from 'react';
import Faq from 'react-faq-component';

import { BsPlus } from 'react-icons/bs';

const data = {
    title: "",
    rows: [
        {
            title: "How do i sell NFT?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
        {
            title: "How do i create NFT?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
        
        {
            title: "I accidentally transferred tokens directly to a pair contract, is there any way I can get them back?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
        {
            title: "My swap failed with code “EXPIRED”, what happened?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
    ]
}

const FAQ = () => {
    return (
        <section className="faq-wrapper pb-12 pt-12 md:pt-36">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="mb-10">
                        <h2 className="text-3xl text-white font-bold mb-10">Issues or questions?</h2>
                        <p className="text-white text-opacity-50">Do you have issues or questions about the project? See our FAQ for more information.</p>
                    </div>
                    <div className="col-span-2">
                        <Faq
                            data={data}
                            config={{
                                arrowIcon: <BsPlus className="text-white text-opacity-50" size={32} />
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default FAQ;
