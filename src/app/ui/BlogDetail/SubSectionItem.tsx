import React from "react";

interface SubsectionItemProps {
  id: string;
  title: string;
  description: string;
}

const SubsectionItem: React.FC<SubsectionItemProps> = ({
  id,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col gap-2">
      <h3 className="text-base font-bold text-emerald-500">
        {id} {title}
      </h3>
      <p className="text-base text-stone-800">{description}</p>
    </article>
  );
};

export default SubsectionItem;
