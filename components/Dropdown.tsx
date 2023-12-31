"use-client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { NextPage } from "next";
import Image from "next/image";
import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";
import arrow from "@/public/arrow.svg";

interface Props {
  text: string | ReactNode;
  items: Array<{ label: any, link?: string, labelType?: string }>;
}

const Dropdown: NextPage<Props> = (props) => {
  const { changeLanguage } = useLanguageSwitcher();
  const { text, items } = props;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  };

  function closeDropdown() {
    setIsOpen(false);
  };

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  function handleChangeLanguage(labelType: string | null) {
    if (labelType && labelType.startsWith("language-")) {
      changeLanguage(labelType);
    }
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-center items-center w-full"
      >
        { text }
        <Image src={ arrow } alt="Arrow" />
      </button>

      {isOpen && (
        <div className="z-10 origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                onClick={() => handleChangeLanguage(item.labelType ?? "")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
