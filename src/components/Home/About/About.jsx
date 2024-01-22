import aboutVideo from "../../../assets/images/about/about-video.mp4"
import twentyFourSeven from "../../../assets/images/about/7-24.svg";
import { BsCashCoin } from "react-icons/bs";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="my-32 px-6 lg:px-12 lg:flex gap-10 items-center justify-center">
            <div>
                <video autoPlay loop muted className="rounded-sm opacity-80">
                    <source src={aboutVideo} type="video/mp4" className="w-2/5" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="text-center lg:text-start lg:w-3/4">
                <p className="font-righteous text-2xl lg:text-4xl xl:text-5xl font-bold my-5">We Are More Than Multiple Service</p>
                <p className="text-xs lg:text-sm text-gray-800">Welcome to a distinctive establishment where culinary delights intertwine with an array of beverages, complemented by an assortment of delectable baked goods and savory snacks. This unique dining experience transcends the ordinary, drawing inspiration from the rich French culinary heritage, as the term itself originates from the elegant French word synonymous with the art of nourishment.</p>

                <div className="flex gap-4 mt-5 justify-center items-center lg:items-start lg:justify-start">
                    <div className="flex items-center gap-2">
                        <img src={twentyFourSeven} alt="" className="border-dashed border-2 border-gray w-12 p-1.5 rounded-full" />
                        <p className="font-righteous text-amber">Online Order</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center justify-center border-dashed border-2 border-gray p-3 rounded-full text-xl">
                            <BsCashCoin />
                        </div>
                        <p className="font-righteous text-amber">Cash on Delivery</p>
                    </div>
                </div>

                <Link to={"/about"}>
                    <button className="mt-10 xl:mt-6 w-full lg:w-auto py-2 px-10 bg-yellow text-xl text-black outline outline-yellow outline-2 hover:outline-white ease-in duration-300">
                        About Us
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default About;
