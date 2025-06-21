import { useEffect, useState } from "react";
import axios from "axios";
import DynamicPopup from "./AddModulePopup";

export default function TrackList() {
  const [tracks, setTracks] = useState<any[]>([]);
  const [popupState, setPopupState] = useState<any>(null);
  const [modState, setModState] = useState<any>(null);
  const url = "http://localhost:3001";

  const fetchTracks = async () => {
    const res = await axios.get(`${url}/api/tracks`);
    setTracks(res.data);
  };

  useEffect(() => {
    fetchTracks();
  }, []);

  const handleTrackCreated = (newTrack: any) => setTracks([...tracks, newTrack]);

  const updateTrack = (updatedTrack: any) => {
    setTracks((prev) =>
      prev.map((track: any) =>
        track._id === updatedTrack._id ? updatedTrack : track
      )
    );
  };

  return (
    <div className='h-screen w-[75%] float-right mt-[3rem] px-20'>
      <h1 className='text-3xl font-bold mb-4'>All Tracks</h1>
      <button
        onClick={() => setPopupState({ type: "track" })}
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-6'
      >
        ➕ Add Track
      </button>

      {!Array.isArray(tracks) ? (
        <p className='text-red-500'>Error loading tracks</p>
      ) : (
        tracks.map((track: any) => (
          <div
            key={track._id}
            className='border border-gray-300 rounded p-4 mb-4 shadow-sm text-white'
          >
            <div className='flex justify-between items-center mb-2'>
              <h2 className='text-xl font-semibold'>{track.trackTitle}</h2>
              <button
                onClick={() =>
                  track._id === modState
                    ? setModState(null)
                    : setModState(track._id)
                }
              >
                {" "}
                {modState === track._id ? "Hide" : "Show"}{" "}
              </button>
            </div>
            <button
              onClick={() =>
                setPopupState({ type: "module", trackId: track._id })
              }
              className='text-sm text-blue-500 hover:underline mb-2'
            >
              ➕ Add Module
            </button>

            {modState === track._id &&
              track.modules.map((mod: any, moduleIndex: number) => (
                <div
                  key={moduleIndex}
                  className='ml-6 mt-2 border-l-2 pl-4 border-gray-300'
                >
                  <h3 className='text-lg font-medium'>{mod.title}</h3>
                  <button
                    onClick={() =>
                      setPopupState({
                        type: "topic",
                        trackId: track._id,
                        moduleIndex,
                      })
                    }
                    className='text-sm text-green-500 hover:underline mb-2'
                  >
                    ➕ Add Topic
                  </button>

                  {mod.topics.map((topic: any, topicIndex: number) => (
                    <div key={topicIndex} className='ml-6 mt-1'>
                      <h4 className='text-md font-normal'>{topic.title}</h4>
                      <button
                        onClick={() =>
                          setPopupState({
                            type: "subtopic",
                            trackId: track._id,
                            moduleIndex,
                            topicIndex,
                          })
                        }
                        className='text-sm text-purple-500 hover:underline mb-2'
                      >
                        ➕ Add Subtopic
                      </button>
                      <ul className='list-disc ml-6 text-gray-300'>
                        {topic.subtopics.map((sub: any, idx: number) => (
                          <li key={idx}>{sub}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        ))
      )}

      {popupState && (
        <DynamicPopup
          type={popupState.type}
          ids={{
            trackId: popupState.trackId,
            moduleIndex: popupState.moduleIndex,
            topicIndex: popupState.topicIndex,
          }}
          onClose={() => setPopupState(null)}
          onCreated={(data: any ) => {
            if (["module", "topic", "subtopic"].includes(popupState.type)) {
              updateTrack(data);
            } else {
              handleTrackCreated(data);
            }
          }}
        />
      )}
    </div>
  );
}
