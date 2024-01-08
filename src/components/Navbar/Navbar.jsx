import React, { useEffect, useState } from 'react';
import logo from "/logo.png";
import navContent from "./NavbarContext";
import { FaShoppingBasket } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
// import { Link } from "react-router-dom";

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const body = document.body;
        if (navOpen) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "visible";
        }
        return () => {
            body.style.overflow = "visible";
        };
    }, [navOpen]);

    return (
        <>
            <nav className={`${scrolling ? 'bg-white' : 'bg-stone-100'} ${scrolling ? 'fixed top-0 left-0 right-0' : ''}`}>
                <div className={`flex justify-between items-center px-6 ${scrolling ? 'py-4' : 'py-6'} ease-in duration-300`}>
                    <div>
                        <img
                            className="w-44"
                            src={logo} alt="exquisibyte logo"
                        />
                    </div>
                    <div className="md:hidden">
                        <button
                            className="text-2xl text-red-500 outline outline-offset-0.5 outline-1 outline-red-500 p-3 rounded-full hover:outline-white hover:bg-red-600 hover:text-white ease-out duration-300"
                            onClick={() => setNavOpen(!navOpen)}
                        >
                            <IoMdMenu />
                        </button>
                    </div>
                    <div className="hidden md:flex gap-6 items-center">
                        <ul className="hidden lg:flex gap-8 mr-4 text-xl font-semibold">
                            {navContent.map((item, idx) => <li className="text-stone-500 hover:text-black ease-in duration-200 cursor-pointer" key={idx}>{item.title}</li>)}
                        </ul>
                        <button
                            className="p-3 text-2xl text-amber-950 outline outline-red-500 outline-2 rounded-full hover:bg-red-500 hover:outline-white"
                        >
                            <FaShoppingBasket />
                        </button>
                        <button
                            className="py-3 px-7 bg-red-500 rounded-full text-xl text-gray-800 hover:outline hover:outline-white hover:outline-1"
                        >
                            Reserve Table
                        </button>
                    </div>
                </div>
            </nav>

            {/* mobile menu */}
            {navOpen && (
                <div className="md:hidden text-2xl flex flex-col gap-8 justify-center items-center text-center fixed top-0 left-0 right-0 bottom-0 bg-white">
                    <ul className="flex flex-col gap-8 text-xl font-semibold">
                        {navContent.map((item, idx) => <li className="text-stone-500 hover:text-black ease-in duration-200 cursor-pointer" key={idx}>{item.title}</li>)}
                    </ul>
                    <button
                        className="p-3 text-2xl text-amber-950 outline outline-red-500 outline-2 rounded-full hover:bg-red-500 hover:outline-white"
                    >
                        <FaShoppingBasket />
                    </button>
                    <button
                        className="py-3 px-7 bg-red-500 rounded-full text-xl text-gray-800 hover:outline hover:outline-white hover:outline-1"
                    >
                        Reserve Table
                    </button>
                    <button
                        className='text-3xl'
                        onClick={() => setNavOpen(false)}
                    >
                        <IoClose />
                    </button>
                </div>
            )}
        </>
    );
}

export default Navbar;
