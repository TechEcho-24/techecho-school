import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import GlobeParticles from "../magicui/globe";
import { Newsletter } from "./NewsLetter";
import GoogleReviewWidget from "./GoogleReviewWidget";

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

const Footer: React.FC = () => {
  return (
    <div>
      <Newsletter />
      <footer className='md:bg-[url("/assets/home/footer-bg.png")] bg-[url("/assets/home/mobilebgcrop.png")] bg-no-repeat md:bg-cover bg-contain text-white mt-52 mb-0'>
        {/* Top CTA section */}
        <div className="md:py-20 py-8 md:bottom-40 bottom-28 overflow-hidden w-11/12 md:w-2/3 mx-auto bg-gradient-to-bl from-black to-purple-800 px-8 rounded-3xl relative flex flex-col md:flex-row items-center justify-between">
          <div className=" basis-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-2">
              Experience superior <br />{" "}
              <span className="text-white/80">skip tracing</span>
            </h2>
            <p className="text-sm text-white/80 mb-4">
              150+ data points per search.
            </p>
            <button className="bg-white text-black px-5 py-2 rounded font-semibold hover:bg-gray-200 transition">
              Get started
            </button>
          </div>

          {/* Placeholder for Globe */}
          <div className="w-1/2 absolute -right-96 top-52 transform -translate-x-1/2 -translate-y-1/2">
            <GlobeParticles />
          </div>
        </div>

        {/* Footer Main */}
        <div className=" md:bg-transparent bg-[#060909] mt-0">
          <div className="max-w-7xl mx-auto  px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
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
    <div>
              <h3 className="text-bg font-bold mb-4">Contact</h3>
              <ul className="text-textMuted space-y-3">
                <li>
                  <a
                    href=""
                    className="inline-flex items-center bg-btnBg text-bgColor  rounded-md font-semibold hover:bg-btnHoverBg transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faPhone} className="mr-2 text-bg" />
                    +91-9717967915
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:techecho.kanpur@gmail.com"
                    className="inline-flex items-center bg-btnBg text-bgColor py-2 rounded-md font-semibold hover:bg-btnHoverBg transition-colors duration-300"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="mr-2 text-bg"
                    />
                    techecho.kanpur@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-bg mr-2 mt-1"
                  />
                  <p>: P-14, Shivalik Colony, Malviya Nagar</p>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/M35EqgzQgoYHdJcH7"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-btnBg transition-colors duration-300"
                  >
                    View on map
                  </a>
                </li>
              </ul>
            </div>
            <GoogleReviewWidget /></div> 
          </div>

          {/* Footer Bottom */}
          <div className="py-6 border-t border-textMuted text-textMuted text-center text-sm mt-8 ">
            &copy; {new Date().getFullYear()} TechEcho. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
