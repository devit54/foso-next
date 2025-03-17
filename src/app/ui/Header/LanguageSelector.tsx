import * as React from "react";
import { CaretDownIcon } from "../icons/CaretDownIcon";
import { VietnamFlagIcon } from "../icons/VietnamFlagIcon";

export const LanguageSelector: React.FC = () => {
  return (
    <button className="flex gap-3 justify-center items-center px-3 py-2 bg-[linear-gradient(0deg,rgba(9,9,11,0.05)_0%,rgba(9,9,11,0.10)_100%)] border-[1px_solid_rgba(9,9,11,0.05)] rounded-[40px]">
      <VietnamFlagIcon />
      <div className="flex gap-1 items-center">
        <span className="text-sm font-medium leading-5 text-zinc-800">VI</span>
        <CaretDownIcon />
      </div>
    </button>
  );
};
