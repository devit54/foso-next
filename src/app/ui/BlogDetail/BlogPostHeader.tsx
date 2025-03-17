"use client";
import * as React from "react";
import CategoryTag from "./CategoryTag";
import AuthorInfo from "./AuthorInfo";
import PostMetadata from "./PostMetadata";

/**
 * BlogPostHeader component displays the header section of a blog post
 * including category tag, title, author information, and post metadata.
 */
const BlogPostHeader: React.FC = () => {
  return (
    <header className="flex flex-col gap-4 items-start p-6 w-full bg-white max-md:p-5 max-sm:p-4">
      <CategoryTag category="Quản Lý Sản Xuất" />

      <h1 className="text-4xl font-extrabold capitalize text-zinc-950 max-md:text-3xl max-sm:text-3xl">
        Quy Trình 5S Là Gì? Cách Ứng Dụng Hiệu Quả Nên Biết
      </h1>

      <section className="flex justify-between items-center pt-2 w-full max-sm:flex-col max-sm:gap-4 max-sm:items-start">
        <AuthorInfo name="FOSO Creator" role="Tác giả" />

        <PostMetadata updateDate="17/11/2022" readingTime="10 phút đọc" />
      </section>
    </header>
  );
};

export default BlogPostHeader;
