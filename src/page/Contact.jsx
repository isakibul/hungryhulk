// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaRegClock } from "react-icons/fa";

// const hours = [
//     {
//         day: "sun",
//         hour: "12 to 8 pm"
//     },
//     {
//         day: "mon",
//         hour: "closed",
//     },
//     {
//         day: "tue",
//         hour: "12 to 8 pm",
//     },
//     {
//         day: "wed",
//         hour: "12 to 10 pm",
//     },
//     {
//         day: "thurs",
//         hour: "12 to 10 pm",
//     },
//     {
//         day: "fri",
//         hour: "12 to 10 pm",
//     },
//     {
//         day: "sat",
//         hour: "12 to 10 pm",
//     }
// ]

const Contact = () => {
    return (
        <div className="font-poppins bg-stone-100 py-20 px-6 md:px-32 lg:px-40 xl:px-72">
            <div>
                <img src="/map.jpg" alt="" className="" />
            </div>
            {/* <div className="text-sm flex flex-col text-start gap-4 mt-10">
                <div className="flex gap-5 items-start">
                    <p className="flex items-center gap-1 text-end"><FaLocationDot />Location:</p>
                    <div>
                        <p>One Boynton Plaza</p>
                        <p>307 E Woolbright Rd</p>
                        <p>Boynton, FL 33435</p>
                    </div>
                </div>
                <div className="flex gap-9 items-start">
                    <p className="flex items-center gap-1 text-end"><FaPhoneAlt />Phone:</p>
                    <p>(561) 509-8131</p>
                </div>
                <div className="flex gap-9 items-start">
                    <p className="flex items-center gap-1 mt-1"><FaRegClock />Hours:</p>
                    <div className="leading-8 text-center">
                        {hours.map((hour) => (
                            <div className="uppercase flex gap-2">
                                <p className="text-right font-semibold">{hour.day}:</p>
                                <p className="text-left">{hour.hour}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

            <p className="text-center font-righteous mt-20 mb-10 text-2xl md:text-4xl lg:text-5xl">Get In Touch With Us</p>

            <div className="flex flex-col">
                <label>Name:</label>
                <br />
                <input type="text" className="w-full py-1 px-3 focus:outline-none" />
                <br />
                <label>Email:</label>
                <br />
                <input type="text" className="w-full py-1 px-3 focus:outline-none" />
                <br />
                <label>Message:</label>
                <br />
                <textarea name="" id="" rows="5" className="w-full py-1 px-3 focus:outline-none" />
                <button className="py-2 mt-8 bg-yellow-400">Submit</button>
            </div>
        </div>
    )
}

export default Contact