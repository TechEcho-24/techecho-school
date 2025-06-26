import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import ProfileSidePannel from "./ProfileSidePannel";
import { getImage } from "../../features/user/userThunk";
import { getAuthUser } from "../../features/auth/authThunk";

const routeDetails = [
  { to: "/course", label: "Courses" },
  { to: "/community", label: "Community" },
  { to: "/help", label: "Help" },
];

export const ProfileNavbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth);
  const location = useLocation();

  const [activePage, setActivePage] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

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

  // Fetch user data
  useEffect(() => {
    dispatch(getImage() as any);
    dispatch(getAuthUser() as any);
  }, [dispatch]);

  const handleCommunityClick = () => {
    setOpenOptions((prev) => !prev);
    setActivePage("community");
  };

  return (
    // <nav
    //   className={`fixed z-40 w-full py-6 px-8 flex justify-between items-center transition-colors ${
    //     isScrolled ? "bg-background/80 backdrop-blur" : "bg-transparent"
    //   }`}
    // >
    //   {/* Logo */}
    //   <Link
    //     to='/'
    //     className='flex items-center text-2xl font-bold text-primary gap-2'
    //   >
    //     <img src='/assets/home/logo.png' alt='logo' className='h-10 w-10' />
    //     <span className='hidden md:block'>TechEcho</span>
    //   </Link>

    //   {/* Side panel for small screens */}
    //   <ProfileSidePannel
    //     activePage={activePage}
    //     setActivePage={setActivePage}
    //   />

    //   {/* Main navigation */}
    //   <ul className='hidden xl:flex items-center space-x-8'>
    //     {/* Help */}
    //     <li
    //       onClick={() => setActivePage("help")}
    //       className={`text-lg cursor-pointer py-2 ${
    //         activePage === "help" ? "text-primary font-semibold" : "text-muted"
    //       }`}
    //     >
    //       <Link to='/help' className='hover:text-primary transition'>
    //         Help & Support
    //       </Link>
    //     </li>

    //     {/* Community with dropdown */}
    //     <li
    //       onClick={handleCommunityClick}
    //       className={` hover:text-primary transition relative text-lg cursor-pointer py-2 ${
    //         activePage === "community"
    //           ? "text-primary font-semibold"
    //           : "text-text-muted"
    //       }`}
    //     >
    //       Community
    //       {openOptions && activePage === "community" && (
    //         <div className='absolute top-10 left-0 bg-background shadow-lg rounded-lg px-4 py-3 flex flex-col gap-2 z-50'>
    //           <Link
    //             to='/community/faq'
    //             className='hover:text-primary transition'
    //           >
    //             FAQs
    //           </Link>
    //           <Link
    //             to='/community/leaderboard'
    //             className='hover:text-primary transition'
    //           >
    //             Leaderboard
    //           </Link>
    //         </div>
    //       )}
    //     </li>

    //     {/* Courses */}
    //     <li
    //       onClick={() => setActivePage("course")}
    //       className={`text-lg cursor-pointer py-2 ${
    //         activePage === "course"
    //           ? "text-primary font-semibold"
    //           : "text-text-muted"
    //       }`}
    //     >
    //       <Link to='/course' className='hover:text-primary transition'>
    //         Course
    //       </Link>
    //     </li>

    //     {/* User Profile */}
    //     <li>
    //       <Link
    //         to='/profile'
    //         className='flex items-center ml-4 mr-6 rounded-full hover:opacity-90'
    //       >
    //         <img
    //           src={user?.avatar || "/assets/about/user.webp"}
    //           alt='User Avatar'
    //           className='w-12 h-12 rounded-full border border-muted/30'
    //         />
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>

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
