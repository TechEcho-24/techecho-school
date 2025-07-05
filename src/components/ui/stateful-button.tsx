"use client";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof motion.button> {
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
  success?: boolean;
  error?: boolean;
}

export const Button = ({
  className,
  children,
  loading = false,
  success = false,
  error = false,
  ...props
}: ButtonProps) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const runAnimation = async () => {
      if (loading) {
        await animate(
          ".loader",
          { width: "20px", scale: 1, display: "block" },
          { duration: 0.2 }
        );
        await animate(
          ".check, .error-icon",
          { width: 0, scale: 0, display: "none" },
          { duration: 0.1 }
        );
      } else if (success) {
        await animate(
          ".loader",
          { width: 0, scale: 0, display: "none" },
          { duration: 0.2 }
        );
        await animate(
          ".check",
          { width: "20px", scale: 1, display: "block" },
          { duration: 0.2 }
        );
        await animate(
          ".check",
          { width: 0, scale: 0, display: "none" },
          { delay: 2, duration: 0.2 }
        );
      } else if (error) {
        await animate(
          ".loader, .check",
          { width: 0, scale: 0, display: "none" },
          { duration: 0.1 }
        );
        await animate(
          ".error-icon",
          { width: "20px", scale: 1, display: "block" },
          { duration: 0.2 }
        );
        await animate(
          ".error-icon",
          { width: 0, scale: 0, display: "none" },
          { delay: 2, duration: 0.2 }
        );
      }
    };

    runAnimation();
  }, [loading, success, error]);

  return (
    <motion.button
      layout
      ref={scope}
      disabled={loading}
      className={cn(
        "flex min-w-[120px] cursor-pointer items-center justify-center gap-2  px-4 py-2 font-medium text-white ring-offset-2 transition duration-200 hover:ring-2 hover:ring-purple-500 disabled:opacity-50 w-full bg-purple-500 hover:bg-purple-400 p-4 rounded-lg",
        className
      )}
      {...props}
    >
      <motion.div layout className='flex items-center gap-2'>
        <Loader />
        <CheckIcon />
        <ErrorIcon />
        <motion.span layout>{children}</motion.span>
      </motion.div>
    </motion.button>
  );
};

const Loader = () => (
  <motion.svg
    animate={{ rotate: [0, 360] }}
    initial={{ scale: 0, width: 0, display: "none" }}
    style={{ scale: 0.5, display: "none" }}
    transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='loader text-white'
  >
    <path d='M12 3a9 9 0 1 0 9 9' />
  </motion.svg>
);

const CheckIcon = () => (
  <motion.svg
    initial={{ scale: 0, width: 0, display: "none" }}
    style={{ scale: 0.5, display: "none" }}
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='check text-white'
  >
    <circle cx='12' cy='12' r='9' />
    <path d='M9 12l2 2l4 -4' />
  </motion.svg>
);

const ErrorIcon = () => (
  <motion.svg
    initial={{ scale: 0, width: 0, display: "none" }}
    style={{ scale: 0.5, display: "none" }}
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='error-icon text-red-500'
  >
    <circle cx='12' cy='12' r='9' />
    <line x1='12' y1='8' x2='12' y2='12' />
    <circle cx='12' cy='16' r='1' />
  </motion.svg>
);
