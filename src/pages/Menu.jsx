import { useState } from "react";
import { MdStarRate } from "react-icons/md";
import Tags from "../assets/data/menu/menuTags";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useMenu from "../hooks/useMenu";
import { Circles } from 'react-loader-spinner';

const Menu = () => {
    const menuItems = useMenu();
    const dispatch = useDispatch();

    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleTagClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredMenuItems =
        selectedCategory === "All"
            ? menuItems
            : menuItems.filter((item) => item.category === selectedCategory);

    const toastStyle = {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    };

    const handleAddToCart = (dish) => {
        dispatch(addToCart(dish));

        toast.success(`${dish.title} added to Cart!`, {
            ...toastStyle,
        });

        setTimeout(() => {
            window.location.reload();
        }, 3000)
    };

    return (
        <div className="px-4 pt-10 bg-stone font-rubik">
            <ToastContainer />

            <p className="font-righteous text-3xl md:text-4xl lg:text-5xl xl-text-7xl font-bold text-center">
                Our Regular Menu Pack
            </p>
            {filteredMenuItems.length !== 0 ? (
                <div>
                    <div className="my-6 md:mx-8 xl:mx-20 flex flex-wrap items-center justify-center">
                        {Tags.map((tag, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleTagClick(tag.title)}
                                className={`w-full md:w-auto outline outline-1 py-2 px-6 rounded-lg ${tag.title === selectedCategory
                                    ? "bg-yellow text-white"
                                    : "text-amber"
                                    } hover:bg-yellow hover:outline-white ease-in duration-300 m-2`}
                            >
                                {tag.title}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                        {filteredMenuItems.map((menu, index) => (
                            <div
                                key={index}
                                className="bg-white mx-2 flex flex-col gap-5 text-center p-5 shadow-sm rounded-sm mb-10"
                            >
                                <img src={menu.imageUrl} alt="dish-image" />
                                <p className="font-righteous text-4xl">{menu.title}</p>
                                <div className="flex justify-center text-3xl text-yellow">
                                    {Array.from({ length: menu.ratings }, (_, idx) => (
                                        <div key={idx}>
                                            <MdStarRate />
                                        </div>
                                    ))}
                                </div>
                                <p className="">{menu.description}</p>
                                <div className="flex justify-between mt-5">
                                    <p className="font-righteous text-3xl">${menu.price}</p>
                                    <button
                                        className="outline outline-yellow outline-1 hover:outline-white hover:bg-yellow font-semibold py-2 px-4 text-black ease-in duration-300"
                                        onClick={() => handleAddToCart(menu)}
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center py-20">
                    <Circles
                        height="100"
                        width="100"
                        color="#facc15"
                        ariaLabel="circles-loading"
                        visible={true}
                    />
                </div>
            )}
        </div>
    );
};

export default Menu;
