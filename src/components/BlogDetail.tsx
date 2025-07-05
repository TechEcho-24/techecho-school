import React, { useEffect } from "react";
import { blogs } from "@/blogData";
import { useParams } from "react-router-dom";

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = React.useState<any>(null);

  useEffect(() => {
    const foundBlog = blogs.find((b: any) => b.slug === slug);
    setBlog(foundBlog);
  }, [slug]);

  if (!blog) {
    return (
      <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <p className='text-gray-500 text-xl font-semibold'>Blog not found.</p>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white pt-28 pb-16 px-4 md:px-12'>
      <div className='max-w-5xl mx-auto'>
        <img
          src={blog.image || "/assets/default-blog.jpg"}
          alt={blog.title}
          className='object-contain md:object-fill-full h-64 mx-auto md:min-h-[70vh] rounded-xl shadow-md mb-6 border-4 border-purple-500'
        />
        <h1 className='text-3xl md:text-4xl font-bold text-purple-500 mb-4'>
          {blog.title}
        </h1>
        <div
          className='text-gray-700 text-base md:text-2xl leading-relaxed space-y-4 prose max-w-none'
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
};
