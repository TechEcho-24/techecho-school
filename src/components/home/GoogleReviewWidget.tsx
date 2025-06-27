import { FaStar } from "react-icons/fa";

const GoogleReviewWidget = () => {
  const rating = 4.7;
  const totalReviews = 16179;

  return (
    <div className='flex flex-col sm:flex-row items-center justify-between bg-white border rounded-xl shadow-md px-6 max-w-3xl mx-auto'>
      <div className='flex items-center gap-4'>
        <img src='/assets/home/google.png' alt='Google' className='h-20' />

        <div className='flex items-center ml-6'>
          <span className='text-xl font-bold'>{rating}</span>
          <div className='flex ml-1 text-yellow-400'>
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={i < Math.round(rating) ? "" : "text-gray-300"}
              />
            ))}
          </div>
          <span className='text-sm text-gray-500 ml-2'>
            ({totalReviews.toLocaleString()})
          </span>
        </div>
      </div>

      <a
        href='https://www.google.com/maps/place/TechEcho/@26.4329129,80.2807764,772m/data=!3m1!1e3!4m8!3m7!1s0x399c492af7049c09:0xc55382ba5e3faa5b!8m2!3d26.4329129!4d80.2833513!9m1!1b1!16s%2Fg%2F11w9zf05_m?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D/reviews'
        target='_blank'
        rel='noopener noreferrer'
        className='mt-4 sm:mt-0 inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition'
      >
        Review us on Google
      </a>
    </div>
  );
};

export default GoogleReviewWidget;
