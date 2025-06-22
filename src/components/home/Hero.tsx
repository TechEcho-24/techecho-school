

import React from "react";
import { Link } from "react-router-dom";
import IconCloud from "./IconCloud";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-l from-white to-purple-200 min-h-screen w-full flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-center items-center gap-12">
        {/* Left Section */}
        <div className="flex flex-col justify-center w-full md:basis-2/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
            Shape your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-300 bg-clip-text text-transparent">
              Future
            </span>{" "}
            with real-world skills on
            <span className="bg-gradient-to-r from-purple-600 to-pink-300 bg-clip-text text-transparent">
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
            <button className="w-full md:w-auto bg-gradient-to-r from-pink-300 to-purple-400 text-white hover:from-purple-600 hover:to-purple-500 px-6 py-3 text-lg font-semibold rounded-xl shadow-md transition duration-300">
              Get Started
            </button>

            {/* Gradient border button */}
            <div className="w-full md:w-auto p-[2px] rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-600 hover:to-purple-500 transition duration-300">
              <Link
                to={"/schedule"}
                className="block bg-white text-purple-600 font-semibold text-lg px-6 py-3 rounded-xl text-center w-full"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full md:basis-1/3 z-10">
          < IconCloud />
        </div>
      </div>
    </section>
  );
};



