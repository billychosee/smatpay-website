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
    href: "https://doc.smatpay.africa",
    external: true,
    target: "_blank",
  },
  {
    label: "Resources",
    href: "/resources",
    icon: FiGrid,
    iconClass: "text-current",
    dropdown: {
      items: [
        { label: "Intergrations", href: "/resources/integrations" },
        { label: "Knowledge Base", href: "https://crm.smatpay.africa/knowledge-base", external: true, target: "_blank" },
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

