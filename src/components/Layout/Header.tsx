import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";
import {
  DashboardIcon,
  EventsIcon,
  HomeIcon,
  MentorshipIcon,
  BlogIcon,
  AlumniAssociationIcon,
  AuthorizationIcon,
  SettingIcon,
  LogoutIcon,
  LoginIcon,
} from "../../elements/Icons";
import { routes } from "../../constants/Route";
import { LOCAL_STORAGE_KEYS } from "../../constants/Global";
import { toast } from "react-toastify";

interface NavLinkItem {
  icon: JSX.Element;
  text: string;
  linkTo: string;
  onClick?: () => void;
}

interface HeaderProps {
  navLinks?: NavLinkItem[];
}

const Header: React.FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
  const userRole = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_ROLE);

  const pageNavLinks: NavLinkItem[] = [
    { icon: <HomeIcon />, text: "Home", linkTo: routes.home.path },
    {
      icon: <DashboardIcon />,
      text: "Dashboard",
      linkTo: routes.alumniTableInfo.path,
    },
    { icon: <BlogIcon />, text: "Blog", linkTo: routes.blog.path },
    { icon: <EventsIcon />, text: "Events", linkTo: routes.events.path },
    {
      icon: <AlumniAssociationIcon />,
      text: "Alumni Association",
      linkTo: routes.alumniAssociationCommittee.path,
    },
    { icon: <MentorshipIcon />, text: "Mentors", linkTo: "/mentors" },
  ];

  const adminLinks: NavLinkItem[] = [
    {
      icon: <AuthorizationIcon />,
      text: "Authorization",
      linkTo: "/authorization",
    },
  ];

  const actionLinks: NavLinkItem[] = [
    { icon: <SettingIcon />, text: "Setting", linkTo: "/setting" },
  ];

  const handleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH_ROLE);
    toast.success("Logged out successfully");
    window.location.href = routes.home.path;
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "unset";
    }
    return () => {
      document.documentElement.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full  ${
        scrolled
          ? "bg-black shadow-lg backdrop-blur-sm transition-all duration-300"
          : "bg-transparent "
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">ICE ALUMNI-RU</div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {pageNavLinks.map((link, i: number) => (
            <NavLink
              key={i}
              to={link.linkTo}
              onClick={link.onClick}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 text-white/95 hover:text-white font-medium transition-colors duration-200 hover:bg-white/10 rounded ${
                  isActive ? "bg-white/20 text-white" : ""
                }`
              }
              title={link.text}
            >
              {link.icon}
              {link.text}
            </NavLink>
          ))}

          {userRole === "admin" &&
            adminLinks.map((link, i: number) => (
              <NavLink
                key={i}
                to={link.linkTo}
                onClick={link.onClick}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 text-white/95 hover:text-white font-medium transition-colors duration-200 hover:bg-white/10 rounded ${
                    isActive ? "bg-white/20 text-white" : ""
                  }`
                }
                title={link.text}
              >
                {link.icon}
                {link.text}
              </NavLink>
            ))}

          {actionLinks.map((link, i: number) => (
            <NavLink
              key={i}
              to={link.linkTo}
              onClick={link.onClick}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 text-white/95 hover:text-white font-medium transition-colors duration-200 hover:bg-white/10 rounded ${
                  isActive ? "bg-white/20 text-white" : ""
                }`
              }
              title={link.text}
            >
              {link.icon}
              {link.text}
            </NavLink>
          ))}

          {token && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 text-white/95 hover:text-white font-medium transition-colors duration-200 hover:bg-white/10 rounded"
              title="Logout"
            >
              <LogoutIcon />
              Logout
            </button>
          )}

          {!token && (
            <NavLink
              to={routes.login.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 text-white/95 hover:text-white font-medium transition-colors duration-200 hover:bg-white/10 rounded ${
                  isActive ? "bg-white/20 text-white" : ""
                }`
              }
              title="Login"
            >
              <LoginIcon />
              Login
            </NavLink>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navLinks={pageNavLinks}
      />
    </header>
  );
};

export default Header;
