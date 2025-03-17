"use client";

import * as React from "react";

interface BlockQuoteProps {
  children: React.ReactNode;
  className?: string;
}


const BlockQuote: React.FC<BlockQuoteProps> = ({
  children,
  className = "",
}) => {
  return (
    <blockquote
      className={`gap-2.5 self-stretch pt-3 pr-4 pb-2 pl-9 text-xl italic font-medium leading-7 text-gray-700 border-emerald-500 border-l-[3px] w-[778px] max-md:pl-5 max-md:max-w-full ${className}`}
    >
      {children}
    </blockquote>
  );
};

export default BlockQuote;
