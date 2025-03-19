"use client";

import React from "react";

export const FeaturedBanner: React.FC = () => {
  return (
    <section className="mt-6 w-full max-md:max-w-full">
      <div className="overflow-hidden w-full rounded-[40px] max-md:max-w-full bg-emerald-500">
        <div className="px-7 pt-6 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex z-10 flex-col justify-center self-stretch my-auto mr-0 w-full max-md:mt-10 max-md:max-w-full md:pb-2">
                <h2 className="text-4xl font-bold text-white">
                  Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
                </h2>
                <button className="flex gap-8 items-center self-start  px-6 py-2 mt-8 border-2 border-solid border-white rounded-[40px] max-md:px-5">
                  <span className="self-stretch my-auto text-sm font-bold text-white capitalize">
                    tham gia ngay
                  </span>
                  <div className="flex items-center self-stretch p-2 my-auto rounded-[40px] w-[34px]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dadb7a9298384322066b40fa30604ab9bdbe977fb89b74afab4d684d05d43b1?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367"
                      alt="Arrow right"
                      className="object-contain self-stretch my-auto aspect-square w-[18px]"
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/909e3c9d3c0b8059e2d06e25e0a6c7463536b23bfe549240d529837757c75608?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367"
                alt="Featured banner"
                className="object-contain grow w-full aspect-[1.61] max-md:mt-6 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
