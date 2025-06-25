import { Link } from "react-router-dom";
import IconCloud from "./IconCloud";
import { BubblesBackground } from "../magicui/BubblesBackground";
export const Hero = () => {
  return (
    <section className="relative min-h-[96vh] drop-shadow-lg  w-full flex items-center justify-center px-4 bg-gradient-to-r from-bg to-pink-50 py-20 rounded-tl-[100px] rounded-br-[100px] ">
      <BubblesBackground />
      <div className="relative z-10 pl-20 pr-10 w-full flex flex-col md:flex-row justify-center items-center gap-12">
        {/* Left Section */}
        <div className="flex flex-col justify-center w-full md:basis-2/3">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold leading-tight text-gray-800">
            Shape your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Future
            </span>{" "}
            with real-world skills on
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              {" "}
              TechEcho.
            </span>
          </h1>
          <p className="text-gray-600 mt-6 text-lg max-w-lg">
            Master in-demand technologies, explore career paths, and connect
            with opportunities that matter.
          </p>

          <div className="flex items-center gap-6 mt-10 flex-col md:flex-row w-full">
            {/* Gradient filled button */}
            <button className="w-full md:w-auto bg-gradient-to-r from-pink-400 to-purple-400 text-white hover:from-purple-600 hover:to-purple-500 px-6 py-3 text-lg font-semibold rounded-xl shadow-md transition duration-300">
              Get Started
            </button>

            {/* Gradient border button */}

            <Link
              to={"/schedule"}
              className="bg-white text-purple-600 font-semibold text-lg px-6 py-3 hover:text-white transition-colors duration-500 hover:bg-purple-600 rounded-xl text-center border border-purple-500"
            >
              Schedule Demo
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full md:basis-[45%] z-10">
          <IconCloud />
        </div>
      </div>
    </section>
  );
};
