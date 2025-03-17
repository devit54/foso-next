"use client";
import React from "react";
import { BlogBreadcrumb } from "./BlogBreadcrumb";
import { BlogTitle } from "./BlogTitle";
import { DecorativeElements } from "@/app/ui/BlogHeader/DecorativeElements";

export const BlogHeader: React.FC = () => {
  return (
    <section className="flex relative gap-10 justify-center items-start px-80 max-md:px-5">
      <DecorativeElements />
      <main className="z-0 flex-1 shrink self-stretch pt-12 pb-4 my-auto w-full text-center basis-[124px] min-h-[392px] min-w-60 text-zinc-950 max-md:max-w-full">
        <BlogBreadcrumb />
        <BlogTitle />
      </main>
    </section>
  );
};

export default BlogHeader;
