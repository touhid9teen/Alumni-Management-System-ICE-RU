import { Mail, MapPin, Phone } from "lucide-react";

const FooterContactInfo: React.FC = (): JSX.Element => (
  <div>
    <h4 className="text-white font-bold mb-4 sm:mb-6 text-sm uppercase tracking-wider">
      Contact
    </h4>
    <ul className="space-y-3 sm:space-y-4 text-sm">
      <li className="flex items-start gap-3">
        <MapPin size={18} className="mt-0.5 text-gray-500 flex-shrink-0" />
        <span>
          123 University Avenue,
          <br />
          Education City, EC 54321
        </span>
      </li>
      <li className="flex items-center gap-3">
        <Phone size={18} className="text-gray-500 flex-shrink-0" />
        <span>+1 (555) 123-4567</span>
      </li>
      <li className="flex items-center gap-3">
        <Mail size={18} className="text-gray-500 flex-shrink-0" />
        <span>alumni@university.edu</span>
      </li>
    </ul>
  </div>
);

export default FooterContactInfo;
