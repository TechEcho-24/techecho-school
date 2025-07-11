import { type FC, type JSX } from "react";
import { FaVideo, FaClipboardList, FaHeadset, FaMedal } from "react-icons/fa";

interface FeatureItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: <FaVideo className='text-purple-500 text-3xl' />,
    title: "Daily Live",
    description: "Interactive classes",
  },
  {
    icon: <FaClipboardList className='text-purple-500 text-3xl' />,
    title: "10 Million +",
    description: "Tests, sample papers & notes",
  },
  {
    icon: <FaHeadset className='text-purple-500 text-3xl' />,
    title: "24 x 7",
    description: "Doubt solving sessions",
  },
  {
    icon: <FaMedal className='text-purple-500 text-3xl' />,
    title: "100 +",
    description: "Offline centres",
  },
];

export const CourseFeatures: FC = () => {
  return (
    <div className='relative bottom-16 px-20 shadow-2xl flex justify-between items-center text-center py-10 rounded-xl bg-white'>
      {features.map((feature, idx) => (
        <>
          <div key={idx} className='flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
              {feature.icon}
              <h3 className='text-lg font-semibold text-purple-500'>
                {feature.title}
              </h3>
              <p className='text-gray-600 text-sm'>{feature.description}</p>
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
