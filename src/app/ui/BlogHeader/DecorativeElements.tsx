import React from "react";

export const DecorativeElements: React.FC = () => {
  return (
    <>
      <div className="flex absolute bottom-16 z-0 shrink-0 h-7 bg-emerald-200 min-w-60 right-[559px] rounded-[40px] w-[273px]" />
      <div className="flex absolute left-0 z-0 flex-col px-11 py-10 bottom-[62px] h-[268px] min-w-60 w-[282px] max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ece964b03d0c88b8c17cd474977549f6ef9d8ee9659cc5b87b2b926c6dbdfa9?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367"
          alt=""
          className="object-contain aspect-[1.04] w-[195px]"
        />
      </div>
      <div className="flex absolute right-0 z-0 flex-col px-16 py-12 w-80 bottom-[70px] h-[251px] min-w-60 max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/340e18011dc83c4a72fb1520064bdf6f9342298390f54446d96d4b3991538580?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367"
          alt=""
          className="object-contain aspect-[1.23] w-[195px]"
        />
      </div>
    </>
  );
};
