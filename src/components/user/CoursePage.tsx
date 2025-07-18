import { useGetSingleCourseQuery } from "@/features/user/userApi";
import { Link, useParams } from "react-router-dom";

export const CoursePage = () => {
  const { courseId } = useParams(); // this is the courseId

  const {
    data,
    isLoading: loading,
    isError,
  } = useGetSingleCourseQuery(courseId);

  const courseData = data;

  if (loading) return <div className='loader'></div>;

  if (isError)
    return (
      <div className='text-center mt-32'>
        <p className='text-xl text-red-600 mb-4'>
          Course not found or not purchased.
        </p>
        <Link to='/course' className='text-primary hover:underline'>
          View Available Courses
        </Link>
      </div>
    );

  return (
    <div className='h-full w-11/12 mx-auto p-4 py-16 my-40 bg-white rounded-lg relative'>
      <h2 className='text-5xl font-bold text-primary text-center mb-10'>
        {courseData?.title}
      </h2>

      <button className='absolute top-8 left-4 text-btn-bg hover:text-btn-hover-bg'>
        <Link to='/course' className='flex items-center gap-2 text-lg'>
          ← Back
        </Link>
      </button>

      <p className='w-9/12 mx-auto text-gray-700 text-center mb-8'>
        {courseData?.description}
      </p>

      {courseData?.tracks && courseData?.tracks.length > 0 ? (
        courseData?.tracks.map((track: any) => (
          <div
            key={track._id}
            className='mt-6 w-10/12 mx-auto p-4 py-6 bg-gray-100 rounded-lg shadow-md flex justify-between items-center'
          >
            <div>
              <h3 className='text-2xl font-semibold'>{track.trackTitle}</h3>
              <p className='text-gray-700'>Includes multiple modules</p>
            </div>
            <Link
              to={`/courses/${courseId}/tracks/${track._id}`}
              className='bg-btn-bg hover:bg-btn-hover-bg text-white font-bold py-2 px-4 rounded'
            >
              See
            </Link>
          </div>
        ))
      ) : (
        <p className='text-center text-gray-500'>
          No tracks added to this course yet.
        </p>
      )}
    </div>
  );
};
