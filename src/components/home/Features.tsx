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
    icon: (
      <FaClipboardList className='text-purple-500 md:text-3xl text-lg mb-1' />
    ),
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
    <div className='relative bottom-16 px-4 md:px-20 py-10 bg-white rounded-xl shadow-2xl w-full'>
      <div className='grid grid-cols-1 md:grid-cols-4 items-center text-center gap-y-6 md:gap-0'>
        {features.map((feature, idx) => (
          <div
            key={idx}
            className='flex flex-col items-center justify-center relative'
          >
            {feature.icon}
            <h3 className='text-sm md:text-lg font-semibold text-purple-500'>
              {feature.title}
            </h3>
            <p className='text-[10px] md:text-sm text-gray-600 w-[75%] md:w-full'>
              {feature.description}
            </p>

            {/* Divider for desktop */}
            {idx !== features.length - 1 && (
              <div className='hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-10 border-r border-gray-300'></div>
            )}

            {/* Divider for mobile */}
            {idx !== features.length - 1 && (
              <div className='md:hidden w-10 h-px bg-gray-300 mt-4'></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
