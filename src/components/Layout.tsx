"use client";
import { ChildrenProps } from "@/models/childrenPropsModel";
import Navbar from "./navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "@/store";
import CartInitializer from "./CartInitializer";

function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Provider store={store}>
        <CartInitializer />
        <Navbar />
        <main className="pt-18">{children}</main>
      </Provider>
    </>
  );
}

export default Layout;
