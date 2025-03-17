"use client";

import * as React from "react";

interface BulletPointProps {
  children: React.ReactNode;
  className?: string;
}

const BulletPoint: React.FC<BulletPointProps> = ({
  children,
  className = "",
}) => {
  return (
    <li
      className={`text-base font-medium leading-6 text-stone-800 ${className}`}
    >
      <span className="mr-2">•</span>
      {children}
    </li>
  );
};

export default BulletPoint;
