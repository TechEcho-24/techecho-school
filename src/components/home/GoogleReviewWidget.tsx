import { FaStar } from "react-icons/fa";

const GoogleReviewWidget = () => {
  const rating = 4.7;
  const totalReviews = 20;

  return (
    <div className="flex flex-row items-center justify-between bg-transparent border border-gray-200 rounded-xl shadow-md px-2 py-1 gap-4 sm:gap-0 mt-2 ">
      {/* Left: Google logo + rating */}
      <div className="flex flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
        <img
          src="/assets/home/google.png"
          alt="Google"
          className="h-10 sm:h-16 object-contain"
        />

        <div className="flex justify-between items-center gap-2 sm:flex-col flex-row">
          <div className="border-b-1 border-gray-500">
            <span className="text-xl sm:text-lg font-bold">{rating}</span>{" "}
            <span className="text-sm text-gray-500">
              ({totalReviews.toLocaleString()})
            </span>
          </div>
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={`w-2 h-2 sm:w-3 sm:h-3 ${
                  i < Math.round(rating) ? "" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right: CTA Button */}
      <a
        href="https://www.google.com/maps/place/TechEcho/@26.4329129,80.2807764,772m/data=!3m1!1e3!4m8!3m7!1s0x399c492af7049c09:0xc55382ba5e3faa5b!8m2!3d26.4329129!4d80.2833513!9m1!1b1!16s%2Fg%2F11w9zf05_m?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D/reviews"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-semibold py-2 px-2 rounded-lg transition w-auto text-center"
      >
        Review us on Google
      </a>
    </div>
  );
};

export default GoogleReviewWidget;
