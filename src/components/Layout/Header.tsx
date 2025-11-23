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

const Header: React.FC<HeaderProps> = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

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
    const checkScroll = (): void => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ease-in-out`}
      style={{
        backgroundColor:
          scrolled || isMenuOpen ? "#1e3a8a" : "rgba(30, 58, 138, 0.8)",
        boxShadow:
          scrolled || isMenuOpen ? "0 2px 10px rgba(0, 0, 0, 0.3)" : "none",
        backdropFilter: scrolled || isMenuOpen ? "blur(4px)" : "none",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0">
            <span className="text-xl sm:text-2xl font-bold text-white tracking-wider">
              ICE ALUMNI-RU
            </span>
          </div>

          <nav className="hidden lg:flex items-center flex-1 ml-8">
            <ul className="flex items-center gap-2">
              {pageNavLinks.map((link, i: number) => (
                <li key={i}>
                  <NavLink
                    to={link.linkTo}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-3 py-2 text-white/95 hover:text-white font-medium transition-colors duration-200 hover:bg-white/10 rounded ${
                        isActive ? "bg-white/20 text-white" : ""
                      }`
                    }
                    title={link.text}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="hidden xl:inline text-sm">
                      {link.text}
                    </span>
                  </NavLink>
                </li>
              ))}

              {userRole === "admin" &&
                adminLinks.map((link, i: number) => (
                  <li key={`admin-${i}`}>
                    <NavLink
                      to={link.linkTo}
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-3 py-2 text-white/95 hover:text-white font-medium transition-colors duration-200 hover:bg-white/10 rounded ${
                          isActive ? "bg-white/20 text-white" : ""
                        }`
                      }
                      title={link.text}
                    >
                      <span className="text-lg">{link.icon}</span>
                      <span className="hidden xl:inline text-sm">
                        {link.text}
                      </span>
                    </NavLink>
                  </li>
                ))}

              {actionLinks.map((link, i: number) => (
                <li key={`action-${i}`}>
                  <NavLink
                    to={link.linkTo}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-3 py-2 text-white/95 hover:text-white font-medium transition-colors duration-200 hover:bg-white/10 rounded ${
                        isActive ? "bg-white/20 text-white" : ""
                      }`
                    }
                    title={link.text}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="hidden xl:inline text-sm">
                      {link.text}
                    </span>
                  </NavLink>
                </li>
              ))}

              {token && (
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-3 py-2 text-white/95 hover:text-white font-medium transition-colors duration-200 hover:bg-white/10 rounded"
                    title="Logout"
                  >
                    <span className="text-lg">
                      <LogoutIcon />
                    </span>
                    <span className="hidden xl:inline text-sm">Logout</span>
                  </button>
                </li>
              )}

              {!token && (
                <li>
                  <NavLink
                    to={routes.login.path}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-3 py-2 text-white/95 hover:text-white font-medium transition-colors duration-200 hover:bg-white/10 rounded ${
                        isActive ? "bg-white/20 text-white" : ""
                      }`
                    }
                    title="Login"
                  >
                    <span className="text-lg">
                      <LoginIcon />
                    </span>
                    <span className="hidden xl:inline text-sm">Login</span>
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <MobileSidebar
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navLinks={pageNavLinks}
      />
    </header>
  );
};

export default Header;
