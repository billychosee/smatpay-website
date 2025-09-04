// src/components/navbar/desknav.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ChevronDown } from "lucide-react";
import { BRAND, NAV_LINKS } from "./config";

type DeskNavProps = {
  resourcesOpen: boolean;
  onResourcesOpen: () => void;
  onResourcesClose: () => void;
};

export const DeskNav: React.FC<DeskNavProps> = ({
  resourcesOpen,
  onResourcesOpen,
  onResourcesClose,
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 hidden border-b shadow-sm md:flex bg-white/70 backdrop-blur border-white/20">
      <div className="flex items-center justify-between w-full px-6 py-3 mx-auto max-w-7xl">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={BRAND.logo}
            alt={BRAND.name}
            width={96}
            height={96}
            className="rounded"
          />
        </Link>

        {/* Center: Nav Links */}
        <div className="flex items-center gap-6">
          {NAV_LINKS.map((l) =>
            l.label === "Resources" ? (
              <div
                key={l.label}
                className="relative group"
                onMouseEnter={onResourcesOpen}
                onMouseLeave={onResourcesClose}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#2f1991] transition">
                  {l.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      resourcesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute left-0 mt-0 w-56 rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-300 origin-top ${
                    resourcesOpen
                      ? "scale-100 opacity-100 translate-y-0"
                      : "scale-95 opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="py-2">
                    <Link
                      href="https://smatpay.africa/integrations/"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#2f1991] rounded-md transition"
                    >
                      Integrations
                    </Link>
                    <Link
                      href="https://crm.smatpay.africa/knowledge-base"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#2f1991] rounded-md transition"
                    >
                      Knowledge Base
                    </Link>
                    <Link
                      href="/faqs"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#2f1991] rounded-md transition"
                    >
                      FAQs
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.label}
                href={l.href ?? "#"}
                className="text-sm font-medium text-gray-700 hover:text-[#2f1991] transition"
              >
                {l.label}
              </Link>
            )
          )}
        </div>

        {/* Right: CTAs */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-full border border-[#2f1991] px-5 py-2 text-sm font-semibold text-[#2f1991] transition hover:bg-[#2f1991] hover:text-white"
          >
            Sign in
          </Link>
          <Link
            href="https://merchant.smatpay.africa/sign-up"
            className="rounded-full bg-gradient-to-tr from-[#8141D5] to-[#5b35e5] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-105"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};
