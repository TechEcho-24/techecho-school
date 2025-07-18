import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ProfileSidePannel from "./ProfileSidePannel";
import { useGetUserQuery } from "@/features/auth/authApi";

const routeDetails = [
  { to: "/course", label: "Courses" },
  { to: "/community", label: "Community" },
  { to: "/help", label: "Help" },
];

export const ProfileNavbar = () => {
  const { data } = useGetUserQuery({});
  const user = data;
  const location = useLocation();

  const [activePage, setActivePage] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  // const [openOptions, setOpenOptions] = useState(false);

  // Animate nav items
  useGSAP(() => {
    gsap.from("li", {
      y: -50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
    });
  });

  // Detect current active route
  useEffect(() => {
    const path = location.pathname.split("/")[1];
    setActivePage(path);
  }, [location]);

  // Handle scroll background change
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          isScrolled ? "md:w-[70%]" : "md:w-[95%]"
        }`}
      >
        <Link
          to='/'
          className='text-2xl font-bold text-primary flex justify-between items-center'
        >
          <img src='/assets/home/logo.png' alt='logo' />
          <p className='md:block hidden '>TechEcho</p>
        </Link>

        {/* Mobile Nav */}
        <ProfileSidePannel
          activePage={activePage}
          setActivePage={setActivePage}
          avatar={user?.avatar}
        />

        {/* Desktop Nav */}
        <div className='md:flex hidden items-center justify-between gap-6'>
          <motion.nav
            animate={{
              justifyContent: isScrolled ? "center" : "flex-end",
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
                className='text-gray-700 hover:text-[#a53b48]'
              >
                {route.label}
              </Link>
            ))}
            <Link
              to='/profile'
              className='md:flex hidden items-center ml-4 rounded-full hover:opacity-90'
            >
              <img
                src={user?.avatar || "/assets/about/user.webp"}
                alt='User Avatar'
                className='w-12 h-12 rounded-full border border-muted/30'
              />
            </Link>
          </motion.nav>
        </div>
      </motion.div>
    </header>
  );
};
