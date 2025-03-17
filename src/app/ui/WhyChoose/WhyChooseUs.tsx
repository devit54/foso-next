"use client";

import React, { useState } from "react";
import { BlogArticleCard } from "./BlogArticleCard";
import { FeaturedBanner } from "./FeaturedBanner";
import { SearchSection } from "./SearchSection";
import { CategoriesSection } from "./CategoriesSection";
import { SidebarBanner } from "./SidebarBanner";
import { PaginationControls } from "./PaginationControls";

const blogArticles = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/98a429cf0b575631d72ceb89632b738c235f329e08d0baac119964161d52287f?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367",
    tag: "Quản Lý Sản Xuất",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    date: "17/11/2022",
    readTime: "10 phút đọc",
  },
  // Repeated 5 more times for the grid
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/98a429cf0b575631d72ceb89632b738c235f329e08d0baac119964161d52287f?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367",
    tag: "Quản Lý Sản Xuất",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    date: "17/11/2022",
    readTime: "10 phút đọc",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/98a429cf0b575631d72ceb89632b738c235f329e08d0baac119964161d52287f?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367",
    tag: "Quản Lý Sản Xuất",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    date: "17/11/2022",
    readTime: "10 phút đọc",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/98a429cf0b575631d72ceb89632b738c235f329e08d0baac119964161d52287f?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367",
    tag: "Quản Lý Sản Xuất",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    date: "17/11/2022",
    readTime: "10 phút đọc",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/98a429cf0b575631d72ceb89632b738c235f329e08d0baac119964161d52287f?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367",
    tag: "Quản Lý Sản Xuất",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    date: "17/11/2022",
    readTime: "10 phút đọc",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/98a429cf0b575631d72ceb89632b738c235f329e08d0baac119964161d52287f?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367",
    tag: "Quản Lý Sản Xuất",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    date: "17/11/2022",
    readTime: "10 phút đọc",
  },
];

export const WhyChooseUs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <main className="flex flex-col justify-center px-60 max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
            <section className="flex-1 shrink basis-0 min-w-60 max-md:max-w-full">
              <h1 className="text-4xl font-extrabold capitalize leading-[72px] text-zinc-950 max-md:max-w-full">
                Tất cả bài viết
              </h1>
              <FeaturedBanner />
              <div className="flex flex-wrap gap-8 items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
                {blogArticles.map((article, index) => (
                  <BlogArticleCard key={index} {...article} />
                ))}
              </div>
            </section>

            <aside className="flex flex-col justify-center min-w-60 w-[366px]">
              <SearchSection />
              <CategoriesSection />
              <SidebarBanner />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/783a1a284ea345f473457e75b5df3b50f35d02bb69f092f5606df9c44e4969bd?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367"
                alt="Additional banner"
                className="object-contain mt-8 max-w-full rounded-3xl aspect-[0.56] w-[366px]"
              />
            </aside>
          </div>
        </div>
      </div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
      />
    </main>
  );
};

export default WhyChooseUs;
