import React, { useState } from "react";
import { MdStarRate } from "react-icons/md";
import Tags from "./menuTags";
import { RegularMenuItem } from "../../assets/data/regularMenu";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const RegularMenu = () => {
    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();

    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleTagClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredMenuItems =
        selectedCategory === "All"
            ? RegularMenuItem
            : RegularMenuItem.filter((item) => item.category === selectedCategory);

    return (
        <div className="px-4 pt-2">
            <p className="font-righteous text-3xl md:text-4xl lg:text-5xl xl-text-7xl font-bold text-center">
                Our Regular Menu Pack
            </p>

            <div className="my-6 md:mx-8 xl:mx-20 flex flex-wrap items-center justify-center">
                {Tags.map((tag, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleTagClick(tag.title)}
                        className={`w-full md:w-auto outline outline-1 py-2 px-6 rounded-lg ${tag.title === selectedCategory
                            ? "bg-yellow-400 text-white"
                            : "text-amber-950"
                            } hover:bg-yellow-400 hover:outline-white ease-in duration-300 m-2`}
                    >
                        {tag.title}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {filteredMenuItems.map((dish, index) => (
                    <div
                        key={index}
                        className="bg-white mx-2 flex flex-col gap-5 text-center p-5 shadow-sm rounded-sm mb-10"
                    >
                        <img src={dish.image} alt="dish-image" />
                        <p className="font-righteous text-4xl">{dish.title}</p>
                        <div className="flex justify-center text-3xl text-yellow-400">
                            {dish.ratings.map((_rating, idx) => (
                                <div key={idx}>
                                    <MdStarRate />
                                </div>
                            ))}
                        </div>
                        <p className="">{dish.description}</p>
                        <div className="flex justify-between mt-5">
                            <p className="font-righteous text-3xl">{dish.price}</p>
                            <button
                                className="outline outline-yellow-400 outline-1 hover:bg-yellow-400 font-semibold py-2 px-4 text-black ease-in duration-300"
                                onClick={() => dispatch(addToCart(dish))}
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RegularMenu;
