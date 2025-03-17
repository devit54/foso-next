import React from "react";
import { SocialIcon } from "./SocialIcon";

interface ShareButtonProps {
  network: string;
  icon: string;
  onClick: () => void;
}

export const ShareButton: React.FC<ShareButtonProps> = ({
  network,
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={`Share on ${network}`}
      className="flex justify-center items-center p-3 rounded-2xl border border-emerald-500 border-solid cursor-pointer max-sm:p-2.5"
    >
      <SocialIcon svg={icon} />
    </button>
  );
};
