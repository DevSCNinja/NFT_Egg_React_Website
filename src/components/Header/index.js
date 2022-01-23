import React, { useState } from 'react';
import { NavLink, Link, useLocation, useHistory } from 'react-router-dom';

import HamburgerMenu from 'react-hamburger-menu'
import { FaDiscord } from 'react-icons/fa';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

const Header = ({ roadmapRef }) => {
    const [menuOpen, updateMenuOpen] = useState(false);
    const location = useLocation();
    const history = useHistory();

    const goToRoadmap = (e) => {
        e.preventDefault();
        if (roadmapRef)
            roadmapRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else {
            history.push("/");
        }
    }

    return (
        <>
            <header className="bg-primary relative z-20">
                <div className="container mx-auto">
                    <nav className="site-menus">
                        <ul className="flex items-center justify-between md:justify-end">
                            <li className={`hidden md:block mx-12 md:pb-3 ${location.pathname === '/' ? 'border-b-4 border-white' : ''}`}><NavLink to="/" className="text-white font-bold text-2xl uppercase hover:text-opacity-70">Home</NavLink></li>
                            <li className={`hidden md:block mx-12 md:pb-3`}><Link to="#rodamap" onClick={goToRoadmap} className="text-white font-bold text-2xl uppercase hover:text-opacity-70">Roadmap</Link></li>
                            <li className={`hidden md:block mx-12 md:pb-3 ${location.pathname === '/faq' ? 'border-b-4 border-white' : ''}`}><NavLink to="/faq" className="text-white font-bold text-2xl uppercase hover:text-opacity-70">Faq</NavLink></li>
                            <li className={`hidden md:block mx-12 md:pb-3 ${location.pathname === '/mint' ? 'border-b-4 border-white' : ''}`}><NavLink to="/mint" className="text-white font-bold text-2xl uppercase hover:text-opacity-70">Mint</NavLink></li>
                            <li className="block md:hidden">
                                <HamburgerMenu
                                    isOpen={menuOpen}
                                    menuClicked={() => updateMenuOpen(true)}
                                    width={24}
                                    height={20}
                                    strokeWidth={5}
                                    rotate={0}
                                    color='white'
                                    borderRadius={0}
                                    animationDuration={0.5}
                                />
                            </li>
                            <li className="md:ml-24 md:pb-3">
                                <button className="uppercase flex items-center bg-transparent rounded-full py-2 px-3 border-4 border-white hover:border-opacity-70 font-bold text-white text-2xl">
                                    <FaDiscord size={24} className="mr-4 text-white" />
                                    Join Discord
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <SlidingPane
                        className="mobile-menu"
                        isOpen={menuOpen}
                        width="250px"
                        hideHeader={true}
                        onRequestClose={() => {
                            updateMenuOpen(false);
                    }}>
                        <ul>
                            <li className="my-12"><NavLink to="/" className="text-white font-bold text-2xl uppercase hover:text-opacity-70">Home</NavLink></li>
                            <li className="my-12"><NavLink to="/#rodamap" className="text-white font-bold text-2xl uppercase hover:text-opacity-70">Roadmap</NavLink></li>
                            <li className="my-12"><NavLink to="/faq" className="text-white font-bold text-2xl uppercase hover:text-opacity-70">Faq</NavLink></li>
                            <li className="my-12"><NavLink to="/mint" className="text-white font-bold text-2xl uppercase hover:text-opacity-70">Mint</NavLink></li>
                        </ul>
                    </SlidingPane>
                </div>
            </header>
        </>
    );
};

export default Header;
