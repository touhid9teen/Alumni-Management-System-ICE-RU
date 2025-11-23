import { Facebook, GraduationCap, Linkedin, Twitter } from "lucide-react";
import FooterColumn from "../footer/FooterColumn";
import FooterContactInfo from "../footer/FooterContactInfo";
import FooterNewsletter from "../footer/FooterNewsletter";

const Footer: React.FC = (): JSX.Element => {
  const quickLinks: string[] = [
    "About Us",
    "Upcoming Events",
    "Directory",
    "News & Updates",
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <GraduationCap size={28} className="text-blue-500" />
              <span className="text-xl sm:text-2xl font-bold text-white">
                ICE RU
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Connecting graduates, fostering growth, and celebrating the
              achievements of our diverse community since 1980.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Quick Links" links={quickLinks} />
          <FooterContactInfo />
          <FooterNewsletter />
        </div>

        <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} University of Rajshahi ICE Alumni
            Association. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
