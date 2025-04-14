"use client";
import nookies from "nookies";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

function ForgotPassword() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      mobile: "",
    },
    onSubmit(values) {
      console.log(values);
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست")
        .required("شماره موبایل الزامی است"),

    }),
  });
  return (
    <form className="w-full" onSubmit={formik.handleSubmit}>
      <div className="w-full px-10 flex flex-col gap-4">
        <h1 className="font-bold text-4xl textce text-customPurple-900">
          بازیابی رمز عبور
        </h1>
        <div>
          <input
            type="text"
            placeholder="شماره موبایل"
            className="input w-full rounded-full input-lg input-primary bg-customPurple-100/25 mb-2.5"
            {...formik.getFieldProps("mobile")}
          />
          {formik.errors.mobile ? (
            <span className="text-red-600 text-small">
              {formik.errors.mobile}
            </span>
          ) : null}
        </div>

        <button
          type="submit"
          className="btn bg-customPurple-400 rounded-full text-white"
        >
          بازیابی
        </button>
      </div>
    </form>
  );
}

export default ForgotPassword;
