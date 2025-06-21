import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../features/user/userThunk";

export const Blog = ({ page }: { page: string }) => {
  const dispatch = useDispatch();
  const { blogs, error, loading } = useSelector((state: any) => state.user);
  useEffect(() => {
    dispatch(getBlogs() as any);
  }, [page, dispatch]);

  if (error) {
    return (
      <div className='text-center text-white'>
        <h1 className='text-3xl font-bold'>Error</h1>
        <p className='text-lg'>{error}</p>
      </div>
    );
  }
  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='loader'></div>
      </div>
    );
  }
  return (
    <div
      className={`${page === "home" ? "mb-20 mt-16" : "mt-32"} text-text-muted`}
    >
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
          },
        }}
        className='flex justify-center my-10 mx-10'
      >
        <h1 className='text-3xl font-bold text-primary'>Our Blogs</h1>
      </motion.div>
      <div className='flex md:flex-wrap w-[87%] mt-10 justify-between md:justify-start mx-auto gap-6'>
        {blogs.map((blog: any, index: number) => (
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.2,
                  delay: index * 0.1,
                  ease: "easeOut",
                },
              },
            }}
            key={blog._id}
            onClick={() => (window.location.href = `/blog/${blog._id}`)}
            className='rounded-xl p-4 w-full  md:w-[31%] shadow-lg shadow-primary mb-6 z-10 transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 overflow-hidden'
          >
            <img
              src={blog.image}
              alt={blog.title}
              className='rounded-md h-1/2 w-full object-cover mb-3'
            />
            <h2 className='text-xl text-text-main font-bold'>{blog.title}</h2>
            <p
              className='mt-2 text-gray-700 line-clamp-3'
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></p>
            <div className='mt-2 flex gap-2 flex-wrap'>
              {blog.tags.slice(0, 3).map((tag: any) => (
                <span
                  key={tag}
                  className='text-xs px-2 py-1 bg-btn-bg hover:bg-btn-hover-bg  cursor-pointer text-white font-bold border rounded-full capitalize'
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      {page === "home" && (
        <div className='text-center mt-10 mb-10'>
          <Link
            className='text-white bg-btn-bg p-4 rounded-xl font-bold text-lg hover:bg-btn-hover-bg transition-colors duration-300'
            to='/blogs'
          >
            View More Blogs →
          </Link>
        </div>
      )}
    </div>
  );
};
