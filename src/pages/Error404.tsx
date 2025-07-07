import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-500 mt-4">
        Page Not Found
      </h2>
      <p className="text-xl text-gray-500 mt-3">
        uh-oh! Looks like the page you're searching for doesn't exist...
      </p>

      {/* Robot Image */}
      <div className="my-8 max-w-sm  ">
        <img
          src="/assets/404.png"
          alt="Broken Robot"
          className="w-1/2 h-auto mx-auto"
        />
        <h1 className="text-5xl md:text-7xl font-extrabold text-purple-200">
          404
        </h1>
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-4 bg-purple-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
      >
        GO BACK HOME
      </button>
    </div>
  );
};

export default NotFound;
