import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { LOCAL_STORAGE_KEYS } from "../../constants/Global";
import { routes } from "../../constants/Route";
import {
  AlumniAssociationIcon,
  AuthorizationIcon,
  BlogIcon,
  DashboardIcon,
  EventsIcon,
  HomeIcon,
  LoginIcon,
  LogoutIcon,
  MentorshipIcon,
  SettingIcon,
} from "../../elements/Icons";
import MobileSidebar from "./MobileSidebar";

interface NavLinkItem {
  icon: JSX.Element;
  text: string;
  linkTo: string;
  onClick?: () => void;
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
    { icon: <SettingIcon />, text: "Settings", linkTo: "/setting" },
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

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-gray-900  ${
        scrolled
          ? "  shadow-lg border-b border-white/5"
          : "  shadow-lg border-b border-white/5 "
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <div className="font-bold text-lg tracking-wide">
            <span className="text-white">ICE</span>
            <span className="text-blue-400 ml-1">ALUMNI</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {pageNavLinks.map((link, i: number) => (
            <NavLink
              key={i}
              to={link.linkTo}
              onClick={link.onClick}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                  isActive
                    ? "text-white bg-blue-600/20 border border-blue-500/30"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`
              }
              title={link.text}
            >
              {link.icon}
              <span>{link.text}</span>
            </NavLink>
          ))}

          {userRole === "admin" &&
            adminLinks.map((link, i: number) => (
              <NavLink
                key={i}
                to={link.linkTo}
                onClick={link.onClick}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                    isActive
                      ? "text-white bg-blue-600/20 border border-blue-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`
                }
                title={link.text}
              >
                {link.icon}
                <span>{link.text}</span>
              </NavLink>
            ))}
        </nav>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-0.5">
          {actionLinks.map((link, i: number) => (
            <NavLink
              key={i}
              to={link.linkTo}
              onClick={link.onClick}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                  isActive
                    ? "text-white bg-blue-600/20 border border-blue-500/30"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`
              }
              title={link.text}
            >
              {link.icon}
              <span>{link.text}</span>
            </NavLink>
          ))}

          {token ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-red-600/10 transition-all duration-200 rounded-md ml-1"
              title="Logout"
            >
              <LogoutIcon />
              <span>Logout</span>
            </button>
          ) : (
            <NavLink
              to={routes.login.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ml-1 ${
                  isActive
                    ? "text-white bg-blue-600 border border-blue-500"
                    : "text-white bg-blue-600 hover:bg-blue-700 border border-blue-500"
                }`
              }
              title="Login"
            >
              <LoginIcon />
              <span>Login</span>
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
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
