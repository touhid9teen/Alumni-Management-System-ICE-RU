import { ChevronRight, X } from "lucide-react";
import type { MobileSidebarProps } from "../../types";

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isOpen,
  onClose,
  navLinks,
}): JSX.Element => {
  return (
    <div
      className={`fixed inset-0 z-[100] xl:hidden transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-0 h-full w-72 sm:w-80 bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <span className="font-bold text-gray-900 text-lg">Menu</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-1">
            {navLinks.map((link, i: number) => (
              <li key={i}>
                <a
                  href={link.href}
                  target={link.target || "_self"}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                >
                  <ChevronRight size={16} className="text-gray-400" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileSidebar;