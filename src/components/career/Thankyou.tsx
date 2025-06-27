import { useNavigate } from "react-router-dom";

export const Thankyou = () => {
  const navigate = useNavigate();
  return (
    <div className='h-screen flex flex-col md:flex-row justify-between px-10 md:px-20 items-center text-[var(--text-muted)]'>
      <figure className='basis-1/3 mt-20 md:mt-0'>
        <img
          src='/assets/career/thankyou.webp'
          alt='thankyou'
          className='w-2/3 md:w-full mx-auto'
        />
      </figure>
      <div className='basis-1/2'>
        <h2 className='text-[var(--primary)] text-5xl font-bold text-center my-4'>
          Thank You
        </h2>
        <p className='md:leading-relaxed'>
          We’ll connect with you at the scheduled time to provide personalized
          guidance and ensure you make the best choice for your learning
          journey.
        </p>
        <p className='md:leading-relaxed'>
          If you have any immediate concerns, feel free to reach out to us at
          <span className='text-blue-500 mx-2 font-bold'>
            techecho.kanpur@gmail.com
          </span>
          / <span className='text-blue-500 mx-2 font-bold'>8318999388</span>.
          We’re here to support you every step of the way!
        </p>
        <button
          onClick={() => {
            navigate("/career/web-dev");
          }}
          className='btn text-white'
        >
          <span className='btn-text'>Go Back</span>
        </button>
      </div>
    </div>
  );
};
