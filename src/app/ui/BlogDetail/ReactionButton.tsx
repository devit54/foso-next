import React from "react";

interface ReactionButtonProps {
  imageUrl: string;
  altText: string;
  count: number;
  label: string;
  isActive?: boolean;
}

const ReactionButton: React.FC<ReactionButtonProps> = ({
  imageUrl,
  altText,
  count,
  label,
  isActive = false,
}) => {
  const textColorClass = isActive ? "text-emerald-700" : "text-gray-700";

  return (
    <button className="flex flex-col gap-1 justify-center items-center p-1 rounded w-[90px] max-sm:w-20 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200">
      <img
        src={imageUrl}
        alt={altText}
        className="w-12 h-12 max-sm:w-10 max-sm:h-10"
      />
      <strong
        className={`text-base font-bold leading-6 text-center ${textColorClass}`}
      >
        {count}
      </strong>
      <span
        className={`text-sm font-medium leading-5 text-center ${textColorClass}`}
      >
        {label}
      </span>
    </button>
  );
};

export default ReactionButton;
