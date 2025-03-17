import React from "react";

interface CategoryTagProps {
  category: string;
}

/**
 * CategoryTag component displays a category label with a blue background
 */
const CategoryTag: React.FC<CategoryTagProps> = ({ category }) => {
  return (
    <span className="gap-2.5 px-2 py-1 text-xs font-medium leading-5 text-blue-800 bg-sky-100 rounded-lg">
      {category}
    </span>
  );
};

export default CategoryTag;
