import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/tech-echo-bb9793325/",
    icon: faGithub,
  },
  {
    href: "https://www.instagram.com/techecho_2024",
    icon: faLinkedin,
  },
  {
    href: "https://x.com/AnujSachan07",
    icon: faXTwitter,
  },
];

export const SocialLinks = () => (
  <div className='flex justify-between items-center w-52 text-3xl my-6 text-purple-800'>
    {socialLinks.map((link, index) => (
      <a
        key={index}
        href={link.href}
        className='hover:scale-90 transition-transform duration-300 p-2'
      >
        <FontAwesomeIcon icon={link.icon} />
      </a>
    ))}
  </div>
);
