// src/components/navbar/config.ts

export const BRAND = {
  name: "SmatPay",
  logo: "/smatpay_logo.svg", // adjust to your actual path or import
};

type NavLink = {
  label: string;
  href?: string;
  // If a link should be rendered via an action (e.g., dropdown), we can flag it
  // but for now we keep simple href-based links
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Features", href: "/features" },
  { label: "Documentation", href: "/features" },
  { label: "Resources" }, // triggers dropdown in desknav
  { label: "Contact Us", href: "/contact-us" },
  // add more as needed
];