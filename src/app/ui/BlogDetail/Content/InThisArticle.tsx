"use client";
import * as React from "react";
import TableOfContents from "./TableOfContents";
import PromotionalBanner from "./PromotionalBanner";

function InThisArticle() {
  return (
    <article className="flex flex-col items-start mx-auto w-full max-w-[480px]">
      <TableOfContents />
      <PromotionalBanner />
    </article>
  );
}

export default InThisArticle;
