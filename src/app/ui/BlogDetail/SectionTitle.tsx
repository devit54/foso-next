import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <h2 className="mb-4 text-xl font-bold text-emerald-500">{title}</h2>;
};

export default SectionTitle;
