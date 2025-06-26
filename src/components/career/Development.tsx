import { Link } from "react-router-dom";

let data = [
  {
    title: "Frontend Development",
    description:
      "Unlock your potential with our Frontend Development Course, designed to help you master the art of building responsive, interactive websites. Guided by industry experts, you'll dive into HTML, CSS, JavaScript, and modern frameworks like React.",
    image: "/assets/career/frontend.webp",
    price: "12,499",
    discPrice: "9,999",
  },
  {
    title: "Backend Development",
    description:
      "Master the essentials of Backend Development with our comprehensive course, led by industry experts. Learn to build robust, scalable server-side applications using technologies like Node.js, Express, databases, and APIs. Through hands-on projects and real-world scenarios.",
    image: "/assets/career/backend1.webp",
    price: "12,499",
    discPrice: "9,999",
  },
  {
    title: "Fullstack Development",
    description:
      "Become a versatile developer with our Fullstack Development Course, expertly designed to teach both frontend and backend technologies. Guided by industry professionals, you'll learn to build complete web applications from scratch, Through hands-on projects and real-world experience.",
    image: "/assets/career/fullstack.webp",
    price: "20,499",
    discPrice: "17,999",
  },
];

export const Development = () => {
  return (
    <>
      <div className='pt-[4rem] md:pt-[10rem] flex flex-col justify-center items-center mb-[10rem] gap-10 md:gap-32'>
        <div className='md:w-2/3 text-center'>
          <h2 className='text-3xl md:text-6xl font-bold capitalize text-[#1c1b1f] '>
            Explore our <span className='text-[#a53b48] '>web</span>
          </h2>
          <h2 className='text-3xl md:text-6xl font-bold capitalize text-[#1c1b1f] mt-4'>
            <span className='text-[#a53b48]'>Development </span> Courses
          </h2>
        </div>
        {data.map((content, index) => {
          return (
            <>
              <div
                key={index}
                className='flex items-center justify-between flex-col-reverse md:flex-row text-white w-10/12 rounded-lg p-6 md:p-16 border-4 border-neutral-600 relative'
              >
                <div className='basis-1/2'>
                  <h2 className='text-[#a53b48]  md:text-5xl text-2xl font-extrabold my-6'>
                    {content.title}
                  </h2>
                  <p className='md:text-xl lg:text-xl text-md md:leading-8 text-[#1c1b1f]'>
                    {content.description}
                  </p>
                  <p className='text-xl mt-6 text-[#a53b48] font-semibold '>
                    ₹{content.discPrice}
                    <span className='text-neutral-500 ml-4 text-xl mix  font-medium line-through'>
                      {content.price}
                    </span>
                  </p>
                  <div className='md:absolute -bottom-14'>
                    <Link className='btn bg-black' to={"/login"}>
                      <span className='btn-text'>Get enrolled</span>
                    </Link>
                  </div>
                </div>
                <figure className='basis-1/3'>
                  <img
                    loading='lazy'
                    src={content.image}
                    alt={content.title}
                    className='w-full rounded-xl'
                  />
                </figure>
              </div>
            </>
          );
        })}
        <div className='border-4 border-neutral-600 text-white w-10/12 flex flex-col md:flex-row items-center px-6 py-10 justify-between rounded-xl'>
          <div className='text-2xl text-[#1c1b1f]'>
            <p>
              <span className='text-[#a53b48]  text-3xl font-bold'>
                Confused?
              </span>{" "}
              Schedule a Personalized Call to
            </p>
            <p> Discuss the Course Structure and Benefits</p>
          </div>
          <div className='mt-6 md:m-0'>
            <Link to={"/schedule"} className='btn mr-8'>
              <span className='btn-text'>Schedule a call</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};