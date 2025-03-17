"use client";

import React from "react";

interface ReactionItemProps {
  imageUrl: string;
  altText: string;
  count: number;
  label: string;
  isActive?: boolean;
}

const ReactionItem: React.FC<ReactionItemProps> = ({
  imageUrl,
  altText,
  count,
  label,
  isActive = false,
}) => {
  return (
    <article className="flex flex-col gap-1 justify-center items-center p-1 rounded w-[90px] max-sm:w-20">
      <img
        src={imageUrl}
        className="w-12 h-12 max-sm:w-10 max-sm:h-10"
        alt={altText}
      />
      <p className={`text-base font-bold leading-6 text-center ${isActive ? 'text-emerald-700' : 'text-gray-700'}`}>
        {count}
      </p>
      <p className={`text-sm font-medium leading-5 text-center ${isActive ? 'text-emerald-700' : 'text-gray-700'}`}>
        {label}
      </p>
    </article>
  );
};

export default ReactionItem;
