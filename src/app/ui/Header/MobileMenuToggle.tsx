import * as React from "react";
import { MenuIcon } from "../icons/MenuIcon";

export const MobileMenuToggle: React.FC = () => {
  return (
    <button className="hidden max-md:block">
      <MenuIcon />
    </button>
  );
};
