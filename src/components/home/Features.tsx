import { type FC } from "react";

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: "/assets/icons/live-stream.png",
    title: "Daily Live",
    description: "Interactive classes",
  },
  {
    icon: "/assets/icons/lab-test.png",
    title: "1000+",
    description: "Tests, sample papers & notes",
  },
  {
    icon: "/assets/icons/service.png",
    title: "24 x 7",
    description: "Doubt solving sessions",
  },
  {
    icon: "/assets/icons/mentoring.png",
    title: "50+",
    description: "Mentors",
  },
];

export const CourseFeatures: FC = () => {
  return (
    <div className="relative bottom-16 px-4 md:px-20 py-10 bg-white rounded-xl shadow-2xl w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 items-center text-center gap-y-6 md:gap-0">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center relative"
          >
            <img src={feature.icon} className="w-1/4" alt="loading" />
            <h3 className="text-sm md:text-2xl font-semibold text-purple-500">
              {feature.title}
            </h3>
            <p className="text-[10px] md:text-sm text-gray-600 w-[75%] md:w-full">
              {feature.description}
            </p>

            {/* Divider for desktop */}
            {idx !== features.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-10 border-r border-gray-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
