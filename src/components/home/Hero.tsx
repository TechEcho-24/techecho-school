import React from "react";
import { Link } from "react-router-dom";
import IconCloud from "./IconCloud";

export const Hero = () => {
  return (
    <section className='bg-bg min-h-screen w-full flex items-center  justify-center px-2 md:px-4 py-20 md:mt-0 mt-12'>
      <div className='max-w-7xl w-full flex flex-col md:flex-row justify-center items-center gap-8'>
        {/* Left Section */}
        <div className='flex flex-col justify-center w-full md:basis-2/3'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] leading-tight'>
            Shape your <span className='text-primary'>future</span> with
            real-world skills on
            <span className='text-primary'> TechEcho.</span>
          </h1>
          <p className='text-[var(--text-muted)] mt-6 text-lg max-w-md'>
            Master in demand technologies, explore career paths, and connect
            with opportunities that matter.
          </p>

          <div className='flex items-center gap-6 mt-10 flex-col md:flex-row'>
            <button className='bg-btn-bg cursor-pointer text-white hover:bg-btn-hover-bg px-6 py-3 text-lg font-semibold rounded-xl hover:bg-btn-hover transition-colors duration-300 w-full md:w-1/4'>
              Get Started
            </button>
            <Link
              to={"/schedule"}
              className='px-5 py-2 box-border hover:bg-btn-bg hover:text-white text-lg font-semibold rounded-xl hover:to-btn-bg border-2 border-primary text-primary transition-colors duration-300 w-full md:w-1/4 text-center'
            >
              Schedule Demo
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className='relative w-full basis-full md:basis-1/3 z-10'>
          <IconCloud />
        </div>
      </div>
    </section>
  );
};
