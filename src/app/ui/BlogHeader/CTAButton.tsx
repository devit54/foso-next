import * as React from "react";
import { ArrowUpRightIcon } from "../icons/ArrowUpRightIcon";

export const CTAButton: React.FC = () => {
  return (
    <button className="flex gap-3 justify-center items-center px-3 py-2 bg-[radial-gradient(100%_100%_at_50%_0%,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.00)_100%),#1AD598] border-[1px_solid_#A3EED6] rounded-[40px] max-sm:hidden">
      <span className="text-sm font-bold leading-5 capitalize text-emerald-950">
        Trở thành khách hàng
      </span>
      <div className="flex items-center p-1 bg-black rounded-[40px]">
        <ArrowUpRightIcon />
      </div>
    </button>
  );
};
