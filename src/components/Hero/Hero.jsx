import { IoSearch } from "react-icons/io5";

const Hero = () => {
    return (
        <div className="px-6 pt-10 flex flex-col items-center justify-center text-center md:flex-row md:items-start md:justify-between md:text-start">
            <div className="lg:w-1/3">
                <img className="hidden lg:block" src="/pattern.svg" alt="" />
                <p className="font-abril text-4xl lg:text-6xl mt-8">Unleashing the Flavors of Freshness, Served Daily Here</p>
                <p className="text-xs md:text-base text-center lg:text-start font-semibold my-10 text-gray-600">This is a type of restaurant which typical serves food and drinks, in addition to light refreshment such as baked good or snacks. The term comes from the french word meaning food.</p>
                <div className="flex items-center justify-center lg:justify-start gap-5">
                    <button className="text-gray-800 border-0 bg-red-500 py-2 px-4 md:px-6 rounded-full font-semibold outline outline-red-500  hover:outline-gray-800 outline-2 ease-in duration-300">Explore Food</button>
                    <button className="flex items-center gap-1 text-gray-800 outline outline-red-500 outline-2 py-2 px-6 md:px-8 rounded-full font-semibold hover:bg-red-500 hover:outline-gray-800 ease-in duration-300">
                        <IoSearch style={{ fontSize: "25px" }} />
                        Search
                    </button>
                </div>
            </div>
            <div className="hidden lg:block">
                <img src="/item1.png" alt="" />
                <img className="ml-auto -mr-6" src="/pattern-right.svg" alt="" />
            </div>
        </div>
    )
}

export default Hero