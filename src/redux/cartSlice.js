import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    search: ""
  },

  reducers: {

    addToCart: (state, action) => {

      const item = state.cartItems.find(
        p => p.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1
        });
      }

    },

    removeFromCart: (state, action) => {

      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );

    },

    increaseQty: (state, action) => {

      const item = state.cartItems.find(
        i => i.id === action.payload
      );

      if (item) item.quantity += 1;

    },

    decreaseQty: (state, action) => {

      const item = state.cartItems.find(
        i => i.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    }

  }

});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
  setSearch
} = cartSlice.actions;

export default cartSlice.reducer;