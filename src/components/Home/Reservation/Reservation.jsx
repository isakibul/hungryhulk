import reservation from "../../../assets/images/reservation/reservation.png"

const Reservation = () => {
    return (
        <div className="mx-6 my-20 md:mx-10 flex flex-col items-center lg:flex-row">
            <div className="text-center mb-6 lg:mb-0 lg:flex flex-col lg:text-start lg:items-start lg:w-2/4">
                <p className="font-righteous text-4xl font-bold md:text-5xl mb-5">Do You Have Any Dinner Plan Today? Reserve Your Table</p>
                <p className="text-gray-900">Make online reservations, read restaurant reviews from diners, and earn points towards free meals. OpenTable is a real-time online reservation.</p>
                <button className="py-3 mt-5 px-6 bg-yellow outline outline-2 outline-yellow hover:outline-white ease in duration-300">Make Reservation</button>
            </div>
            <div>
                <img src={reservation} alt="" />
            </div>
        </div>
    )
}

export default Reservation