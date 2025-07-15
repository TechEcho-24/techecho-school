import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedUnderline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <motion.svg
      ref={ref}
      width='100%'
      height='110'
      viewBox='0 0 500 150'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <linearGradient
          id='underlineGradient'
          x1='0%'
          y1='0%'
          x2='100%'
          y2='0%'
        >
          <stop offset='0%' stopColor='#6a11cb' />
          <stop offset='100%' stopColor='#2575fc' />
        </linearGradient>
      </defs>

      <motion.path
        d='M10,100 C100,120 400,80 490,100'
        fill='none'
        stroke='url(#underlineGradient)'
        strokeWidth='4'
        strokeLinecap='round'
        variants={{
          hidden: { pathLength: 0 },
          visible: {
            pathLength: 1,
            transition: { duration: 2, ease: ["easeInOut"] },
          },
        }}
        initial='hidden'
        animate={isInView ? "visible" : "hidden"}
      />
    </motion.svg>
  );
};

export default AnimatedUnderline;
