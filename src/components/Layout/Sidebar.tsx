import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import RU from "../../assets/Logo_of_rajshahi_university.jpg";
import {
  NavIcon,
  DashboardIcon,
  EventsIcon,
  HomeIcon,
  MentorshipIcon,
  SettingIcon,
  LogoutIcon,
  LoginIcon,
  BlogIcon,
  AlumniAssociationIcon,
  AuthorizationIcon,
} from "../../elements/Icons";

import { routes } from "../../constants/Route";
import { LOCAL_STORAGE_KEYS } from "../../constants/Global";
import { toast } from "react-toastify";

interface Link {
  icon: JSX.Element;
  text: string;
  linkTo: string;
  onClick?: () => void;
}

interface LProps extends Link {
  open: boolean;
}

const PageNavLinks: Link[] = [
  { icon: <HomeIcon />, text: "Home", linkTo: routes.home.path },
  {
    icon: <DashboardIcon />,
    text: "Dashboard",
    linkTo: routes.alumniTableInfo.path,
  },
  { icon: <BlogIcon />, text: "Blog", linkTo: routes.blog.path },
  { icon: <EventsIcon />, text: "Events", linkTo: "/events" },
  {
    icon: <AlumniAssociationIcon />,
    text: "Alumni Association",
    linkTo: routes.alumniAssociationCommittee.path,
  },
  { icon: <MentorshipIcon />, text: "Mentors", linkTo: "/mentors" },
];

const LinkForAdmin = [
  {
    icon: <AuthorizationIcon />,
    text: "Authorization",
    linkTo: "/authorization",
  },
];

const ActionNavLinks = [
  { icon: <SettingIcon />, text: "Setting", linkTo: "/setting" },
];

// ---------------- SIDE BAR LINK UI ----------------
const SideBarLink = ({ icon, text, linkTo, open, onClick }: LProps) => {
  return (
    <NavLink
      to={linkTo}
      onClick={() => {
        onClick && onClick();
        if (window.innerWidth < 1024) {
          window.dispatchEvent(new CustomEvent("close-mobile-sidebar"));
        }
      }}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all
         ${
           isActive
             ? "bg-blue-50 text-blue-600 font-semibold"
             : "hover:bg-gray-100 text-gray-700"
         }`
      }
    >
      <span className="text-gray-600">{icon}</span>

      <span
        className={`text-sm font-medium whitespace-nowrap transition-opacity duration-200
         ${open ? "opacity-100" : "opacity-0 lg:hidden"}`}
      >
        {text}
      </span>
    </NavLink>
  );
};

// ---------------- SIDEBAR MAIN COMPONENT ----------------
const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
  const role = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_ROLE);
  const navigate = useNavigate();

  useEffect(() => {
    const close = () => setIsMobileOpen(false);
    window.addEventListener("close-mobile-sidebar", close);
    return () => window.removeEventListener("close-mobile-sidebar", close);
  }, []);

  return (
    <>
      {/* MOBILE BUTTON */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg hover:bg-gray-100"
      >
        <NavIcon className="w-6 h-6 lg:w-7 lg:h-7" />
      </button>

      {/* OVERLAY */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen bg-white border-r border-gray-200
        flex flex-col z-50 transition-all duration-300 ease-in-out
        ${open ? "w-64" : "w-20"}
        ${
          isMobileOpen
            ? "translate-x-0 shadow-2xl"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* HEADER / LOGO */}
        <div className="flex items-center gap-4 px-5 py-4 border-b border-gray-200">
          <button
            onClick={() => setOpen(!open)}
            className="hidden lg:block p-2 rounded-lg hover:bg-gray-100 "
          >
            <NavIcon className="w-6 h-6 lg:w-7 lg:h-7" />
          </button>

          {open && (
            <div className="flex items-center gap-3">
              <img src={RU} className="w-10 h-10 rounded-md object-cover" />
              <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                Alumni ICE RU
              </p>
            </div>
          )}
        </div>

        {/* NAV LINKS */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {PageNavLinks.map((link) => (
            <SideBarLink key={link.text} open={open} {...link} />
          ))}

          {role === "admin" && (
            <>
              <div className="my-3 border-t border-gray-200"></div>
              {LinkForAdmin.map((link) => (
                <SideBarLink key={link.text} open={open} {...link} />
              ))}
            </>
          )}
        </nav>

        {/* ACTION / FOOTER LINKS */}
        <div className="border-t border-gray-200 px-3 py-4 space-y-2">
          {ActionNavLinks.map((link) => (
            <SideBarLink key={link.text} open={open} {...link} />
          ))}

          {token ? (
            <SideBarLink
              icon={<LogoutIcon />}
              text="Logout"
              linkTo={routes.home.path}
              open={open}
              onClick={() => {
                navigate("/");
                localStorage.clear();
                toast.success("Logout successful!");
              }}
            />
          ) : (
            <SideBarLink
              icon={<LoginIcon />}
              text="Login"
              linkTo={routes.login.path}
              open={open}
            />
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
