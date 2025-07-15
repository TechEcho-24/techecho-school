import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface CourseCardProps {
  image: string;
  title: string;
  category: string[];
  description: string;
  path: string;
}

export const CourseCard = ({
  image,
  title,
  category,
  description,
  path,
}: CourseCardProps) => {
  return (
    <Link to={path}>
      <div
        className={cn(
          "group relative w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:p-6 border rounded-2xl transition-all hover:shadow-xl hover:scale-[1.01]",
          "bg-white border-purple-100 hover:bg-gradient-to-br from-purple-50 via-pink-50 to-white"
        )}
      >
        {/* Course Image */}
        <div className='w-full md:w-1/3'>
          <img
            src={image}
            alt={title}
            className='rounded-xl w-full h-auto object-cover md:h-32 shadow-md'
          />
        </div>

        {/* Content */}
        <div className='flex-1 space-y-2 text-left'>
          <h3 className='text-xl font-bold text-purple-700 group-hover:text-purple-800'>
            {title}
          </h3>
          <p className='text-sm text-gray-600'>{description}</p>
          <div className='flex flex-wrap gap-2 pt-1'>
            {category.map((cat, index) => (
              <span
                key={index}
                className='text-xs font-medium bg-purple-100 text-purple-600 px-3 py-1 rounded-full'
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
