import { RegularMenuItem } from "../../assets/data/regularMenu"
import { MdStarRate } from "react-icons/md";
import Tags from "./menuTags";

const RegularMenu = () => {
    return (
        <div className="px-4 mt-32">
            <p className="font-righteous text-3xl md:text-4xl lg:text-5xl xl-text-7xl font-bold text-center">Our Regular Menu Pack</p>

            <div className="my-6 md:mx-8 xl:mx-20 justify-center grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8">
                {Tags.map((tag) =>
                    <button className="outline outline-2 py-2 px-2 rounded-full text-amber-950 outline-yellow-400 m-2 hover:bg-yellow-400 hover:outline-white ease-in duration-300">
                        {tag.title}
                    </button>)}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {RegularMenuItem.map((dish, index) => (
                    <div key={index} className="bg-white mx-2 flex flex-col gap-5 text-center p-5 shadow-sm rounded-sm mb-10">
                        <img src={dish.image} alt="dish-image" />
                        <p className="font-righteous text-4xl">{dish.title}</p>
                        <div className="flex justify-center text-3xl text-yellow-400">{dish.ratings.map((_rating, idx) =>
                            <div
                                key={idx}
                            >
                                <MdStarRate />
                            </div>)}
                        </div>
                        <p className="">{dish.description}</p>
                        <div className="flex justify-between mt-5">
                            <p className="font-righteous text-3xl">{dish.price}</p>
                            <button
                                className="outline outline-yellow-400 outline-1 hover:bg-yellow-400 font-semibold py-2 px-4 text-black rounded-full ease-in duration-300"
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RegularMenu