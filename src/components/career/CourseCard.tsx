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
    <div
      onClick={() => window.open(path, "_blank")}
      className='group w-full h-80 sm:h-72 rounded-xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 p-4 flex flex-col justify-between'
    >
      <img
        src={image}
        alt={title}
        className='w-full h-32 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300'
      />
      <h3 className='text-lg font-semibold text-zinc-800 mb-1'>{title}</h3>
      <p className='text-sm text-zinc-500 line-clamp-3'>{description}</p>
      <div className='flex flex-wrap gap-2 mt-2'>
        {category.map((cat, i) => (
          <span
            key={i}
            className='text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full'
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
};
