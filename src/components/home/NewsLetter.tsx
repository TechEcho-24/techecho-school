import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, Send } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { useLocation } from "react-router-dom";
const people = [
  {
    id: 1,
    name: "Anurag Sachan",
    designation: "AIR-2 CEED",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Naveen Kumar",
    designation: "Applied Art",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Anuj Sachan",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Utkarsh Dhillon",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

export const Newsletter = () => {
  const location = useLocation();
  const [showIcon, setShowIcon] = useState(false);
  const [iconClicked, setIconClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [headingText, setHeadingText] = useState("");
  const [hideNewsletter, setHideNewsletter] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setHideNewsletter(true);
    } else {
      setHideNewsletter(false);
    }
  }, [location.pathname]);

  const fullHeading = "Join Our Newsletter";
  const typingSpeed = 150; // ms
  const handleMouseEnter = () => {
    setShowIcon(true);
    setIconClicked(false);
  };

  const handleMouseLeave = () => {
    setShowIcon(false);
    setIconClicked(false);
  };

  const handleSubscribe = (e: any) => {
    e.preventDefault();
    setIconClicked(true); // Trigger exit animation

    setTimeout(() => {
      alert(`Thank you for subscribing: ${email}`);
      setEmail("");
    }, 300); // Let animation finish
  };
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setHeadingText(fullHeading.slice(0, index + 1));
      index++;

      if (index >= fullHeading.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  if (hideNewsletter) {
    return null;
  }

  return (
    <motion.section
      className='py-8 md:mb-32 md:py-16 px-6 text-center mt-0 md:mt-10'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className='text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {headingText}
      </motion.h2>
      <motion.p
        className='text-[var(--color-text-muted)] text-base md:text-xl mb-8'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Subscribe to our newsletter to get the latest updates.
      </motion.p>
      <form
        className='flex flex-col sm:flex-row gap-4 justify-center'
        onSubmit={handleSubscribe}
      >
        <div className='relative w-full md:w-[20%]'>
          <motion.input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Enter your email'
            className='pl-10 px-4 py-3 rounded-md border border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] w-full'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          />
          <Mail
            size={18}
            className='absolute top-4 left-3 text-[var(--color-primary)]'
          />
        </div>

        <motion.button
          type='submit'
          className='relative bg-purple-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-xl font-semibold transition overflow-hidden'
          whileHover={{ scale: 1.05, animationDuration: 0.5 }}
          whileTap={{ scale: 0.95, animationDuration: 0.5 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className='flex items-center gap-2 justify-center'>
            Subscribe
            <AnimatePresence>
              {showIcon && !iconClicked && (
                <motion.span
                  key='icon'
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.5 }}
                  className='ml-1'
                >
                  <Send size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </motion.button>
      </form>
      <div className='mt-10 flex md:mt-12 flex-col md:flex-row items-center justify-center w-full'>
        <p className=' text-neutral-500 md:text-base text-sm md:mr-2'>
          Our experts are ready to help !
        </p>
        <div className='flex mt-5 md:mt-0 flex-row'>
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </motion.section>
  );
};
