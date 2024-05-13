import Slider from "./Slider";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from 'react-icons/fa6';
import patterns from "../../../assets/images/hero/pattern.svg"
import patternsRight from "../../../assets/images/hero/pattern-right.svg"

const Hero = () => {
    return (
        <div className="px-6 pt-2 flex flex-col items-center justify-center xl:gap-20 text-center md:flex-row md:items-start md:justify-between lg:text-start">
            <div className="lg:w-2/4">
                <img className="hidden lg:block" src={patterns} alt="" />
                <p className="font-righteous text-4xl font-bold lg:text-6xl mt-8">Unleashing the Flavors of Freshness, Served Daily Here</p>
                <p className="text-xs md:text-base text-center lg:text-start font-semibold my-7 text-gray">This is a type of restaurant which typical serves food and drinks, in addition to light refreshment such as baked good or snacks. The term comes from the french word meaning food.</p>
                <div className="flex justify-center lg:justify-start">
                    <Link to={"/menu"}>
                        <button className="flex items-center gap-2 bg-yellow py-2 px-4 md:py-3 md:px-8 outline outline-yellow outline-1 hover:outline-white ease-in duration-300">
                            Explore Our Food Now
                            <FaArrowRightLong />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="block md:hidden lg:block">
                <Slider />
                <img className="hidden lg:block ml-auto -mt-24 -mr-6" src={patternsRight} alt="" />
            </div>
        </div>
    )
}

export default Hero