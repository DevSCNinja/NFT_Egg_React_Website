import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Mint = () => {
    return (
        <>
            <Header />
            <main>
                <section className="py-24 bg-primary">
                    <div className="container mx-auto">
                        <h2 className="uppercase text-6xl font-black text-white text-center font-londrina-black">Mint Eggys</h2>
                        <div className="flex flex-col items-center mt-10">
                            <div className="flex flex-col items-start">
                                <p className="text-2xl mb-5 text-white font-semibold font-robot-mono">Amount</p>
                                <input type="text" className="rounded-full border-4 text-2xl text-white font-bold hover:border-0 focus:outline-none focus:border-0 border-white px-6 py-4 bg-transparent w-80" />
                            </div>
                            <span className="mt-5 text-3xl font-londrina-black font-black text-primary bg-white text-center uppercase py-4 px-6 w-80 rounded-full">MINT EGGY Ξ0.02</span>
                            <p className="text-2xl text-white text-center mt-5 font-robot-mono font-bold">Total Minted <br />0 / 5,555</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};
export default Mint;

