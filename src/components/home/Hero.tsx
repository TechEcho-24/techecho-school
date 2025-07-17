import { Link } from "react-router-dom";
import { BubblesBackground } from "../magicui/BubblesBackground";
import { BoxReveal } from "../magicui/box-reveal";
import IconCloudGlobe from "./IconCloud";

export const Hero = () => {
  return (
    <section className=' pt-28 md:pt-32 min-h-[85vh] drop-shadow-lg md:mt-4 md:mx-auto md:w-[97%] flex items-center justify-center px-4 bg-gradient-to-r from-bg to-pink-50 md:py-20 py-4 md:rounded-xl overflow-x-hidden'>
      <BubblesBackground />
      <div className='relative z-10 w-full flex flex-col md:flex-row justify-center items-center gap-12 px-5 md:px-20'>
        {/* Left Section */}
        <div className='flex flex-col justify-center w-full md:basis-2/3'>
          <div className='text-4xl md:text-4xl lg:text-6xl font-bold leading-tight text-gray-800'>
            <BoxReveal boxColor={"#7C3AED"} duration={0.5}>
              <p>
                Shape your{" "}
                <span className='bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent'>
                  Future
                </span>{" "}
                with
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#7C3AED"} duration={0.5}>
              <p>real-world skills</p>
            </BoxReveal>
            <BoxReveal boxColor={"#7C3AED"} duration={0.5}>
              on
              <span className='bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent'>
                {" "}
                TechEcho.
              </span>
            </BoxReveal>
          </div>
          <BoxReveal boxColor={"#7C3AED"} duration={0.5}>
            <p className='text-gray-600 mt-6 text-lg max-w-lg'>
              Master in-demand technologies, explore career paths, and connect
              with opportunities that matter.
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#7C3AED"} duration={0.5}>
            <div className='mt-14 md:mt-8 flex flex-wrap md:flex-nowrap justify-center flex-row gap-10 w-full'>
              {/* Primary Button: Gradient, subtle scale & shadow on hover */}
              <Link
                to='/career'
                className='relative group w-full md:w-auto text-center font-semibold py-3 px-6 rounded-lg transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md hover:shadow-xl hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-purple-400'
              >
                <span className='inline-block transition-transform duration-300 group-hover:translate-y-[-1px]'>
                  Explore Courses
                </span>
              </Link>

              {/* Secondary Button: Outlined, color-pop on hover */}
              <Link
                to='/about'
                className='relative group w-full md:w-auto text-center font-semibold py-3 px-6 rounded-lg transition-all duration-300 border-2 border-purple-500 text-purple-600 bg-white hover:bg-purple-50 hover:scale-[1.03] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300'
              >
                <span className='inline-block transition-transform duration-300 group-hover:translate-y-[-1px]'>
                  Learn More
                </span>
              </Link>
            </div>
          </BoxReveal>
        </div>

        {/* Right Section (Icon Globe) */}
        <div className=' w-full md:w-[30%] flex items-center justify-center'>
          <IconCloudGlobe />
        </div>
      </div>
    </section>
  );
};
