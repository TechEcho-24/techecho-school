import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCall, getCalls } from "../../features/admin/adminThunk";

export const Calls = () => {
  const dispatch = useDispatch();
  const { calls, loading } = useSelector((state: any) => state.admin);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dispatch(getCalls() as any);
  }, []);

  const isoToSimple = (iso: string) => {
    const date = new Date(iso);
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    return `Date : ${day} & Time : ${hours > 12 ? hours - 12 : hours}:${
      minutes < 9 ? "0" + minutes : minutes
    } ${ampm}`;
  };

  const handleDelete = async (id: string) => {
    dispatch(deleteCall(id) as any);
  };

  const searchedData = searchText
    ? calls.filter((user: any) => user.name.includes(searchText.toLowerCase()))
    : calls;

  return (
    <div className='h-screen md:w-[75%] w-full md:float-right  mt-[3rem] px-20'>
      <h1 className='text-white text-center text-2xl'>Scheduled Calls</h1>
      <div className='flex justify-between my-10'>
        <input
          type='text'
          className='w-2/3 rounded-lg p-2'
          placeholder='Search user'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select name='filter' className='w-1/5 rounded-lg p-2'>
          <option value='alphabetical'>Filter By</option>
          <option value='a-z'>A-Z</option>
          <option value='byDate'>By Date</option>
        </select>
      </div>
      <ul>
        {loading ? (
          <div className='loader'></div>
        ) : (
          searchedData.map((call: any) => {
            return (
              <li
                key={call._id}
                className='text-white border-4 border-blue-500 w-full rounded-lg my-4 flex p-4 justify-between'
              >
                <div>
                  <h3>Name : {call.name}</h3>
                  <p>Phone : {call.phone}</p>
                  <p>Scheduled {isoToSimple(call.schedule)}</p>
                  <p>Course : {call.course}</p>
                  <p>Message : {call.message}</p>
                </div>
                <button
                  onClick={() => handleDelete(call._id)}
                  className='text-3xl text-neutral-500 hover:text-red-500 transition rounded-lg p-2'
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};
