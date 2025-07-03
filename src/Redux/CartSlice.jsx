// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// ✅ Load from localStorage if available
const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
const totalP=JSON.parse(localStorage.getItem('totalP'))||0;
const totalQ=JSON.parse(localStorage.getItem('totalQ'))||0;

const initialState = {
  cartItems: savedCart,
  totalQuantity: totalQ,
  totalPrice: totalP,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      cartSlice.caseReducers.calculateTotal(state);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      localStorage.setItem('totalP',JSON.stringify(state.totalPrice));
      localStorage.setItem('totalQ',JSON.stringify(state.totalQuantity));
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
      cartSlice.caseReducers.calculateTotal(state);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      localStorage.setItem('totalP',JSON.stringify(state.totalPrice));
      localStorage.setItem('totalQ',JSON.stringify(state.totalQuantity));
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      cartSlice.caseReducers.calculateTotal(state);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      localStorage.setItem('totalP',JSON.stringify(state.totalPrice));
      localStorage.setItem('totalQ',JSON.stringify(state.totalQuantity));
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      cartSlice.caseReducers.calculateTotal(state);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      localStorage.setItem('totalP',JSON.stringify(state.totalPrice));
      localStorage.setItem('totalQ',JSON.stringify(state.totalQuantity));
    },

    calculateTotal: (state) => {
      let total = 0;
      let quantity = 0;
      state.cartItems.forEach((item) => {
        total += item.price * item.quantity;
        quantity += item.quantity;
      });
      state.totalPrice = total;
      state.totalQuantity = quantity;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
