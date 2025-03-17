import React from "react";

export const BlogTitle: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="mt-2 text-6xl font-extrabold capitalize bg-clip-text leading-[100px] max-md:max-w-full max-md:text-4xl max-md:leading-[69px]">
        <span className="font-normal">Blog</span> FOSO{" "}
        <span className="font-normal">– </span>
        <br />
        <span className="font-normal">Cập Nhật Tin Tức </span>Mới Nhất
      </h1>
      <p className="mt-2 text-lg font-medium text-gray-700 max-md:max-w-full">
        Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
      </p>
    </div>
  );
};
