import React, { useRef } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Homepage = () => {
    const roadmapRef = useRef();
    return (
        <>
        <Header roadmapRef={roadmapRef} />
        <main>
            <section className="banner-wrapper">
                <div className="container">
                    <div className="w-1/2 pr-10">
                        <img src="./assets/img/banner-character-1.png" alt="Banner 1" />
                    </div>
                </div>
            </section>
            <section className="bg-secondary py-14">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center md:justify-end flex-wrap md:flex-nowrap">
                        <p className="text-6xl text-white font-londrina-black font-bold uppercase mb-10 md:mb-0 md:text-left text-center md:mr-32">Available to mint early 2022</p>
                        <button className="font-londrina-black uppercase bg-transparent rounded-full py-4 px-10 border-4 border-white hover:border-opacity-70 font-bold text-white text-5xl">
                            Join Wating List
                        </button>
                    </div>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-6xl font-black text-dark-green uppercase mb-16 font-londrina-black">What are eggys?</h2>
                            <p className="text-xl text-dark-green font-robot-mono leading-10">Eggys are a collection of programmatically, randomly generated NFTs on the Ethereum blockchain. The 1st generation consists of 5,555 randomly assembled Eggys.</p>
                        </div>
                        <div>
                            <img src="./assets/img/artboard_1.png" alt="Art Board" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-grey">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                        <div className="text-center">
                            <img src="./assets/img/eggy_16.png" className="mx-auto mb-5" alt="Eggy 16" />
                            <h2 className="uppercase text-4xl font-black mb-1 font-londrina-black">Common</h2>
                            <p className="uppercase text-dark-green font-robot-mono font-bold">2 assets <br />2000 eggys</p>
                        </div>
                        
                        <div className="text-center">
                            <img src="./assets/img/eggy_08.png" className="mx-auto mb-5" alt="Eggy 8" />
                            <h2 className="uppercase text-4xl font-black mb-1 font-londrina-black">Nifty</h2>
                            <p className="uppercase text-dark-green font-robot-mono font-bold">a assets <br />1750 eggys</p>
                        </div>
                        
                        <div className="text-center">
                            <img src="./assets/img/eggy_21.png" className="mx-auto mb-5" alt="Eggy 21" />
                            <h2 className="uppercase text-4xl font-black mb-1 font-londrina-black">Tangy</h2>
                            <p className="uppercase text-dark-green font-robot-mono font-bold">4 assets <br />1250 eggys</p>
                        </div>
                        
                        <div className="text-center">
                            <img src="./assets/img/eggy_29.png" className="mx-auto mb-5" alt="Eggy 29" />
                            <h2 className="uppercase text-4xl font-black mb-1 font-londrina-black">Elite</h2>
                            <p className="uppercase text-dark-green font-robot-mono font-bold">5 assets <br />540 eggys</p>
                        </div>
                        
                        <div className="text-center">
                            <img src="./assets/img/artboard_2.png" className="mx-auto mb-5" alt="Eggy 30" />
                            <h2 className="uppercase text-4xl font-black mb-1 font-londrina-black">Ledgeneggy</h2>
                            <p className="uppercase text-dark-green font-robot-mono font-bold">6 assets <br />15 eggys</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-primary">
                <div className="container mx-auto">
                    <p className="text-white text-2xl text-center font-robot-mono">Rarity of Eggys are based on the amount of items they have. For example an eggy with one hat is much more common than an Eggy with a hat, outfit and different eyes.</p>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-3"><img src="./assets/img/new_eggy_4@2x.png" className="mx-auto" alt="Eggy 1" /></div>
                        <div className="md:col-span-2 pt-20">
                            <h3 className="uppercase text-6xl font-londrina-black font-black text-dark-green mb-10">Buy an Eggy & Help a Hen</h3>
                            <p className="text-dark-green text-xl font-medium font-robot-mono leading-10">By owning an Eggy you will be able to join Club Eggy, an exclusiveBy owning an Eggy you will be able to join Club Eggy, an exclusive</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-2 pt-20">
                            <h3 className="uppercase text-6xl font-londrina-black font-black text-dark-green mb-10">Club Eggy</h3>
                            <p className="text-dark-green text-xl font-medium font-robot-mono leading-10">By owning an Eggy you will be able to join Club Eggy, an exclusiveBy owning an Eggy you will be able to join Club Eggy, an exclusive</p>
                            <div className="flex items-center flex-wrap -mx-2.5 mt-5">
                                <span className="font-robot-mono rounded-full border-4 border-dark-green text-lg font-medium p-2 my-2 mx-4 uppercase">Behind the scenes</span>
                                <span className="font-robot-mono rounded-full border-4 border-dark-green text-lg font-medium p-2 my-2 mx-4 uppercase">Gen 2 Voting</span>
                                <span className="font-robot-mono rounded-full border-4 border-dark-green text-lg font-medium p-2 my-2 mx-4 uppercase">Events</span>
                                <span className="font-robot-mono rounded-full border-4 border-dark-green text-lg font-medium p-2 my-2 mx-4 uppercase">Member discord voting</span>
                                <span className="font-robot-mono rounded-full border-4 border-dark-green text-lg font-medium p-2 my-2 mx-4 uppercase">Exclusive Giveways</span>

                            </div>
                        </div>
                        <div className="md:col-span-3"><img src="./assets/img/eggy_33@2x.png" className="mx-auto" alt="Eggy 1" /></div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-primary" id="roadmap" ref={roadmapRef}>
                <div className="container">
                    <h2 className="text-6xl uppercase text-center font-black text-white mb-10 text-cente font-londrina-blackr">Roadmap</h2>
                    <div className="roadmap">
                        <div className="roadmap-item">
                            <h2 className="text-6xl uppercase font-black text-white mb-10 font-londrina-black">Nov 27th 2021</h2>
                            <div className="rounded-xl px-10 py-16 bg-white">
                                <p className="text-dark-green text-xl font-robot-mono">
                                    What’s that smell? What’s that intoxicating aroma hanging on the wind like a soft blanket; inviting itself into your nose to wrap those lovely little nose bristles in a blankety paradise? <br /> <br />
                                    That my friend….is the smell of ‘The Eggys’ boiling away in the pot. <br /> <br />
                                    They are not ready to come out yet, but boy oh boy are they boilin’ up real good! Don’t have egg on your face, come and join us over on Twitter and Discord to be one of the community. Participate in mini-games, community events and you might even be in with a chance of winning a prize (They may or may not have egg in them…)
                                </p>
                            </div>
                        </div>
                        
                        <div className="roadmap-item">
                            <h2 className="text-6xl uppercase font-black text-white mb-10 font-londrina-black">Jan 27th 2022</h2>
                            <div className="rounded-xl px-10 py-16 bg-white">
                                <p className="text-dark-green text-xl font-robot-mono">
                                    Release date party! Clucking hell; this party is going to be smashing! (Well that’s our party invite revoked). <br /> <br />
                                    Make sure you are part of the community to hear more about the details of the release date party; join in with our special events and win some prizes that will make you to t-yolk of the town! <br /><br />
                                    I will show myself out….
                                </p>
                            </div>
                            <div className="roadmap-item-image">
                                <img src="./assets/img/roadmap/Artboard_17.png" width="50" alt="Eggy 19" />
                            </div>
                        </div>
                        
                        <div className="roadmap-item">
                            <h2 className="text-6xl uppercase font-black text-white mb-10 font-londrina-black">Jan 27th 2022</h2>
                            <div className="rounded-xl px-10 py-16 bg-white">
                                <p className="text-dark-green text-xl font-robot-mono">
                                    Get those paper towels ready, ‘The Eggys’ are comin’ out hot! <br /> <br />
                                    Join us over on discord to celebrate the release of ‘The Eggys’. You bring the bread. I’ll bring the toaster. Let’s get some toast to dip into these eggs! <br /> <br />
                                    Oh and of course… head on over to the minting link at the top to mint your very own Eggy…..
                                </p>
                            </div>
                            <div className="roadmap-item-image">
                                <img src="./assets/img/roadmap/Artboard_20.png" width="50" alt="Eggy 19" />
                            </div>
                        </div>
                        
                        <div className="roadmap-item">
                            <h2 className="text-6xl uppercase font-black text-white mb-10 font-londrina-black">The Future</h2>
                            <div className="rounded-xl px-10 py-16 bg-white">
                                <p className="text-dark-green text-xl font-robot-mono">
                                    The year is 2080; ‘The Eggys’ are 1600 generations deep, an eggy sits at the helm in the white house; number 10….no….the world is run by a blockchain of Eggys!!<br /> <br />
                                    Woops, sorry… caught me egg-dreamin’…. <br /> <br />
                                    We have big plans for the future of ‘The Eggys’; and who knows, we might be in the white house one day…but let’s take things one step at a time.
                                </p>
                            </div>
                            <div className="roadmap-item-image">
                                <img src="./assets/img/roadmap/Artboard_19.png" width="50" alt="Eggy 19" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        </>
    );
};
export default Homepage;

