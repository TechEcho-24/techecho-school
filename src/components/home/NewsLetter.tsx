import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { AnimatePresence } from "framer-motion";

export const Newsletter = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [iconClicked, setIconClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [headingText, setHeadingText] = useState("");

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

  // const handleSubscribe = (e: any) => {
  //   e.preventDefault();
  //   alert(`Thank you for subscribing: ${email}`);
  //   setEmail("");
  // };

  return (
    <motion.section
      className='bg-[var(--color-bg)] py-16 px-6 text-center rounded-xl shadow-lg  mx-auto mt-40'
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
        <span className='inline-block w-1 h-6 bg-[var(--color-primary)] animate-pulse ml-1' />
      </motion.h2>

      <motion.p
        className='text-[var(--color-text-muted)] mb-8'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Join our newsletter for updates on new courses, early-bird offers, and
        free learning resources.
      </motion.p>

      <form
        className='flex flex-col sm:flex-row gap-4 justify-center'
        onSubmit={handleSubscribe}
      >
        <motion.input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder='Enter your email'
          className='px-4 py-3 rounded-xl border border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] w-full sm:w-auto'
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        />

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
    </motion.section>
  );
};
