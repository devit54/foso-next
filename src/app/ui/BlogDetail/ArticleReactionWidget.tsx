"use client";

import React from "react";
import ReactionButton from "./ReactionButton";

const ArticleReactionWidget: React.FC = () => {
  const reactions = [
    {
      id: 1,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1f5cc5b454074108e1c49e039f1681dc7946a562",
      altText: "Thumbs up",
      count: 1,
      label: "Hữu ích",
      isActive: true,
    },
    {
      id: 2,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/22b94398061e825960a43a59355da2dc53c496dd",
      altText: "Heart",
      count: 2,
      label: "Yêu thích",
      isActive: false,
    },
    {
      id: 3,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c91f5c8c1010609b98756be793f16ff35b70e4dc",
      altText: "Star struck",
      count: 0,
      label: "Thú vị",
      isActive: false,
    },
    {
      id: 4,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c6435210b3e9bfc56e8ab04485eb78c9baefc481",
      altText: "Hushed face",
      count: 1,
      label: "Bất ngờ",
      isActive: false,
    },
    {
      id: 5,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9c93a844603eab825e873f9212e7959f6595bf26",
      altText: "Yawning face",
      count: 0,
      label: "Nhàm chán",
      isActive: false,
    },
    {
      id: 6,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/25009d8d2fef3850db4a0be0a18beeb1ce4804b0",
      altText: "Pouting face",
      count: 0,
      label: "Tức giận",
      isActive: false,
    },
  ];

  return (
    <section className="flex flex-col gap-2.5 items-start px-0 py-12 w-full">
      <article className="flex flex-col gap-6 items-center px-0 py-6 w-full bg-white rounded-3xl shadow-[0_1px_3px_rgba(18,18,23,0.1),0_1px_2px_rgba(18,18,23,0.06)]">
        <header className="flex flex-col gap-1 items-center w-full">
          <h2 className="text-xl font-extrabold leading-8 text-center text-gray-700 max-sm:text-lg">
            Bạn thấy bài viết như thế nào?
          </h2>
          <p className="text-base font-medium leading-6 text-center text-gray-700 max-sm:text-sm">
            4 phản hồi
          </p>
        </header>

        <div className="flex flex-wrap gap-8 justify-center items-center max-md:gap-6 max-sm:gap-4 max-sm:px-4 max-sm:py-0">
          {reactions.map((reaction) => (
            <ReactionButton
              key={reaction.id}
              imageUrl={reaction.imageUrl}
              altText={reaction.altText}
              count={reaction.count}
              label={reaction.label}
              isActive={reaction.isActive}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default ArticleReactionWidget;
