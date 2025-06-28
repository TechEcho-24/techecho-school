import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/tech-echo-bb9793325/",
    icon: faLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/techecho_2024",
    icon: faInstagram,
    label: "Instagram",
  },
  {
    href: "https://x.com/AnujSachan07",
    icon: faXTwitter,
    label: "Twitter",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61564661356724",
    icon: faFacebook,
    label: "Facebook",
  },
];

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/career", label: "Courses" },
  // { to: "/help", label: "Help & Support" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-bg py-12 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Social Media */}
        <div>
          <img
            src="/assets/home/footerlogo.png"
            alt="TechEcho Logo"
            className="w-18 mb-4 ml-10"
          />
          <p className="font-semibold text-bg mb-1 ml-3">
            Building the Future,
          </p>
          <p className="mb-4">Powered by Technology</p>

          <div className="flex space-x-4">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="bg-primary text-bg w-9 h-9 flex items-center justify-center rounded-full hover:bg-secondary transition-transform duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-bg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-textMuted">
            {quickLinks.map(({ to, label }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="hover:underline transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-bg font-bold mb-4">Contact</h3>
          <ul className="text-textMuted space-y-3">
            <li>
              <a
                href=""
                className="inline-flex items-center bg-btnBg text-bgColor  rounded-md font-semibold hover:bg-btnHoverBg transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-bg" />
                +91-8318999388
              </a>
            </li>
            <li>
              <a
                href="mailto:techecho.kanpur@gmail.com"
                className="inline-flex items-center bg-btnBg text-bgColor py-2 rounded-md font-semibold hover:bg-btnHoverBg transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-bg" />
                techecho.kanpur@gmail.com
              </a>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-bg mr-2 mt-1"
              />
              <p>
                Phase 3rd, Lig 41, Tatya Tope Nagar, Kanpur, Uttar Pradesh
                208022
              </p>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/7hJe2Sb87jv7MgtP9"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-btnBg transition-colors duration-300"
              >
                View on map
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-textMuted text-textMuted text-center text-sm pt-4">
        &copy; {new Date().getFullYear()} TechEcho. All rights reserved.
      </div>
    </footer>
  );
};
