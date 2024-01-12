import { FaApple } from "react-icons/fa";
import googlePlay from "/google-playstore.png";
import mobileApp from "/mobile-app.png";
import setMenu from "/set-menu.png";

const MobileApp = () => {
    return (
        <div className="mt-20 mx-2 p-2 md:p-4 lg:p-8 md:mx-8 lg:mx-14 bg-[#fcfae3] flex flex-col gap-5 items-center justify-center lg:flex-row rounded-lg lg:rounded-xl">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-start lg:w-2/5">
                <p className="font-righteous text-3xl md:text-5xl font-semibold">Never Feel Hungry! Download Our Mobile App Enjoy Delicious Foods</p>
                <p className="text-sm md:text-base my-5 text-gray-800">Make online reservations, read restaurant reviews from diners, and earn points towards free meals, OpenTable is a real-time online reservation.</p>
                <div className="flex items-center justify-center gap-4">
                    <div className="flex gap-1 text-amber-950 bg-yellow-300 py-1 px-6 xl:px-8 rounded-full outline outline-yellow-400 outline-1 cursor-pointer hover:outline-white ease-in duration-300">
                        <div className="text-2xl md:text-4xl">
                            <FaApple />
                        </div>
                        <div>
                            <p className="text-[8px] xl:text-[12px]">Download on</p>
                            <p className="text-[12px] xl:text-[16px]">App Store</p>
                        </div>
                    </div>
                    <div className="flex gap-1 items-center justify-center outline outline-1 text-amber-950 outline-yellow-300 py-1 px-6 xl:px-8 rounded-full cursor-pointer hover:shadow-lg ease-in duration-300">
                        <img src={googlePlay} alt="" className="w-5 h-5" />
                        <div>
                            <p className="text-[8px] xl:text-[12px]">Download on</p>
                            <p className="text-[12px] xl:text-[16px]">Play Store</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 flex">
                <img src={mobileApp} alt="" className="md:scale-75" />
                <img src={setMenu} alt="" className="hidden lg:block w-30 h-30 mt-auto mb-20" />
            </div>
        </div>
    )
}

export default MobileApp