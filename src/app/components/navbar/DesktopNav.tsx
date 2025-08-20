"use client";
import { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "./config";
import type { NavItem, DropdownItem } from "./types"; 

function hasDropdown(item: NavItem): item is NavItem & { dropdown: { items: readonly DropdownItem[] } } {
  return !!item.dropdown;
}

export default function DesktopNav() {
  const [query, setQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const renderDropdown = (item: NavItem & { dropdown: { items: readonly DropdownItem[] } }) => (
  <div
    className={`absolute left-0 mt-0 ${
      activeDropdown === item.href ? "block" : "hidden"
    } group-hover:block`}
    onMouseEnter={() => setActiveDropdown(item.href)}
    onMouseLeave={() => setActiveDropdown(null)}
  >
    <div className="w-56 py-3 bg-white border border-gray-100 shadow-xl rounded-xl animate-fadeIn">
      <ul className="flex flex-col">
        {item.dropdown.items.map((subItem: DropdownItem, index) => (
          <li key={subItem.href}>
            <Link
              href={subItem.href}
              className="flex items-center px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4a2baf] rounded-md transition-colors duration-200"
            >
              {/* Optional bullet icon */}
              <span className="mr-2 text-[#9f40c4]">•</span>
              {subItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);


  return (
    <div className="flex items-center">
      <ul className="items-center justify-center flex-1 hidden gap-8 font-semibold text-black md:flex xl:gap-4 lg:gap-5">
        {NAV_ITEMS.map((item) => {
          return (
            <li 
              key={item.href} 
              className={`relative ${hasDropdown(item) ? 'group' : ''}`}
              onMouseEnter={() => hasDropdown(item) && setActiveDropdown(item.href)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div
  className={`flex items-center gap-1 text-xs xl:text-xs lg:text-[10px] transition-colors cursor-pointer ${
    activeDropdown === item.href ? 'text-white' : 'text-white hover:text-[#9f40c4]'
  }`}
>
  <Link
    href={item.href}
    target={item.href.startsWith('http') ? '_blank' : undefined}
    className="flex items-center gap-1"
  >
    <span>{item.label}</span>
    {hasDropdown(item) && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-3 h-3 transition-transform duration-300 ${
          activeDropdown === item.href ? 'rotate-180' : 'rotate-0'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    )}
  </Link>
</div>

              {hasDropdown(item) && renderDropdown(item)}
            </li>
          );
        })}
      </ul>
    </div>
  );

}

