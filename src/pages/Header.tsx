import { useEffect, useState } from "react";
import {
  GraduationCap,
  LogIn,
  Logs,
  Menu,
  Smartphone,
  User,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { LoginModal } from "../components/auth/LoginModal";
import { ActiveLinkHighlight } from "@/components/home/ActiveLinkHighlight";
// import { RippleButton } from "../components/magicui/ripple-button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const routeDetails = [
    { to: "/career", label: "Courses", icon: <GraduationCap /> },
    { to: "/about", label: "About", icon: <User /> },
    { to: "/blogs", label: "Blog", icon: <Logs /> },
    { to: "/contact", label: "Contact", icon: <Smartphone /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = () => {
    setIsLoginPopupOpen(true);
    setIsOpen(false);
  };

  const handleCloseLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };

  const handlePageChange = (page: string) => {
    setActivePage(page);
    setIsOpen(false);
    setIsLoginPopupOpen(false);
  };

  return (
    <header className='w-full fixed top-24 mx-auto z-50'>
      <motion.div
        initial={{ scaleX: 0.8, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }}
        style={{ transformOrigin: "center" }}
        className={` w-[95%] shadow-purple-300 fixed md:top-8 top-2 left-1/2 -translate-x-1/2 px-4 md:px-8 py-4 flex justify-between items-center rounded-lg z-50 transition-all duration-300 
          ${
            scrolled
              ? "md:w-[70%]  shadow-md bg-white/30 backdrop-blur-3xl "
              : ` md:w-[95%]  bg-transparent ${
                  isOpen ? "border-none" : "border-b border-purple-500"
                }`
          }`}
      >
        <Link
          to='/'
          onClick={() => handlePageChange("home")}
          className='text-2xl font-bold flex justify-between items-center gap-2'
        >
          <img className='w-8' src='/assets/home/newlogo.png' alt='logo' />
          <p className='md:block hidden text-[#1F2937]'>TechEcho</p>
        </Link>

        <div className='flex items-center justify-between gap-6'>
          <motion.nav
            animate={{ justifyContent: scrolled ? "center" : "flex-end" }}
            transition={{ duration: 0.3 }}
            className='hidden md:flex gap-6 items-center w-full'
          >
            {routeDetails.map((route) => (
              <motion.div
                key={route.to}
                className='relative px-2 py-1'
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  to={route.to}
                  onClick={() => handlePageChange(route.label)}
                  className={`relative z-10 text-gray-700 hover:text-purple-600 font-medium transition-all duration-300`}
                >
                  {route.label}
                </Link>

                {/* Active glowing background */}
                {activePage === route.label && <ActiveLinkHighlight />}
              </motion.div>
            ))}
          </motion.nav>

          <button
            onClick={handleLogin}
            className='border md:flex hidden bg-purple-100 text-purple-500 hover:scale-105 transition-all duration-300 shadow-2xl shadow-gray-500 rounded-xl px-4 py-2 font-medium items-center gap-2'
          >
            Login
          </button>
        </div>

        <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='md:hidden fixed top-14 left-0 w-full shadow-lg bg-gradient-to-r from-bg to-pink-50 px-8 py-6 flex flex-col gap-4 border-b  border-purple-500 '
          >
            {routeDetails.map((route) => (
              <Link
                to={route.to}
                key={route.to}
                className='text-gray-700 hover:text-purple-600 flex gap-3'
                onClick={() => setIsOpen(false)}
              >
                {route.icon} {route.label}
              </Link>
            ))}
            <div className='p-[2px] rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300'>
              <button
                onClick={handleLogin}
                className='bg-white text-purple-600 font-medium px-4 py-2 rounded-md gap-2 w-full flex  items-center justify-center'
              >
                Login
                <LogIn />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {isLoginPopupOpen && (
        <LoginModal isOpen={isLoginPopupOpen} onClose={handleCloseLoginPopup} />
      )}
    </header>
  );
}
