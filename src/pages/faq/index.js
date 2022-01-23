import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


const Faq = () => {
    return (
        <>
        <Header />
        <main>
            <section className="pt-24 bg-primary pb-24 md:pb-80">
                <div className="container mx-auto">
                    <h2 className="uppercase text-6xl font-black text-white text-center font-londrina-black">FAQ</h2>
                    <div className="flex items-center flex-wrap justify-center mt-10">
                        <div className="md:mb-0 mb-5 mx-5 text-right">
                            <select className="rounded-full border-4 text-2xl text-white font-bold hover:border-0 focus:outline-none focus:border-0 border-white px-6 py-4 bg-transparent w-80">
                                <option value="1">Question</option>
                            </select>
                        </div>
                        <div className="md:mb-0 mb-5 mx-5 text-left">
                            <select className="rounded-full border-4 text-2xl text-white font-bold hover:border-0 focus:outline-none focus:border-0 border-white px-6 py-4 bg-transparent w-80">
                                <option value="1">Question</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        </>
    );
};
export default Faq;

