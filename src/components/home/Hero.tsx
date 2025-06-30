import { Link } from "react-router-dom";
import { BubblesBackground } from "../magicui/BubblesBackground";
import { BoxReveal } from "../magicui/box-reveal";
import IconCloudGlobe from "./IconCloud";

export const Hero = () => {
  return (
    <section className='relative pt-32 min-h-[96vh] drop-shadow-lg md:mt-4 md:mx-auto md:w-[97%] flex items-center justify-center px-4 bg-gradient-to-r from-bg to-pink-50 md:py-20 py-4 md:rounded-xl overflow-x-hidden'>
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
              <p>real-world skills on</p>
            </BoxReveal>
            <BoxReveal boxColor={"#7C3AED"} duration={0.5}>
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
            <div className='mt-8 flex flex-row gap-4 w-full'>
              <Link
                to='/explore'
                className='bg-bg hover:bg-purple-300 font-semibold py-3 px-6 rounded-lg transition duration-300'
              >
                Explore Courses
              </Link>
              <Link
                to='/about'
                className='bg-bg hover:bg-purple-100 text-[#7C3AED] border-2 border-[#7C3AED] font-semibold py-3 px-6 rounded-lg transition duration-300'
              >
                Learn More
              </Link>
            </div>
          </BoxReveal>
        </div>

        {/* Right Section (Icon Globe) */}
        <div className='w-full md:w-[30%] flex items-center justify-center'>
          <IconCloudGlobe />
        </div>
      </div>
    </section>
  );
};
