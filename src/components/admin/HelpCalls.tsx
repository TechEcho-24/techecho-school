import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteHelpCall,
  getHelpCalls,
  updateHelpCall,
} from "../../features/admin/adminThunk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const HelpCalls = () => {
  const dispatch = useDispatch();
  const { helpCalls, loading, error } = useSelector((state: any) => state.admin);

  useEffect(() => {
    dispatch(getHelpCalls() as any);
  }, []);

  const handleClick = (call: any) => {
    console.log("id", call._id);
    if (call.status === "pending") {
      dispatch(updateHelpCall(call._id) as any);
    }
  };

  const handleDelete = (id: string) => {
    dispatch(deleteHelpCall(id) as any);
  };

  return (
    <>
      {error && (
        <div className='text-red-500 bg-red-100 border border-red-500 '>
          {error}
        </div>
      )}
      <div className='h-screen w-[75%] float-right mt-[3rem] px-20'>
        <h1 className='text-white text-center text-2xl'>
          Help and support Calls
        </h1>

        <ul>
          {loading ? (
            <div className='loader'></div>
          ) : helpCalls.length === 0 ? (
            <h1 className='text-white text-center text-2xl mt-10'>
              😎 No Help and support Calls
            </h1>
          ) : (
            helpCalls.map((call: any) => {
              return (
                <li
                  key={call._id}
                  className='text-white border-4 border-blue-500 rounded-lg my-4 flex flex-col p-4 justify-between'
                >
                  <h3>
                    <span>Phone : </span>{" "}
                    <a href={`tel:+91${call.phone}`}>{call.phone}</a>
                  </h3>
                  <div className='flex justify-between'>
                    {call.status === "pending" && (
                      <button
                        className='text-3xl text-neutral-300 hover:text-white transition rounded-lg p-2 w-1/3 bg-blue-400'
                        onClick={() => handleClick(call)}
                      >
                        <FontAwesomeIcon icon={faCheck} />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(call._id)}
                      className='text-3xl text-neutral-500 hover:text-red-500 transition rounded-lg p-2'
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </>
  );
};
