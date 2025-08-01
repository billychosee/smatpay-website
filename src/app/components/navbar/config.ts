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
    icon: FiHome,
    iconClass: "text-current"
  },
  {
    label: "About Us",
    href: "/about-us",
    icon: FiInfo,
    iconClass: "text-current"
  },
  {
    label: "Features",
    href: "/features",
    icon: FiGrid,
    iconClass: "text-current",

  },
  {
    label: "Documentation",
    href: "/documentation",
    icon: FiBox,
    iconClass: "text-current",
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
        // { label: "InsurTech", href: "/industries/insurtech" },
        // { label: "Hospitality & Tourism", href: "/industries/hospitality-and-tourism" }
      ] as const
    }
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    icon: FiMail,
    iconClass: "text-current"
  }
] as const;

export const ICONS = {
  search: FiSearch,
  bars: FiMenu,
  times: FiX,
  chevronDown: FiChevronDown,
  chevronUp: FiChevronUp
} as const;
