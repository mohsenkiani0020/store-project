import { ChildrenProps } from "@/models/childrenPropsModel";
import Image from "next/image";
import React from "react";

function AuthLayout({ children }: ChildrenProps) {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-customPurple-400">
      <div className="grid grid-cols-12 w-7xl mx-auto rounded-4xl overflow-hidden shadow-2xl">
        <div className="col-span-4 bg-white flex justify-center items-center">
          {children}
        </div>
        <div className="col-span-8">
          <div className="relative w-full h-[85vh] ">
            <Image
              src="/images/login.webp"
              alt="login"
              fill
              priority 
              className="object-cover"
            />
            <div className="absolute h-[45vh] w-full flex justify-center items-center flex-col">
              <div className="backdrop-blur p-6 flex justify-center items-center flex-col gap-4 w-full">
                <h1 className=" text-customPurple-900 text-5xl font-bold ">
                  به فروشگاه خوش آمدید
                </h1>
                <p className=" text-customPurple-900 font-bold text-xl">
                  تمامی محصولات خود رو از سایت ما پیدا کنید
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
