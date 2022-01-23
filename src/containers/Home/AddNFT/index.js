import React from 'react';

const AddNFT = () => {
    return (
        <section className="add-nft-wrapper">
            <div className="container mx-auto">
                <h2 className="text-center text-3xl text-white font-bold mb-4">Your NFT Collections its ready?</h2>
                <p className="text-white text-opacity-50 text-center mb-7">If you did not find the answer ask on our telegram channel.</p>
                <div className="text-center">
                    <button className="bg-primary text-block-black py-2.5 px-16 font-bold rounded-xl hover:bg-opacity-70 transition-all">Add your NFT</button>
                </div>
            </div>
        </section>
    );
};
export default AddNFT;
