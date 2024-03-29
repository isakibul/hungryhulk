import { FaApple } from "react-icons/fa";
import googlePlay from "../../../assets/images/mobile-app/google-playstore.png";
import mobileApp from "../../../assets/images/mobile-app/mobile-app.png";
import setMenu from "../../../assets/images/mobile-app/set-menu.png";


const MobileApp = () => {
    return (
        <div className="mx-2 p-2 md:px-4 lg:px-8 md:mx-8 lg:mx-14 bg-[#fcfae3] flex flex-col gap-5 items-center justify-center lg:flex-row lg:gap-32 rounded-lg lg:rounded-xl">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-start lg:w-2/5">
                <p className="font-righteous text-3xl md:text-5xl font-semibold">Never Feel Hungry! Download Our Mobile App Enjoy Delicious Foods</p>
                <p className="text-sm md:text-base my-5 text-gray-800">Make online reservations, read restaurant reviews from diners, and earn points towards free meals, OpenTable is a real-time online reservation.</p>
                <div className="flex items-center justify-center gap-4">
                    <div className="flex gap-1 text-black bg-yellow py-1 px-6 xl:px-8 rounded-full outline outline-yellow outline-1 cursor-pointer hover:outline-white ease-in duration-300">
                        <div className="text-2xl md:text-4xl">
                            <FaApple />
                        </div>
                        <div>
                            <a href="https://www.apple.com/app-store/" target="_blank">
                                <p className="text-[8px] xl:text-[12px]">Download on</p>
                                <p className="text-[12px] xl:text-[16px]">App Store</p>
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-1 items-center justify-center outline outline-1 text-black outline-yellow py-1 px-6 xl:px-8 rounded-full cursor-pointer hover:shadow-lg ease-in duration-300">
                        <img src={googlePlay} alt="" className="w-8 h-8" />
                        <div>
                            <a href="https://play.google.com/store/apps/?hl=en&gl=US" target="_blank">
                                <p className="text-[8px] xl:text-[12px]">Download on</p>
                                <p className="text-[12px] xl:text-[16px]">Play Store</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 lg:mt-0 flex lg:gap-10">
                <img src={mobileApp} alt="" className="lg:w-2/4" />
                <img src={setMenu} alt="" className="hidden lg:block w-30 h-30 mt-auto" />
            </div>
        </div>
    )
}

export default MobileApp