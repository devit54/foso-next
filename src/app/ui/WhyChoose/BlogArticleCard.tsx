"use client";

import React from "react";

interface BlogArticleCardProps {
  imageUrl: string;
  tag: string;
  title: string;
  date: string;
  readTime: string;
}

export const BlogArticleCard: React.FC<BlogArticleCardProps> = ({
  imageUrl,
  tag,
  title,
  date,
  readTime,
}) => {
  return (
    <article className="overflow-hidden flex-1 shrink self-stretch my-auto basis-0 min-w-60 max-md:max-w-full">
      <img
        src={imageUrl}
        alt={title}
        className="object-contain w-full rounded-3xl aspect-[1.06] max-md:max-w-full"
      />
      <div className="flex flex-col pt-6 w-full max-md:max-w-full">
        <span className="gap-2.5 self-start px-2 py-1 text-xs font-medium text-blue-800 bg-sky-100 rounded-lg">
          {tag}
        </span>
        <h3 className="flex-1 shrink gap-2 self-stretch mt-4 w-full text-2xl font-extrabold leading-9 text-gray-700 basis-0 max-md:max-w-full">
          {title}
        </h3>
        <div className="flex gap-3 justify-center items-center self-start mt-4 text-base font-medium text-slate-500">
          <div className="flex gap-2 items-center self-stretch my-auto whitespace-nowrap">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c076e60308973c26bcd7092da03591883794fbd4d72ed3208a9d835930708069?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367"
              alt="Calendar icon"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <time className="self-stretch my-auto">{date}</time>
          </div>
          <div className="shrink-0 self-stretch w-0 h-6 border border-solid bg-zinc-200 border-zinc-200" />
          <div className="flex gap-2 items-center self-stretch my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0974304eb933f703aeb4e56c2088f6978ef411f1802b1df504467284c2fd316a?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367"
              alt="Clock icon"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <span className="self-stretch my-auto">{readTime}</span>
          </div>
        </div>
        <div className="flex gap-4 items-center mt-4 w-full max-md:max-w-full">
          <button className="flex gap-4 items-center self-stretch my-auto">
            <span className="self-stretch my-auto text-lg font-semibold text-slate-500">
              Khám phá thêm
            </span>
            <div className="flex gap-2.5 items-center self-stretch p-3 my-auto w-12 rounded-[40px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6c016322419213175b7578550bb6667b8a41488f57f30f8d6c3a451202cccb8?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367"
                alt="Arrow right"
                className="object-contain self-stretch my-auto w-6 aspect-square"
              />
            </div>
          </button>
        </div>
      </div>
    </article>
  );
};
