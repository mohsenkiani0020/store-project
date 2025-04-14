"use client";
import nookies from "nookies";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

function Register() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
      name: "",
      lastName: "",
      mobile: "",
    },
    onSubmit(values) {
      console.log(values);

      const response = {
        token: "mohsenkianisfsfsfssfsfsfsfsfsf",
      };
      nookies.set(null, "token", response.token, {
        maxAge: 60 * 60 * 1,
        path: "/",
      });
      router.replace("/dashboard");
    },
    validationSchema: Yup.object({
      name: Yup.string().required("نام الزامی است"),
      lastName: Yup.string().required("نام خانوادگی الزامی است"),
      mobile: Yup.string()
        .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست")
        .required("شماره موبایل الزامی است"),
      username: Yup.string().trim().required("نام کاربری الزامی است"),
      password: Yup.string()
        .min(6, "رمز عبور نامعتبر است")
        .required("رمز عبور الزامی است"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "رمز عبور با تکرار آن مطابقت ندارد")
        .required("تکرار رمز عبور الزامی است"),
    }),
  });
  return (
    <form className="w-full" onSubmit={formik.handleSubmit}>
      <div className="w-full px-10 flex flex-col gap-4">
        <h1 className="font-bold text-4xl textce text-customPurple-900">
          ثبت نام
        </h1>
        <div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="نام"
              className="input w-full rounded-full input-sm input-primary bg-customPurple-100/25 mb-2.5"
              {...formik.getFieldProps("name")}
            />
            <input
              type="text"
              placeholder="نام خانوادگی"
              className="input w-full rounded-full input-sm input-primary bg-customPurple-100/25 mb-2.5"
              {...formik.getFieldProps("lastName")}
            />
          </div>
          <div className="flex flex-col gap-1">
            {formik.errors.name ? (
              <span className="text-red-600 text-small">
                {formik.errors.name}
              </span>
            ) : null}
            {formik.errors.lastName ? (
              <span className="text-red-600 text-small ">
                {formik.errors.lastName}
              </span>
            ) : null}
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="شماره موبایل"
            className="input w-full rounded-full input-sm input-primary bg-customPurple-100/25 mb-2.5"
            {...formik.getFieldProps("mobile")}
          />
          {formik.errors.mobile ? (
            <span className="text-red-600 text-small">
              {formik.errors.mobile}
            </span>
          ) : null}
        </div>
        <div>
          <input
            type="text"
            placeholder="نام کاربری"
            className="input w-full rounded-full input-sm input-primary bg-customPurple-100/25 mb-2.5"
            {...formik.getFieldProps("username")}
          />
          {formik.errors.username ? (
            <span className="text-red-600 text-small">
              {formik.errors.username}
            </span>
          ) : null}
        </div>
        <div>
          <input
            type="password"
            placeholder="پسورد"
            className="input w-full rounded-full input-sm input-primary bg-customPurple-100/25 mb-2.5"
            {...formik.getFieldProps("password")}
          />
          {formik.errors.password ? (
            <span className="text-red-600 text-small">
              {formik.errors.password}
            </span>
          ) : null}
        </div>
        <div>
          <input
            type="password"
            placeholder="تکرار پسورد"
            className="input w-full rounded-full input-sm input-primary bg-customPurple-100/25 mb-2.5"
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.errors.confirmPassword ? (
            <span className="text-red-600 text-small">
              {formik.errors.confirmPassword}
            </span>
          ) : null}
        </div>
        <button
          type="submit"
          className="btn bg-customPurple-400 rounded-full text-white"
        >
          ثبت نام
        </button>
        <button className="text-customPurple-400 text-small cursor-pointer">
          <Link href="/auth/login">قبلا ثبت نام کردم</Link>
        </button>
      </div>
    </form>
  );
}

export default Register;
