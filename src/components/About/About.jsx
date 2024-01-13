import salad from "../../assets/images/about/salad.png"
import chef from "../../assets/images/about/chef.png"
import cheese from "../../assets/images/about/cheese.png"
import twentyFourSeven from "../../assets/images/about/7-24.svg"
import { BsCashCoin } from "react-icons/bs";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="mt-20 px-6 lg:px-12 lg:flex items-center justify-center lg:gap-28">
            <div className="">
                <img src={salad} alt="salad" className="hidden lg:block ml-auto mr-0 -mb-20 xl:-mb-20" />
                <img src={chef} alt="chef" className="lg:scale-125" />
                <img src={cheese} alt="cheese" className="hidden lg:block -mt-10 lg:-mt-2" />
            </div>
            <div className="text-center lg:text-start">
                <p className="font-righteous text-3xl lg:text-5xl font-bold my-5">We Are More Than Multiple Service</p>
                <p className="text-sm lg:text-base text-gray-800">This is a type of restaurant which typical serves food and drinks, in addition to light refreshment such as baked good or snacks. The term comes from the french word meaning food.</p>
                {/* ------------- */}
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
                {/* ---------- */}
                <Link to={"/about"}>
                    <button className="mt-5 py-3 px-7 bg-yellow-400 rounded-full text-xl text-black outline outline-yellow-400 outline-2 hover:outline-white ease-in duration-300">
                        About Us
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default About