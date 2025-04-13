"use client";
import Container from "@/components/Container";
import nookies from "nookies";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      remember: false,
    },
    onSubmit(values) {
      const response = {
        token: "mohsenkianisfsfsfssfsfsfsfsfsf",
      };

      const cookieMaxAge = values.remember ? 60 * 60 * 24 * 7 : 60 * 60 * 1;

      nookies.set(null, "token", response.token, {
        maxAge: cookieMaxAge,
        path: "/",
      });
      router.replace("/dashboard");
    },
    validationSchema: Yup.object({
      username: Yup.string().trim().required("نام کاربری الزامی است"),
      password: Yup.string()
        .min(6, "رمز عبور نامعتبر است")
        .required("رمز عبور الزامی است"),
    }),
  });

  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-customPurple-400">
      <div className="grid grid-cols-12 w-7xl mx-auto rounded-4xl overflow-hidden shadow-2xl">
        <div className="col-span-4 bg-white flex justify-center items-center">
          <form className="w-full" onSubmit={formik.handleSubmit}>
            <div className="w-full px-10 flex flex-col gap-6">
              <h1 className="font-bold text-4xl textce text-customPurple-900">
                ورود
              </h1>
              <div>
                <input
                  type="text"
                  placeholder="نام کاربری"
                  className="input w-full rounded-full input-lg input-primary bg-customPurple-100/25 mb-2.5"
                  {...formik.getFieldProps("username")}
                />
                {formik.errors.username ? (
                  <span className="text-red-600 ">
                    {formik.errors.username}
                  </span>
                ) : null}
              </div>
              <div>
                <input
                  type="password"
                  placeholder="پسورد"
                  className="input w-full rounded-full input-lg input-primary bg-customPurple-100/25 mb-2.5"
                  {...formik.getFieldProps("password")}
                />
                {formik.errors.password ? (
                  <span className="text-red-600 ">
                    {formik.errors.password}
                  </span>
                ) : null}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-row-reverse justify-between items-center gap-2">
                  <label htmlFor="remember" className="text-small">
                    منو به خاطر بسپار
                  </label>
                  <input
                    id="remember"
                    className="checkbox checkbox-sm checkbox-primary"
                    type="checkbox"
                    {...formik.getFieldProps("remember")}
                  />
                </div>
                <button className="text-small cursor-pointer">
                  فراموشی رمز عبور؟
                </button>
              </div>
              <button
                type="submit"
                className="btn bg-customPurple-400 rounded-full text-white"
              >
                ورود
              </button>
              <button className="text-customPurple-400 text-small cursor-pointer">
                ثبت نام حساب
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-8">
          <div className="relative w-full h-[85vh] ">
            <Image
              src="/images/login.webp"
              alt="login"
              fill
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

export default Login;
