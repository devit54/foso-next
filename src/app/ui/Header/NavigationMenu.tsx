import * as React from "react";
import { CaretDownIcon } from "../icons/CaretDownIcon";

export const NavigationMenu: React.FC = () => {
  const [resourcesOpen, setResourcesOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setResourcesOpen(false);
      }
    };

    if (resourcesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [resourcesOpen]);

  return (
    <nav className="flex gap-2 justify-center items-center max-md:hidden">
      <a
        href="#about"
        className="px-2 text-sm font-medium leading-5 h-[37px] text-zinc-800 flex items-center"
      >
        Về Chúng tôi
      </a>
      <button className="flex gap-2 justify-center items-center px-2 h-[37px]">
        <span className="text-sm font-medium leading-5 text-zinc-800">
          Giải pháp
        </span>
        <CaretDownIcon />
      </button>
      <div className="relative" ref={dropdownRef}>
        <button
          className="flex gap-2 justify-center items-center px-2 h-[37px]"
          onClick={() => setResourcesOpen(!resourcesOpen)}
          aria-expanded={resourcesOpen}
          aria-haspopup="true"
        >
          <span className="text-sm font-bold leading-5 text-zinc-800">
            Tài nguyên
          </span>
          <CaretDownIcon />
        </button>
        {resourcesOpen && (
          <div className="absolute top-[calc(100%+4px)] left-0 min-w-[200px] bg-white bg-opacity-70 backdrop-blur-[12.5px] rounded-[16px] shadow-lg py-2 z-[100] border border-gray-100">
            <a
              href="/blog/productManagement"
              className="block px-4 py-3 text-sm text-zinc-800 hover:bg-green-300 hover:bg-opacity-5 transition-colors duration-200"
            >
              Blog
            </a>
            <a
              href="/blog/productManagement"
              className="block px-4 py-3 text-sm text-zinc-800 hover:bg-green-300 hover:bg-opacity-5 transition-colors duration-200"
            >
              Quản lý sản xuất
            </a>
          </div>
        )}
      </div>
      <a
        href="#contact"
        className="px-2 text-sm font-medium leading-5 h-[37px] text-zinc-800 flex items-center"
      >
        Liên hệ
      </a>
    </nav>
  );
};
