import reservationVideo from "../../../assets/images/reservation/reservation-video.mp4";


const Reservation = () => {
    return (
        <div className="mx-6 my-32 md:mx-10 flex flex-col items-center lg:flex-row lg:gap-6">
            <div className="text-center mb-6 lg:mb-0 lg:flex flex-col lg:text-start lg:items-start lg:w-3/4">
                <p className="font-righteous text-4xl font-bold md:text-5xl mb-5">Do You Have Any Dinner Plan Today? <br /> Reserve Your Table</p>
                <p className="text-gray-900">Make online reservations, read restaurant reviews from diners, and earn points towards free meals. OpenTable is a real-time online reservation.</p>
                <button className="py-3 mt-5 px-6 bg-yellow outline outline-2 outline-yellow hover:outline-white ease in duration-300">Make Reservation</button>
            </div>
            <div>
                <video autoPlay loop muted className="rounded-sm opacity-80">
                    <source src={reservationVideo} type="video/mp4" className="" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default Reservation