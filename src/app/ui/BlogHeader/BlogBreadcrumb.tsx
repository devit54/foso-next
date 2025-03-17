import React from "react";

export const BlogBreadcrumb: React.FC = () => {
  return (
    <nav className="flex-1 shrink gap-2.5 pb-16 w-full text-sm basis-0 max-md:max-w-full">
      <span className="text-[#171819]">Trang chủ &gt; Tài nguyên &gt;</span>{" "}
      <span className="font-semibold">Blog</span>
    </nav>
  );
};
