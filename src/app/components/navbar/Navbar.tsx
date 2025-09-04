// src/components/navbar/navbar.tsx
"use client";

import React, { useState } from "react";
import { DeskNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { NAV_LINKS } from "./config";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const toggleResourcesDesktop = () => setResourcesOpen((v) => !v);
  const toggleResourcesMobile = () => setResourcesOpen((v) => !v);

  return (
    <>
      {/* DESKTOP NAVBAR */}
      // navbar.tsx
<DeskNav
  resourcesOpen={resourcesOpen}
  onResourcesOpen={() => setResourcesOpen(true)}
  onResourcesClose={() => setResourcesOpen(false)}
/>


      {/* MOBILE NAVBAR (Header with Menu button) */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex border-b shadow-sm md:hidden bg-white/70 backdrop-blur border-white/20">
        <div className="flex items-center justify-between w-full px-4 py-3">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/smatpay_logo.svg"
              alt="Smatpay logo"
              width={96}
              height={96}
              className="rounded"
            />
          </a>

          {/* Menu Button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-4xl border border-[#2f1991] px-4 py-1.5 text-sm font-semibold text-[#2f1991] transition hover:bg-[#2f1991] hover:text-white"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (overlay + drawer) */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        resourcesOpen={resourcesOpen}
        onToggleResources={toggleResourcesMobile}
      />
    </>
  );
};

export default Navbar;