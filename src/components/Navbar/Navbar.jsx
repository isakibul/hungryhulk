import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from "../../assets/images/site-logo.png";
import navContent from "./NavbarContext";
import { FaShoppingBasket } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const location = useLocation();

    function getCartTotalQuantity() {
        const storedCart = localStorage.getItem("cart");
        const cart = storedCart ? JSON.parse(storedCart) : [];

        return cart.reduce((totalQuantity, cartItem) => {
            return totalQuantity + cartItem.quantity;
        }, 0);
    }

    const totalQuantity = getCartTotalQuantity();

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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767) {
                setNavOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={`font-rubik z-10 ${scrolling ? 'bg-white' : 'bg-stone'} ${scrolling ? 'fixed top-0 left-0 right-0' : ''}`}>
            <div className={`flex justify-between items-center px-6 ${scrolling ? 'py-4' : 'py-6'} ease-in duration-500`}>
                <div>
                    <Link to={"/"}>
                        <img
                            className="w-44"
                            src={logo} alt="exquisibyte logo"
                        />
                    </Link>
                </div>
                <div className="md:hidden">
                    <button
                        className="text-2xl text-amber outline outline-offset-0.5 outline-1 outline-yellow p-3 rounded-full hover:outline-white hover:bg-yellow ease-out duration-300"
                        onClick={() => setNavOpen(!navOpen)}
                    >
                        <IoMdMenu />
                    </button>
                </div>
                <div className="hidden md:flex gap-6 items-center">
                    <ul className="hidden lg:flex gap-8 mr-4 text-xl font-semibold">
                        {navContent.map((item, idx) => (
                            <li
                                key={idx}
                                className={`ease-in duration-200 cursor-pointer ${location.pathname === item.path ? 'text-amber' : 'text-gray hover:text-black'}`}
                            >
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to={"/cart"}>
                        <button
                            className="relative p-3 text-2xl text-amber outline outline-yellow outline-2 rounded-full hover:bg-yellow hover:outline-white"
                        >
                            <FaShoppingBasket />
                            <span className="absolute text-xs -top-1 -right-1 bg-amber text-white px-2 py-1 rounded-full">{totalQuantity > 0 ? totalQuantity : 0}</span>
                        </button>
                    </Link>
                    <button
                        className="py-3 px-6 bg-yellow text-black"
                    >
                        Reserve Table
                    </button>
                </div>
            </div>

            {/* mobile menu */}
            {navOpen && (
                <div className="text-2xl flex flex-col gap-8 justify-center items-center text-center fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
                    <ul className="flex flex-col gap-8 text-xl font-semibold">
                        {navContent.map((item, idx) => (
                            <li
                                key={idx}
                                className={`ease-in duration-200 cursor-pointer ${location.pathname === item.path ? 'text-amber' : 'text-gray hover:text-black'}`}
                            >
                                <Link
                                    to={item.path}
                                    onClick={() => setNavOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to={"/cart"} onClick={() => setNavOpen(false)}>
                        <button
                            className="relative p-3 text-2xl text-amber outline outline-yellow outline-2 rounded-full hover:bg-yellow hover:outline-white"
                        >
                            <FaShoppingBasket />
                            <span className="absolute text-xs -top-1 -right-1 bg-amber text-white px-2 py-1 rounded-full">{totalQuantity > 0 ? totalQuantity : 0}</span>
                        </button>
                    </Link>
                    <button
                        className="py-3 px-7 bg-yellow text-xl text-black"
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
        </nav>
    );
}

export default Navbar;
