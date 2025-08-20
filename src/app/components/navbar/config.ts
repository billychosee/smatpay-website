import {
  FiHome,
  FiInfo,
  FiGrid,
  FiBox,
  FiUsers,
  FiMail,
  FiSearch,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
} from 'react-icons/fi';

export const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Documentation",
    href: "https://doc.smatpay.africa/?_gl=1*1is72aj*_ga*NjkxODQ3NjE0LjE3NDQ3MDYyMTg.*_ga_3Y6SLZW23Q*czE3NTU2MDcxNjAkbzMxJGcxJHQxNzU1NjA3MjA2JGoxNCRsMCRoMA..",
    external: true,
  },
  {
    label: "Resources",
    href: "/resources",
    icon: FiGrid,
    iconClass: "text-current",
    dropdown: {
      items: [
        { label: "Intergrations", href: "/resources/integrations" },
        { label: "Knowledge Base", href: "/resources/knowledge-base" },
        { label: "FAQs", href: "/resources/faqs" },
      ] as const
    }
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  }
] as const;

export const ICONS = {
  search: FiSearch,
  bars: FiMenu,
  times: FiX,
  chevronDown: FiChevronDown,
  chevronUp: FiChevronUp
} as const;

