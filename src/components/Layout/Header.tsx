import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import type { HeaderProps } from "../../types";
import MobileSidebar from "./MobileSidebar";

const Header: React.FC<HeaderProps> = ({ navLinks }): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const checkScroll = (): void => {
      setScrolled(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", checkScroll);
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
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-[999] ${
        scrolled || isMenuOpen
          ? "bg-gray-800 backdrop-blur-md shadow-xl py-2"
          : "bg-gray-800 bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <span className="ml-3 text-xl sm:text-2xl font-bold text-white">
            ICE ALUMNI-RU
          </span>

          <nav className="hidden xl:flex items-center">
            <ul className="flex items-center gap-1">
              {navLinks.map((link, i: number) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target={link.target || "_self"}
                    rel={
                      link.target === "_blank"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="nav-link-underline px-3 py-2 text-white/90 hover:text-white text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="xl:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <MobileSidebar
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navLinks={navLinks}
      />
    </header>
  );
};

export default Header;
