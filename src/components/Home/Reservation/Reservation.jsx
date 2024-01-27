import React from "react";
import { Link } from "react-router-dom";
import { BsCashCoin } from "react-icons/bs";
import reservationVideo from "../../../assets/images/reservation/reservation-video.mp4";

const Reservation = () => {
    return (
        <div className="relative h-screen my-28">
            <video src={reservationVideo} autoPlay loop muted className="object-cover w-full h-full absolute top-0 left-0 backdrop-blur-[4px]" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center backdrop-blur-[3px]">
                <div className="flex flex-col items-center justify-center w-4/5 md:w-3/5 p-8 bg-black bg-opacity-50 rounded-md">
                    <p className="font-righteous text-base md:text-4xl lg:text-5xl font-bold mb-5">Do You Have Any Dinner Plan Today? <br /> Reserve Your Table!</p>
                    <p className="text-gray-900">Make online reservations, read restaurant reviews from diners, and earn points towards free meals. OpenTable is a real-time online reservation.</p>
                    <button className="py-3 mt-5 px-5 md:px-20 text-sm md:text-base bg-yellow text-black rounded-sm hover:bg-transparent hover:text-gray transition duration-300 ease-in">
                        Make Reservation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reservation;
