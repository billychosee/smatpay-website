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
    <ul 
      className={`absolute ${activeDropdown === item.href ? 'block' : 'hidden'} group-hover:block bg-white shadow-lg rounded-md text-black font-normal w-56 z-50 py-2 transition-all duration-200 ease-out border border-gray-100`}
      onMouseEnter={() => setActiveDropdown(item.href)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      {item.dropdown.items.map((subItem: DropdownItem) => (
        <li key={subItem.href}>
          <Link
            href={subItem.href}
            className="block px-4 py-2.5 hover:bg-gray-50 hover:text-[#8DC440] transition-colors text-sm"
          >
            {subItem.label}
          </Link>
        </li>
      ))}
    </ul>
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
              <Link 
                href={item.href} 
                className={`flex flex-col items-center text-xs xl:text-xs lg:text-[10px]  tracking-tight transition-colors ${activeDropdown === item.href ? 'text-white' : 'text-white hover:text-[#9f40c4]'}`}
                target={item.href.startsWith('http') ? '_blank' : undefined}
              >
                <span>{item.label}</span>
              </Link>
              {hasDropdown(item) && renderDropdown(item)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
