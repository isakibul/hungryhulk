import React from "react";
import { Link } from "react-router-dom";
import { BsCashCoin } from "react-icons/bs";
import aboutVideo from "../../../assets/images/about/about-video.mp4";
import { IoFastFoodOutline } from "react-icons/io5";

const About = () => {
    return (
        <div className="relative h-screen my-28">
            <video src={aboutVideo} autoPlay loop muted className="object-cover w-full h-full absolute top-0 left-0" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center backdrop-blur-[4px]">
                <div className="flex flex-col items-center justify-center w-4/5 md:w-3/5 p-8 bg-black bg-opacity-50 rounded-md">
                    <p className="font-righteous text-base md:text-4xl lg:text-5xl font-bold my-5">Here We Are More Than <br /> Many Service</p>
                    <p className="text-xs lg:text-base text-gray-800">Welcome to a distinctive establishment where culinary delights intertwine with an array of beverages, complemented by an assortment of delectable baked goods and savory snacks. This unique dining experience transcends the ordinary, drawing inspiration from the rich French culinary heritage, as the term itself originates from the elegant French word synonymous with the art of nourishment.</p>

                    <div className="hidden md:flex gap-4 mt-5 justify-center items-center lg:items-start lg:justify-start">
                        <div className="flex items-center justify-center gap-2">
                            <div className="flex items-center justify-center border-2 border-white p-3 rounded-full text-xl">
                                <IoFastFoodOutline />
                            </div>
                            <p className="font-righteous text-white">Online Order</p>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <div className="flex items-center justify-center border-2 border-white p-3 rounded-full text-xl">
                                <BsCashCoin />
                            </div>
                            <p className="font-righteous text-white">Cash on Delivery</p>
                        </div>
                    </div>

                    <Link to={"/about"}>
                        <button className="py-3 mt-5 px-10 md:px-20 text-sm md:text-base bg-yellow text-black rounded-sm hover:bg-transparent hover:text-gray transition duration-300 ease-in">
                            About Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
