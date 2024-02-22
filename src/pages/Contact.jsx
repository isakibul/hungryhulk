const Contact = () => {
    return (
        <div className="bg-stone font-rubik py-2 px-6 md:px-32 lg:px-40 xl:px-72">
            <p className="text-center font-righteous mt-20 mb-10 text-2xl md:text-4xl font-bold">Get In Touch With Us</p>
            <div className="flex flex-col gap-5 font-semibold">
                <label>Name:</label>
                <input type="text" className="w-full py-1 px-3 focus:outline-none" />
                <label>Email:</label>
                <input type="text" className="w-full py-1 px-3 focus:outline-none" />
                <label>Message:</label>
                <textarea name="" id="" rows="5" className="w-full py-1 px-3 focus:outline-none" />
                <button className="py-2 mt-4 bg-yellow">Submit</button>
            </div>
        </div>
    )
}

export default Contact