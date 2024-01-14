import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getCartTotal,
    removeItem,
    decreaseItemQuantity,
    increaseItemQuantity,
} from "../store/cartSlice";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const CartPage = () => {
    const { cart, totalQuantity, totalPrice } = useSelector(
        (state) => state.allCart
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);

    return (
        <div className="bg-stone-100 font-poppins py-20 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cart?.map((data) => (
                    <div key={data.id} className="bg-white p-2 relative">
                        <div className="mt-10 flex justify-center">
                            <img src={data.image} alt={data.title} />
                        </div>
                        <p className="font-righteous text-center my-10 text-2xl">{data.title}</p>
                        <button
                            className="flex items-center gap-1 p-1 text-3xl font-bold absolute top-1 right-1"
                            onClick={() => dispatch(removeItem(data.id))}
                        >
                            <IoClose />
                        </button>

                        <div className="flex justify-between my-5">
                            <button
                                className="bg-yellow-400 py-2 px-3"
                                onClick={() => dispatch(decreaseItemQuantity(data.id))}
                                disabled={data.quantity == 0}
                            >
                                <FaMinus />
                            </button>

                            <span className="text-3xl font-bold">{data.quantity}</span>

                            <button
                                className="bg-yellow-400 py-2 px-3"
                                onClick={() => dispatch(increaseItemQuantity(data.id))}
                            >
                                <FaPlus />
                            </button>
                        </div>


                        <p className="text-2xl">
                            <strong>{data.price}</strong>
                        </p>
                    </div>
                ))}
            </div>

            <div className="bg-white p-3 mt-20 w-68 md:w-96">
                <h2 className="font-righteous text-2xl mb-5 font-semibold">Order Summary</h2>
                <ul className="font-semibold">
                    <li className="flex gap-5">
                        <span>Total Quantity:</span>
                        <span>{totalQuantity}</span>
                    </li>

                    <li className="flex gap-7">
                        <span>Total amount:</span>
                        <span>{totalPrice}</span>
                    </li>
                </ul>
                <button className="bg-yellow-400 py-2 px-5 font-semibold mt-5">
                    Go to Checkout
                </button>
            </div>
        </div>
    );
};

export default CartPage;
