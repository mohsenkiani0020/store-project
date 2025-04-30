
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {CartState , CartItems } from "@/models/cartItemsModel"



const initialState: CartState = {
  items:[],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOrUpdateItem: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.qty += 1;
      } else {
        state.items.push({ id: action.payload, qty: 1 });
      }
    },
    removeOrUpdateItem: (state, action: PayloadAction<number>) => {
      state.items = state.items
        .map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setCart: (state, action: PayloadAction<CartItems[]>) => {
      state.items = action.payload;
    },
  },
});

export const {
  addOrUpdateItem,
  removeOrUpdateItem,
  removeItem,
  setCart,
} = cartSlice.actions;

export default cartSlice.reducer;
