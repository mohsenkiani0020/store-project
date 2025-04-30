"use client";
import { ChildrenProps } from "@/models/childrenPropsModel";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import { store } from "@/store";
import CartInitializer from "./CartInitializer";

function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Provider store={store}>
        <CartInitializer />
        <Navbar />
        {children}
      </Provider>
    </>
  );
}

export default Layout;
