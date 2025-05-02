"use client";
import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function App() {
  const router = useRouter();

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    created(s) {
      let timeout: ReturnType<typeof setTimeout>;
      let mouseOver = false;

      const clearNextTimeout = () => clearTimeout(timeout);
      const nextTimeout = () => {
        clearNextTimeout();
        if (mouseOver) return;
        timeout = setTimeout(() => s.next(), 2000);
      };

      s.on("created", () => {
        s.container.addEventListener("mouseover", () => {
          mouseOver = true;
          clearNextTimeout();
        });
        s.container.addEventListener("mouseout", () => {
          mouseOver = false;
          nextTimeout();
        });
        nextTimeout();
      });

      s.on("dragStarted", clearNextTimeout);
      s.on("animationEnded", nextTimeout);
      s.on("updated", nextTimeout);
    },
  });

  const images = [
    "/images/carousel/slider1.jpg",
    "/images/carousel/slider2.jpg",
    "/images/carousel/slider3.jpg",
  ];

  const navButtonClass =
    "absolute top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70 cursor-pointer hover:bg-gray-500 ";

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider h-[90vh]">
        {images.map((img, idx) => (
          <div key={idx} className="keen-slider__slide">
            <div
              className="w-full h-full bg-cover bg-[center_top] flex justify-end items-center text-white"
              style={{ backgroundImage: `url('${img}')` }}
            >
              <div className="w-2/4 pr-20">
                <h1 className="text-h1 border-r-2 pr-2">
                  کالکشن <br />
                  تابستانه
                </h1>
                <h2 className="text-h2">قیمت‌های جدید و شگفت‌انگیز</h2>
                <h3 className="text-h3">
                  با استایل‌های خاص این فصل بدرخشید – همین حالا خرید کنید!
                </h3>
                <button
                  onClick={() => router.push("/store")}
                  className="bg-black py-2 px-12 rounded-md mt-4 font-bold hover:bg-gray-500 cursor-pointer"
                >
                  خرید
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => instanceRef.current?.prev()}
        className={`${navButtonClass} left-5`}
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className={`${navButtonClass} right-5`}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
