import { Link } from "react-router-dom";

let data = [
  {
    title: "Web Development",
    description:
      "TechEcho’s Web Development course equips you with the skills to create dynamic, professional websites. Learn to design, build, and optimize sites for seamless user experiences, preparing you for a successful career in tech.",
    image: "/assets/career/mern.webp",
    path: "/career/web-dev",
  },
  {
    title: "UI/UX Designing",
    description:
      "Elevate your creativity with TechEcho’s UI/UX Design course, where you’ll master the art of crafting user-friendly interfaces and intuitive designs. This course empowers you to create engaging digital experiences and excel in the design industry.",
    image: "/assets/career/UI-UX.webp",
    path: "/career/design",
  },
  {
    title: "Digital Marketing",
    description:
      "TechEcho’s Digital Marketing course provides the expertise needed to thrive in the online marketing world. Learn to craft impactful strategies, grow brand presence, and drive results, ensuring a successful career in the digital landscape.",
    image: "/assets/career/marketing.webp",
    path: "/career/marketing",
  },
];

export const Courses = () => {
  return (
    <>
      <div className="pt-[10rem] flex flex-col justify-center items-center mb-[10rem] gap-20">
        <div className="text-white text-center text-2xl md:text-4xl font-bold">
          <h2 className="text-3xl md:text-6xl font-bold capitalize text-[#1c1b1f]">
            Unlock Your Future: <span className="text-[#a53b48]">Master</span>
          </h2>
          <h2 className="text-3xl md:text-6xl font-bold capitalize text-[#1c1b1f]">
            the <span className="text-[#a53b48]">Skills</span> of Tomorrow.
          </h2>
        </div>
        {data.map((content, index) => {
          return (
            <>
              <div
                key={index}
                className="flex items-center justify-between flex-col-reverse md:flex-row text-white w-10/12 rounded-lg p-8 md:p-16 border-4 border-neutral-600 relative"
              >
                <div className="basis-1/2">
                  <h2 className="text-[#a53b48] md:text-5xl text-2xl font-extrabold my-6">
                    {content.title}
                  </h2>
                  <p className="md:text-xl lg:text-xl text-md md:leading-8 text-[#1c1b1f]">
                    {content.description}
                  </p>
                  <div className="flex justify-center flex-col md:flex-row md:gap-10 md:mt-6 md:absolute -bottom-14">
                    <Link
                      className="btn bg-black text-center"
                      to={content.path}
                    >
                      <span className="btn-text">Get Info</span>
                    </Link>
                  </div>
                </div>
                <figure className="basis-1/3">
                  <img
                    loading="lazy"
                    src={content.image}
                    alt={content.title}
                    className="w-full rounded-xl"
                  />
                </figure>
              </div>
            </>
          );
        })}
        <div className="border-4 border-neutral-600 text-white w-10/12 flex flex-col md:flex-row items-center px-6 py-10 justify-between rounded-xl">
          <div className="text-2xl text-[#1c1b1f]">
            <p > 
              <span className="text-[#a53b48] text-3xl font-bold">
                Confused?
              </span>{" "}
              Schedule a Personalized Call to
            </p>
            <p> Discuss the Course Structure and Benefits</p>
          </div>
          <div className="mt-6 md:m-0">
            <Link to={"/schedule"} className="btn mr-8">
              <span className="btn-text">Schedule a call</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};