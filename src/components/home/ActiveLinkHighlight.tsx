import { motion } from "motion/react";

export const ActiveLinkHighlight = () => (
  <motion.div
    layoutId='active-link'
    className='absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-full bg-purple-500 shadow-md rounded-full'
    transition={{ type: "spring", stiffness: 500, damping: 30 }}
  />
);
