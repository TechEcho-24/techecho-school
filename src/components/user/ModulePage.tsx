import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser } from "../../features/auth/authSlice";
import { Link, useParams } from "react-router-dom";
import { getCourse } from "../../features/user/userSlice";
import { SubTopic } from "./SubTopic";
import { AnimatePresence, motion } from "framer-motion";

export const ModulePage = () => {
  const { courseId, trackId, moduleId } = useParams(); // this is the courseId
  const dispatch = useDispatch();

  const { purchasedCourses, loading } = useSelector((state) => state.auth);
  const { course: courseData } = useSelector((state) => state.user);

  const [openedTopic, setOpenedTopic] = useState(null);
  const handleTopicClick = (topicId) => {
    if (openedTopic === topicId) {
      setOpenedTopic(null);
    } else {
      setOpenedTopic(topicId);
    }
  };

  useEffect(() => {
    dispatch(getCourse(courseId));
    dispatch(getAuthUser());
  }, [dispatch, courseId]);

  const course = Array.isArray(purchasedCourses)
    ? purchasedCourses.find((c) => c._id === courseId)
    : null;

  if (loading) return <div className='loader'></div>;

  if (!course)
    return (
      <div className='text-center mt-32'>
        {console.log(course)}
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

      <button className='absolute top-8 left-4 text-btn-bg hover:text-btn-bg'>
        <Link
          to={`/courses/${courseId}/tracks/${trackId}`}
          className='flex items-center gap-2 text-lg'
        >
          ← Back
        </Link>
      </button>

      <p className='w-9/12 mx-auto text-gray-700 text-center mb-8'>
        {courseData?.description}
      </p>

      {courseData.tracks && courseData.tracks.length > 0 ? (
        courseData.tracks.map(
          (track) =>
            track._id === trackId &&
            track.modules.map(
              (module) =>
                module._id === moduleId &&
                module.topics.map((topic) => (
                  <div key={topic._id}>
                    <div className='mt-6 w-10/12 mx-auto p-4 py-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex justify-between items-center'>
                      <div>
                        <h3 className='text-2xl font-semibold'>
                          {topic.title}
                        </h3>
                        <p className='text-gray-700'>
                          Includes multiple Topics
                        </p>
                      </div>
                      <button
                        onClick={() => handleTopicClick(topic._id)}
                        className='bg-btn-bg hover:bg-btn-hover-bg text-white font-bold py-2 px-4 rounded'
                      >
                        {" "}
                        {openedTopic === topic._id ? "Close" : "Open"}
                      </button>
                    </div>
                    {openedTopic === topic._id && (
                      <div className='mt-4 w-10/12 mx-auto p-6 bg-gray-100 rounded-lg shadow-md'>
                        <ul className='space-y-4'>
                          {topic.subtopics.map((subtopic) => (
                            <li
                              key={subtopic._id}
                              className='p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105'
                            >
                              <SubTopic subtopic={subtopic} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))
            )
        )
      ) : (
        <p className='text-center text-gray-500'>
          No tracks added to this course yet.
        </p>
      )}
    </div>
  );
};
