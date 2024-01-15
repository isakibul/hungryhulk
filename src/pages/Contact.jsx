import { FaLocationDot } from "react-icons/fa6";
import { RiCellphoneFill } from "react-icons/ri";

const Contact = () => {
    return (
        <div className="font-poppins bg-stone-100 py-20 px-6 md:px-32 lg:px-40 xl:px-72">
            <div>
                <img src="/map.jpg" alt="" className="" />
            </div>
            <div className="text-sm flex flex-col md:flex-row gap-10 text-start mt-10 md:text-xl font-semibold">
                <div className="flex gap-5 items-start">
                    <p className="flex items-center gap-2 text-end"><FaLocationDot />Location:</p>
                    <div>
                        <p>One Boynton Plaza</p>
                        <p>307 E Woolbright Rd</p>
                        <p>Boynton, FL 33435</p>
                    </div>
                </div>
                <div className="flex gap-2 items-start">
                    <p className="flex items-center gap-1 text-end mr-8 md:mr-1"><RiCellphoneFill />Phone:</p>
                    <p>(561) 509-8131</p>
                </div>
            </div>

            <p className="text-center font-righteous mt-20 mb-10 text-2xl md:text-4xl font-bold">Get In Touch With Us</p>

            <div className="flex flex-col gap-5">
                <label>Name:</label>
                <input type="text" className="w-full py-1 px-3 focus:outline-none" />
                <label>Email:</label>
                <input type="text" className="w-full py-1 px-3 focus:outline-none" />
                <label>Message:</label>
                <textarea name="" id="" rows="5" className="w-full py-1 px-3 focus:outline-none" />
                <button className="py-2 mt-4 bg-yellow-400">Submit</button>
            </div>
        </div>
    )
}

export default Contact