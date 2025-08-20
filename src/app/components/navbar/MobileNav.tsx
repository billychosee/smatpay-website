"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "./config";
import type { NavItem, DropdownItem } from "./types";

// Helper function to check if a navigation item has a dropdown
function hasDropdown(item: NavItem): item is NavItem & { dropdown: { items: readonly DropdownItem[] } } {
  return !!item.dropdown;
}

// Hamburger icon component with animation
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="relative flex flex-col items-center justify-center w-6 h-6">
    {/* Top line */}
    <span
      className={`block w-full h-0.5 bg-white absolute transition-all duration-300 ease-in-out transform ${
        isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
      }`}
    ></span>
    {/* Middle line */}
    <span
      className={`block w-full h-0.5 bg-white absolute transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-0' : ''
      }`}
    ></span>
    {/* Bottom line */}
    <span
      className={`block w-full h-0.5 bg-white absolute transition-all duration-300 ease-in-out transform ${
        isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
      }`}
    ></span>
  </div>
);

// This is the actual MobileNav component that should be exported
export default function MobileNav({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      onToggle();
    }
  }, [onToggle]);

  useEffect(() => {
    if (!isOpen) setOpenDropdown(null);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleClickOutside]);

  const renderDropdownItems = (items: readonly DropdownItem[]) => (
    <ul className="ml-6 mt-1 flex flex-col gap-1 border-l-2 border-[#8DC440] pl-4">
      {items.map((subItem, index) => (
        <li key={subItem.href}
            className="translate-x-4 opacity-0 animate-fadeInSlideIn"
            style={{ animationDelay: `${0.1 + index * 0.05}s` }}
        >
          <a
            href={subItem.href}
            className="block py-2.5 px-4 hover:bg-[#4a2baf] rounded-lg hover:text-[#8DC440] text-sm transition-colors duration-200"
            onClick={onToggle}
          >
            {subItem.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Hamburger Button to toggle mobile menu (hidden on md and larger screens) */}
      <button
        onClick={onToggle}
        className="relative z-50 p-2 text-white md:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        <HamburgerIcon isOpen={isOpen} />
      </button>

      {/* Overlay for background dimming when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 transition-opacity duration-500 ease-out bg-black bg-opacity-0 md:hidden"
          style={{ opacity: isOpen ? '0.5' : '0' }}
        ></div>
      )}

      {/* Mobile Navigation Sidebar */}
      <div
        ref={menuRef}
        className={`fixed right-0 top-0 bottom-0 z-80 flex flex-col w-3/4 max-w-sm p-6 bg-[#2f1991] shadow-2xl transform transition-transform duration-500 ease-in-out rounded-l-2xl
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#4a2baf]">
          <Link href="/" onClick={onToggle}>
            <Image src="/smatpay_white_logo.svg" alt="SmatPay White Logo" width={150} height={50} className="w-32 h-auto" />
          </Link>
          <button
            onClick={onToggle}
            className="p-2 text-white rounded-full hover:bg-[#4a2baf] focus:outline-none transition-colors duration-200"
            aria-label="Close menu"
          >
            <HamburgerIcon isOpen={isOpen} />
          </button>
        </div>

        {/* Navigation Items List */}
        <ul className="flex flex-col flex-1 gap-2 pb-4 overflow-y-auto font-semibold text-white">
          {NAV_ITEMS.map((item, index) => (
            <li
              key={item.href}
              className={`border-b border-[#4a2baf] last:border-0 opacity-0 transform ${isOpen ? 'animate-fadeInSlideIn' : ''}`}
              style={{ animationDelay: isOpen ? `${0.2 + index * 0.07}s` : '0s' }}
            >
              {hasDropdown(item) ? (
                <>
                  <button
                    className={`flex items-center justify-between w-full py-3 px-4 hover:bg-[#4a2baf] rounded-lg hover:text-[#8DC440] transition-colors duration-200 ${
                      openDropdown === item.href ? 'text-[#8DC440] bg-[#4a2baf]' : ''
                    }`}
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.href ? null : item.href)
                    }
                  >
                    <div className="flex items-center gap-3">
                      {item.icon && <item.icon className={item.iconClass} />}
                      <span>{item.label}</span>
                    </div>
                    <span
                      className={`transform transition-transform duration-300 ${
                        openDropdown === item.href ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openDropdown === item.href ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {renderDropdownItems(item.dropdown.items)}
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  className="flex items-center gap-3 py-3 px-4 hover:bg-[#4a2baf] rounded-lg hover:text-[#8DC440] transition-colors duration-200"
                  onClick={onToggle}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                >
                  <span>{item.label}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Tailwind CSS Custom Animations (keep these if they are specific to MobileNav, otherwise move to global CSS) */}
      <style>{`
        @keyframes fadeInSlideIn {
          from {
            opacity: 0;
            transform: translateX(-16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInSlideIn {
          animation: fadeInSlideIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}