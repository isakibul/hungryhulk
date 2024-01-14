import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { popularDish } from "../../assets/data/popularDish";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { MdStarRate } from "react-icons/md";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const PopularDish = () => {
    const carouselRef = useRef(null);

    const handlePreviousClick = () => {
        if (carouselRef.current) {
            carouselRef.current.previous();
        }
    };

    const handleNextClick = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    return (
        <div className="mt-20">
            <div className="flex justify-between mb-10 px-6">
                <p className="font-righteous text-2xl md:text-5xl font-bold">Popular Dishes</p>
                <div className="flex gap-4 items-center lg:mr-10">
                    {/* left arrow */}
                    <button
                        className="text-2xl md:text-4xl text-amber-950 outline outline-yellow-400 outline-2 rounded-full p-1 hover:bg-yellow-400 hover:outline-white hover:p-.5 ease-in duration-300"
                        onClick={handlePreviousClick}
                    >
                        <IoIosArrowRoundBack />
                    </button>
                    {/* right arrow */}
                    <button
                        className="text-2xl md:text-4xl text-amber-950 outline outline-yellow-400 outline-2 rounded-full p-1 hover:bg-yellow-400 hover:outline-white hover:p-.5 ease-in duration-300"
                        onClick={handleNextClick}
                    >
                        <IoIosArrowRoundForward />
                    </button>
                </div>
            </div>

            <div className="ml-1">
                <Carousel ref={carouselRef} arrows={false} responsive={responsive} itemClass="carousel-item">
                    {popularDish.map((dish, index) => (
                        <div key={index} className="bg-white mx-2 flex flex-col gap-5 text-center p-5 shadow-sm rounded-sm">
                            <img src={dish.image} alt="dish-image" />
                            <p className="font-righteous text-4xl">{dish.title}</p>
                            <div className="flex justify-center text-3xl text-yellow-400">{dish.ratings.map((_rating, idx) =>
                                <div
                                    key={idx}
                                >
                                    <MdStarRate />
                                </div>)}
                            </div>
                            <p className="">{dish.description}</p>
                            <div className="flex justify-between mt-5">
                                <p className="font-righteous text-3xl">{dish.price}</p>
                                <button
                                    className="outline outline-yellow-400 outline-1 hover:bg-yellow-400 font-semibold py-2 px-4 text-black ease-in duration-300"
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default PopularDish;
