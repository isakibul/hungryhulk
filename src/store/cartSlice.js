import { createSlice } from "@reduxjs/toolkit";
import { RegularMenuItem } from "../assets/data/regularMenu";

const initialState = {
  cart: getCartFromLocalStorage(),
  items: RegularMenuItem,
  totalQuantity: 0,
  totalPrice: 0,
};

function getCartFromLocalStorage() {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
}

function saveCartToLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }

      saveCartToLocalStorage(state.cart);
    },

    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const numericPrice = parseFloat(price.replace("$", ""));
          const itemTotal = numericPrice * quantity;

          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalQuantity: 0,
          totalPrice: 0,
        }
      );

      state.totalPrice = Math.ceil(parseFloat(totalPrice.toFixed(2)));
      state.totalQuantity = totalQuantity;
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(state.cart);
    },

    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      saveCartToLocalStorage(state.cart);
    },

    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      saveCartToLocalStorage(state.cart);
    },
  },
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
