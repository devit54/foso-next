"use client";

import React from "react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <nav
      className="flex flex-wrap gap-10 justify-between items-center pt-5 mt-20 w-full text-base font-semibold min-h-[61px] max-md:mt-10 max-md:max-w-full"
      aria-label="Pagination"
    >
      <button
        className={`flex items-start self-stretch my-auto ${
          currentPage === 1 ? "text-slate-300" : "text-slate-600"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <div className="flex gap-2 justify-center items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/352d81ed67f8039452c16f5372563068d78d942eca9707c0bd92f56eac8dc5b3?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367"
            alt="Previous page"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <span className="self-stretch my-auto">Trang trước</span>
        </div>
      </button>

      <div className="flex gap-0.5 items-start self-stretch my-auto text-center whitespace-nowrap min-w-60 text-slate-400">
        {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && onPageChange(page)}
            className={`flex overflow-hidden gap-2.5 items-center w-10 h-10 rounded-lg ${
              currentPage === page ? "bg-emerald-100 text-emerald-950" : ""
            }`}
          >
            <span className="self-stretch px-3 py-2 my-auto w-10 rounded-lg min-h-10">
              {page}
            </span>
          </button>
        ))}
      </div>

      <button
        className={`flex items-start self-stretch my-auto ${
          currentPage === totalPages ? "text-slate-300" : "text-slate-600"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <div className="flex gap-2 justify-center items-center">
          <span className="self-stretch my-auto">Trang kế tiếp</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/abca23a72063c069b8971bad2ed3a21dddfccf956b3fad7b7b85c676c9073305?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367"
            alt="Next page"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </div>
      </button>
    </nav>
  );
};
