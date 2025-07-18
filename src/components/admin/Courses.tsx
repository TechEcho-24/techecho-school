import { faEdit, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getCourses } from "../../features/user/userThunk";
import {
  addTrack,
  deleteCourses,
  getTracks,
} from "../../features/admin/adminThunk";

export const Courses = () => {
  const dispatch = useDispatch();
  const { loading, courses } = useSelector((state: any) => state.user);
  const { loading: adminLoading, tracks } = useSelector(
    (state: any) => state.admin
  );
  const [searchText, setSearchText] = useState("");

  let searchedData = courses?.filter((course: any) =>
    course.title.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    // dispatch(getCourses() as any);
    dispatch(getTracks() as any);
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteCourses(id) as any);
  };

  const handleChange = (e: any, courseId: string) => {
    dispatch(addTrack({ trackId: e.target.value, courseId }) as any);
  };

  return (
    <div className='min-h-screen w-full md:w-[75%] float-right mt-[3rem] px-4 md:px-20'>
      <h1 className='text-white text-center text-3xl font-bold mb-8'>
        Courses
      </h1>

      <div className='flex flex-col md:flex-row justify-between gap-4 mb-10'>
        <input
          type='text'
          className='w-full md:w-2/3 rounded-lg p-3 border border-gray-600 text-white bg-gray-800 placeholder-gray-400'
          placeholder='Search course'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <select
          name='filter'
          className='w-full md:w-1/3 rounded-lg p-3 text-white bg-gray-800 border border-gray-600'
        >
          <option value='alphabetical'>Filter By</option>
          <option value='a-z'>A-Z</option>
          <option value='byDate'>By Date</option>
        </select>
      </div>

      <ul className='space-y-6'>
        {loading || adminLoading ? (
          <div className='text-white text-center'>Loading...</div>
        ) : (
          searchedData?.map((course: any) => (
            <li
              key={course._id}
              className='text-white border border-gray-700 rounded-lg p-6 bg-gray-900 shadow-md'
            >
              <div className='flex flex-col md:flex-row justify-between gap-6'>
                <div className='md:basis-1/2'>
                  <h2 className='text-2xl font-bold text-blue-400 mb-2'>
                    {course.title}
                  </h2>
                  <p className='text-gray-400 mb-2'>Course Details</p>
                  <p className='text-yellow-400 text-xl font-bold mb-2'>
                    ₹{course.price}
                  </p>
                  <p className='mb-1'>
                    <span className='font-semibold'>Level:</span> {course.level}
                  </p>
                  <p className='mb-1'>
                    <span className='font-semibold'>Duration:</span>{" "}
                    {course.duration}
                  </p>
                  <p className='mt-2 text-sm text-gray-300'>
                    {course.description}
                  </p>
                </div>

                <div className='w-full md:w-1/2 flex flex-col gap-2'>
                  <label
                    htmlFor='track'
                    className='text-sm font-medium text-gray-200'
                  >
                    Select Track
                  </label>
                  <select
                    name='track'
                    id='track'
                    onChange={(e) => handleChange(e, course._id)}
                    className='w-full rounded-lg bg-black text-white p-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  >
                    <option value='' disabled selected>
                      -- Choose a Track --
                    </option>
                    {tracks.map((track: any) => (
                      <option
                        key={track._id}
                        value={track._id}
                        className='text-black'
                      >
                        {track.trackTitle || track.name}
                      </option>
                    ))}
                  </select>

                  {/* 🏷️ Show selected tracks */}
                  <div className='flex flex-wrap gap-2 mt-2'>
                    {course.tracks?.map((trackId: string) => {
                      const selectedTrack = tracks.find(
                        (t: any) => t._id === trackId
                      );
                      return (
                        <span
                          key={trackId}
                          className='bg-blue-600 text-white text-sm px-3 py-1 rounded-full'
                        >
                          {selectedTrack?.trackTitle ||
                            selectedTrack?.name ||
                            "Unknown Track"}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className='flex justify-end gap-4 mt-6'>
                <button className='text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-lg'>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  onClick={() => handleDelete(course._id)}
                  className='text-white bg-red-600 hover:bg-red-700 p-3 rounded-lg text-lg'
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
