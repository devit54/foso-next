import React from "react";
import CalendarIcon from "./CalendarIcon";
import ClockIcon from "./ClockIcon";

interface PostMetadataProps {
  updateDate: string;
  readingTime: string;
}

/**
 * PostMetadata component displays post metadata including update date and reading time
 */
const PostMetadata: React.FC<PostMetadataProps> = ({
  updateDate,
  readingTime,
}) => {
  return (
    <div className="flex gap-6 items-center max-sm:gap-4">
      <div className="flex gap-2 items-center">
        <CalendarIcon />
        <time className="text-base font-medium leading-6 text-slate-500">
          Cập nhật vào: {updateDate}
        </time>
      </div>
      <div className="w-px h-6 bg-zinc-200" aria-hidden="true" />
      <div className="flex gap-2 items-center">
        <ClockIcon />
        <span className="text-base font-medium leading-6 text-slate-500">
          {readingTime}
        </span>
      </div>
    </div>
  );
};

export default PostMetadata;
