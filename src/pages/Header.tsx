import { useEffect, useState } from "react";
import { LogIn, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { LoginModal } from "../components/auth/LoginModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const routeDetails = [
    { to: "/career", label: "Courses" },
    { to: "/about", label: "About" },
    { to: "/blogs", label: "Blog" },
    { to: "/contact", label: "Contact" },
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
    <header className='w-full fixed top-28 mx-auto z-50'>
      <motion.div
        initial={{ scaleX: 0.8, opacity: 0 }}
        animate={{
          scaleX: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        style={{
          transformOrigin: "center",
        }}
        className={`w-full fixed top-4  left-1/2 -translate-x-1/2 px-4 md:px-8 py-4 flex bg-white md:shadow-lg shadow-[#a77177] justify-between items-center md:rounded-xl z-50 transition-all duration-300 ${
          scrolled ? "md:w-[70%]" : "md:w-[95%]"
        }`}
      >
        <Link
          to='/'
          onClick={() => handlePageChange("home")}
          className='text-2xl font-bold text-primary flex justify-between items-center'
        >
          <img src='/assets/home/logo.png' alt='logo' />
          <p className='md:block hidden '>TechEcho</p>
        </Link>

        {/* Desktop Nav */}
        <div className='flex items-center justify-between gap-6'>
          <motion.nav
            animate={{
              justifyContent: scrolled ? "center" : "flex-end",
            }}
            transition={{
              duration: 0.3,
            }}
            className='hidden md:flex gap-6 items-center w-full'
          >
            {routeDetails.map((route) => (
              <Link
                to={route.to}
                key={route.to}
                className={`text-gray-900 hover:text-[#a53b48] ${
                  activePage === route.label ? "border-b-4 border-primary" : ""
                }`}
                onClick={() => handlePageChange(route.label)}
              >
                {route.label}
              </Link>
            ))}
          </motion.nav>
          <button
            onClick={handleLogin}
            className='bg-[#a53b48] hidden md:block text-white px-4 py-2 rounded-md hover:bg-[#a53b48]/80 transition duration-300'
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='md:hidden fixed left-0 w-full bg-white px-4 py-6 flex flex-col gap-4'
          >
            {routeDetails.map((route) => (
              <Link
                to={route.to}
                key={route.to}
                className='text-gray-700 hover:text-[#a53b48]'
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {route.label}
              </Link>
            ))}
            <button
              onClick={handleLogin}
              className='bg-[#a53b48] text-white px-4 py-2 rounded-md hover:bg-[#a53b48]/80 transition duration-300'
            >
              Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {isLoginPopupOpen && (
        <LoginModal isOpen={isLoginPopupOpen} onClose={handleCloseLoginPopup} />
      )}
    </header>
  );
}
