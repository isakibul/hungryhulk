import reservation from "/reservation.png"

const Reservation = () => {
    return (
        <div className="mx-6 my-20 md:mx-10 flex flex-col items-center lg:flex-row">
            <div className="text-center lg:flex flex-col lg:text-start lg:items-start lg:w-3/5">
                <p className="font-righteous text-4xl md:text-6xl mb-5">Do You Have Any Dinner Plan Today? Reserve Your Table</p>
                <p className="text-sm text-gray-900">Make online reservations, read restaurant reviews from diners, and earn points towards free meals. OpenTable is a real-time online reservation.</p>
                <button className="py-3 mt-5 px-6 bg-yellow-400 outline outline-2 outline-yellow-400 hover:outline-white ease in duration-300">Make Reservation</button>
            </div>
            <div>
                <img src={reservation} alt="" />
            </div>
        </div>
    )
}

export default Reservation