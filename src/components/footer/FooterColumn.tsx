import { ChevronRight } from "lucide-react";
import type { FooterColumnProps } from "../../types";

const FooterColumn: React.FC<FooterColumnProps> = ({
  title,
  links,
}): JSX.Element => (
  <div>
    <h4 className="text-white font-bold mb-4 sm:mb-6 text-sm uppercase tracking-wider">
      {title}
    </h4>
    <ul className="space-y-2 sm:space-y-3 text-sm">
      {links.map((link: string, i: number) => (
        <li key={i}>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors flex items-center gap-2"
          >
            <ChevronRight size={14} className="text-gray-600" /> {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterColumn;