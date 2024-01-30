import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getCartTotal,
    removeItem,
    decreaseItemQuantity,
    increaseItemQuantity,
} from "../store/cartSlice";
import { IoClose } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";

const CartPage = () => {
    const { cart, totalQuantity, totalPrice } = useSelector(
        (state) => state.allCart
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);

    return (
        <div className="bg-stone font-rubik py-20 px-2 md:px-32 lg:px-40 xl:px-72">
            <table className="w-full bg-white shadow-lg">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-3 px-1 md:px-6 text-left">Product</th>
                        <th className="py-3 px-1 md:px-6 text-left">Quantity</th>
                        <th className="py-3 px-1 md:px-6 text-left">Price</th>
                        <th className="py-3 px-1 md:px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart?.map((menu) => (
                        <tr key={menu._id} className="border-t border-gray">
                            <td className="py-4 px-1 md:px-6">
                                <div className="flex items-center">
                                    <img
                                        src={menu.imageUrl}
                                        alt={menu.title}
                                        className="hidden md:block w-10 h-10 object-cover rounded-full mr-4"
                                    />
                                    <div>
                                        <p className="text-sm font-semibold">{menu.title}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-4 px-1 md:px-6">
                                <div className="flex items-center md:gap-3">
                                    <button
                                        className="bg-yellow py-1 px-1 md:px-2 rounded-sm mr-1"
                                        onClick={() => dispatch(decreaseItemQuantity(menu._id))}
                                        disabled={menu.quantity === 0}
                                    >
                                        <FaMinus />
                                    </button>
                                    <span className="text-lg font-bold">{menu.quantity}</span>
                                    <button
                                        className="bg-yellow py-1 px-1 md:px-2 rounded-sm ml-1"
                                        onClick={() => dispatch(increaseItemQuantity(menu._id))}
                                    >
                                        <FaPlus />
                                    </button>
                                </div>
                            </td>
                            <td className="py-4 px-2 md:px-6 text-sm md:text-lg font-bold">
                                ${menu.price}
                            </td>
                            <td className="py-4 px-2 md:px-6 text-center">
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => dispatch(removeItem(menu._id))}
                                >
                                    <IoClose />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="bg-white p-6 mt-10 shadow-lg">
                <h2 className="text-2xl mb-5 font-semibold">Order Summary</h2>
                <ul className="font-semibold">
                    <li className="flex justify-between py-2">
                        <span>Total Quantity:</span>
                        <span>{totalQuantity}</span>
                    </li>
                    <li className="flex justify-between py-2">
                        <span>Total amount:</span>
                        <span>${totalPrice}</span>
                    </li>
                </ul>
                <button className="bg-yellow py-2 px-5 font-semibold mt-5">
                    Go to Checkout
                </button>
            </div>
        </div>
    );
};

export default CartPage;
