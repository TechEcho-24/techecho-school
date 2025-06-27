import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBlog } from "../features/user/userThunk";

export const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { blog, loading } = useSelector((state: any) => state.user);

  useEffect(() => {
    if (id) {
      dispatch(getBlog(id) as any);
    }
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='loader'></div>
      </div>
    );
  }

  if (!blog) {
    return <p className='text-white text-center mt-32'>Blog not found.</p>;
  }

  return (
    <div className='mt-32 text-white'>
      <img
        src={blog.image}
        alt={blog.title}
        className='rounded-md w-[70%] object-cover mb-3 mx-auto my-5 z-10'
      />
      <p
        className='mt-2 text-gray-200 bg-neutral-950 p-4 blog rounded-lg z-10 w-11/12 mx-auto prose lg:prose-xl max-w-none'
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></p>
    </div>
  );
};
