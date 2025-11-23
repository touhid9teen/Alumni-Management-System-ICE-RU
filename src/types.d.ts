export interface NavLink {
  name: string;
  href: string;
  target?: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
  img: string;
}

export interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
}

export interface HeaderProps {
  navLinks: NavLink[];
}

export interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export interface EventsSectionProps {
  events: Event[];
}

export interface FooterColumnProps {
  title: string;
  links: string[];
}

