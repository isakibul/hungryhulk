import { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { MdStarRate } from "react-icons/md";
import usePopularMenu from "../../../hooks/usePopularMenu";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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
        breakpoint: { max: 666, min: 0 },
        items: 1,
    },
};

const PopularMenu = () => {
    const popularMenu = usePopularMenu();

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
                <p className="font-righteous text-2xl md:text-5xl font-bold">Popular Menu</p>
                <div className="flex gap-4 items-center lg:mr-10">
                    {/* left arrow */}
                    <button
                        className="text-2xl md:text-4xl text-amber outline outline-yellow outline-2 rounded-full p-1 hover:bg-yellow hover:outline-white hover:p-.5 ease-in duration-300"
                        onClick={handlePreviousClick}
                    >
                        <IoIosArrowRoundBack />
                    </button>
                    {/* right arrow */}
                    <button
                        className="text-2xl md:text-4xl text-amber outline outline-yellow outline-2 rounded-full p-1 hover:bg-yellow hover:outline-white hover:p-.5 ease-in duration-300"
                        onClick={handleNextClick}
                    >
                        <IoIosArrowRoundForward />
                    </button>
                </div>
            </div>

            <div className="ml-1">
                {popularMenu.length !== 0 ? (
                    <Carousel ref={carouselRef} arrows={false} responsive={responsive} itemClass="carousel-item">
                        {popularMenu.map((menu, index) => (
                            <div key={index} className="bg-white mx-2 flex flex-col gap-5 text-center py-5 shadow-sm rounded-sm">
                                <img src={menu.imageUrl} alt="menu-image" />
                                <p className="font-righteous text-2xl xl:text-3xl">{menu.title}</p>
                                <div className="flex justify-center text-3xl text-yellow">
                                    {Array.from({ length: menu.ratings }, (_, idx) => (
                                        <div key={idx}>
                                            <MdStarRate />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </Carousel>
                ) : (
                    <div className="mx-2">
                        <Skeleton width="100%" height={"160px"} />
                        <Skeleton width="100%" height={"50px"} />
                        <Skeleton width="100%" height={"50px"} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default PopularMenu;
