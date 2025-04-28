import localFont from "next/font/local";

const vazir = localFont({
  src: [
    {
      path: "./Vazirmatn-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Vazirmatn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Vazirmatn-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Vazirmatn-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./Vazirmatn-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./Vazirmatn-Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
});

export default vazir;
