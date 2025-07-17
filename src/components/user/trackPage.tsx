import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCourse } from "../../features/user/userThunk";

export const TrackPage = () => {
  const { courseId, trackId } = useParams(); // this is the courseId
  const dispatch = useDispatch();

  const { purchasedCourses, loading } = useSelector((state: any) => state.auth);
  const { course: courseData } = useSelector((state: any) => state.user);

  useEffect(() => {
    dispatch(getCourse(courseId) as any);
  }, [dispatch, courseId]);

  const course = Array.isArray(purchasedCourses)
    ? purchasedCourses.find((c) => c._id === courseId)
    : null;

  if (loading) return <div className='loader'></div>;

  if (!course)
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

      {courseData.tracks && courseData.tracks.length > 0 ? (
        courseData.tracks.map((track: any) => (
          <div key={track._id} className='mb-10'>
            <h2 className='text-3xl font-bold text-primary text-center mb-4 capitalize'>
              {track.trackTitle}
            </h2>
            {track._id === trackId &&
              track.modules.map((module: any) => (
                <div
                  key={module._id}
                  className='mt-6 w-10/12 mx-auto p-4 py-6 bg-gray-100 rounded-lg shadow-md flex justify-between items-center'
                >
                  <div>
                    <h3 className='text-2xl font-semibold'>{module.title}</h3>
                    <p className='text-gray-700'>Includes multiple Topics</p>
                  </div>
                  <Link
                    to={`/courses/${courseId}/tracks/${track._id}/modules/${module._id}`}
                    className='bg-btn-bg hover:bg-btn-hover-bg text-white font-bold py-2 px-4 rounded'
                  >
                    Go to topics
                  </Link>
                </div>
              ))}
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
