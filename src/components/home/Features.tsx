import { type FC, type JSX } from "react";
import { FaClipboardList, FaHeadset, FaUsers, FaVideo } from "react-icons/fa";

interface FeatureItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: <FaVideo className='text-purple-500 md:text-3xl text-lg mb-1' />,
    title: "Daily Live",
    description: "Interactive classes",
  },
  { 
    icon: <FaClipboardList className='text-purple-500 md:text-3xl text-lg mb-1' />,
    title: "1000 +",
    description: "Tests, sample papers & notes",
  },
  {
    icon: <FaHeadset className='text-purple-500 md:text-3xl text-lg mb-1' />,
    title: "24 x 7",
    description: "Doubt solving sessions",
  },
  {
    icon: <FaUsers className='text-purple-500 md:text-3xl text-lg mb-1' />,
    title: "50 +",
    description: "Mentors",
  },
];

export const CourseFeatures: FC = () => {
  return (
    <div className='relative bottom-16 md:px-20 px-2 shadow-2xl flex md:justify-around  justify-center items-center text-center py-10 rounded-xl bg-white w-full'>
      {features.map((feature, idx) => (
        <>
          <div key={idx} className='flex justify-center items-center '>
            <div className='flex flex-col justify-center items-center '>
              {feature.icon}
              <h3 className='mg:text-lg text-sm font-semibold text-purple-500'>
                {feature.title}
              </h3>
              <p className='text-gray-600 md:text-sm md:w-full w-[75%] text-[8px]'>{feature.description}</p>
            </div>
          </div>
          {idx !== features.length - 1 && (
            <div className='border-l w-1 h-10 border-gray-400'></div>
          )}
        </>
      ))}
    </div>
  );
};
