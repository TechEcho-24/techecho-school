import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SubTopic } from "./SubTopic";
import { useGetSingleCourseQuery } from "@/features/user/userApi";
// import { AnimatePresence, motion } from "framer-motion";

export const ModulePage = () => {
  const { courseId, trackId, moduleId } = useParams(); // this is the courseId

  const { data, isLoading: loading } = useGetSingleCourseQuery(courseId);
  const selectedTrack = data?.tracks?.find(
    (track: any) => track._id === trackId
  );
  const selectedModule = selectedTrack?.modules?.find(
    (module: any) => module._id === moduleId
  );

  const [openedTopic, setOpenedTopic] = useState(null);
  const handleTopicClick = (topicId: any) => {
    if (openedTopic === topicId) {
      setOpenedTopic(null);
    } else {
      setOpenedTopic(topicId);
    }
  };

  if (loading) return <div className='loader'></div>;

  if (!data || !data.tracks || data.tracks.length === 0)
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
        {data?.title}
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
        {data?.description}
      </p>
      {selectedModule?.topics?.length > 0 ? (
        selectedModule.topics.map((topic: any) => (
          <div key={topic._id}>
            {/* Topic Card */}
            <div className='mt-6 w-10/12 mx-auto p-4 py-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex justify-between items-center'>
              <div>
                <h3 className='text-2xl font-semibold'>{topic.title}</h3>
                <p className='text-gray-700'>Includes multiple Topics</p>
              </div>
              <button
                onClick={() => handleTopicClick(topic._id)}
                className='bg-btn-bg hover:bg-btn-hover-bg text-white font-bold py-2 px-4 rounded'
              >
                {openedTopic === topic._id ? "Close" : "Open"}
              </button>
            </div>

            {/* SubTopics List */}
            {openedTopic === topic._id && (
              <div className='mt-4 w-10/12 mx-auto p-6 bg-gray-100 rounded-lg shadow-md'>
                <ul className='space-y-4'>
                  {topic.subtopics?.map((subtopic: any) => (
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
      ) : (
        <p className='text-center text-gray-500'>
          No topics available in this module.
        </p>
      )}
    </div>
  );
};
