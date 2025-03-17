"use client";
import * as React from "react";
import { NavigationMenu } from "@/app/ui/Header/NavigationMenu";
import { LanguageSelector } from "./LanguageSelector";
import { CTAButton } from "../BlogHeader/CTAButton";
import { MobileMenuToggle } from "@/app/ui/Header/MobileMenuToggle";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-center px-9 py-3 w-full">
      <div className="flex gap-16 justify-between items-center px-9 py-3 w-full max-w-screen-xl shadow-sm backdrop-blur-[[12.5px]] bg-white bg-opacity-70 rounded-[40px] max-md:px-6 max-md:py-3 max-sm:px-4 max-sm:py-3">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/893885c6e839b34a0b25fc4d50245bc3f13e23a1"
          alt="FOSO Logo"
          className="w-[134px] h-[55.41px] flex-shrink-0 max-lg:w-[100px] max-sm:w-[80px]"
        />
        <NavigationMenu />
        <div className="flex gap-2 items-center">
          <LanguageSelector />
          <CTAButton />
        </div>
        <MobileMenuToggle />
      </div>
    </header>
  );
};
