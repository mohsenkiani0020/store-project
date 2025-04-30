import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

if (typeof window !== "undefined") {
  store.subscribe(() => {
    localStorage.setItem("cart", JSON.stringify(store.getState().cart.items));
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;