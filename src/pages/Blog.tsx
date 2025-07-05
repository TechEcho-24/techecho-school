import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { blogs } from "@/blogData";

export const Blog = ({ page }: { page: string }) => {
  const displayedBlogs = page === "home" ? blogs.slice(1, 3) : blogs;

  return (
    <div
      className={`${
        page === "home" ? "mb-20 mt-16" : "mt-32"
      } text-text-muted px-4`}
    >
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
          },
        }}
        className='text-center mb-10'
      >
        <h1 className='text-3xl font-bold text-primary'>Our Blogs</h1>
      </motion.div>

      <div className='flex flex-wrap justify-center gap-x-8 max-w-7xl mx-auto'>
        {displayedBlogs.map((blog: any, index: number) => (
          <CardContainer key={index} className='inter-var'>
            <CardBody className='bg-gray-50 dark:bg-black border dark:border-white/[0.2] border-black/[0.1] w-[20rem] md:w-[30rem] h-auto rounded-xl p-6 group/card hover:shadow-2xl transition-all duration-300'>
              <CardItem
                translateZ='50'
                className='text-xl font-bold text-neutral-700 dark:text-white'
              >
                {blog.title}
              </CardItem>

              <CardItem translateZ='100' className='w-full mt-4'>
                <img
                  src={blog.image}
                  alt='thumbnail'
                  className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                  crossOrigin='anonymous'
                />
              </CardItem>

              <CardItem
                translateZ='60'
                className='text-neutral-500 text-sm mt-2 dark:text-neutral-300'
              >
                <p
                  className='mt-2 text-gray-700 line-clamp-3'
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </CardItem>

              <div className='flex flex-col mt-6 gap-3'>
                <div className='flex flex-wrap gap-2'>
                  {blog.tags.slice(0, 3).map((tag: any, i: number) => (
                    <CardItem
                      translateZ={20}
                      as='span'
                      key={`${tag}-${i}`}
                      className='cursor-pointer text-xs px-2 py-1 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-full capitalize'
                    >
                      {tag}
                    </CardItem>
                  ))}
                </div>

                <Link
                  to={`/blogs/${blog._id || blog.slug}`}
                  className='w-fit mt-2 inline-block text-sm font-semibold text-white bg-primary px-4 py-2 rounded-lg hover:bg-purple-600 transition-all'
                >
                  View Blog →
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {page === "home" && (
        <div className='text-center mt-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to='/blogs'
              className='bg-purple-600 text-white font-bold text-lg px-6 py-3 rounded-xl transition duration-300 ease-in-out hover:bg-purple-700 hover:shadow-lg hover:scale-105'
            >
              View More Blogs →
            </Link>
          </motion.div>
        </div>
      )}
    </div>
  );
};
