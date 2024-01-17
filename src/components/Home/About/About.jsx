import chefs from "../../../assets/images/about/chefs.jpg"
import twentyFourSeven from "../../../assets/images/about/7-24.svg"
import { BsCashCoin } from "react-icons/bs";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="my-20 px-6 lg:px-12 lg:flex items-center justify-center lg:gap-2">
            <div className="xl:-ml-10">
                <img src={chefs} alt="chef" className="scale:50 md:scale-100 lg:scale-75 rounded-lg" />
            </div>
            <div className="text-center lg:text-start lg:w-2/4">
                <p className="font-righteous text-2xl md:text-3xl lg:text-5xl font-bold my-5">We Are More Than Multiple Service</p>
                <p className="text-xs lg:text-base text-gray-800 text-justify font-semibold">Welcome to a distinctive establishment where culinary delights intertwine with an array of beverages, complemented by an assortment of delectable baked goods and savory snacks. This unique dining experience transcends the ordinary, drawing inspiration from the rich French culinary heritage, as the term itself originates from the elegant French word synonymous with the art of nourishment.</p>

                <div className="flex gap-4 mt-5 justify-center items-center lg:items-start lg:justify-start">
                    <div className="flex items-center gap-2">
                        <img src={twentyFourSeven} alt="" className="border-dashed border-2 border-gray-300 w-12 p-1.5 rounded-full" />
                        <p className="font-righteous text-amber-900">Online Order</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center justify-center border-dashed border-2 border-gray-300 p-3 rounded-full text-xl">
                            <BsCashCoin />
                        </div>
                        <p className="font-righteous text-amber-900">Cash on Delivery</p>
                    </div>
                </div>

                <Link to={"/about"}>
                    <button className="mt-10 xl:mt-4 w-full lg:w-auto py-2 px-10 bg-yellow-400 text-xl text-black outline outline-yellow-400 outline-2 hover:outline-white ease-in duration-300">
                        About Us
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default About