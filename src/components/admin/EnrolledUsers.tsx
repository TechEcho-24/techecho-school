import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const EnrolledUsers = () => {
  const [users, setUsers] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const fetchData = async () => {
    try {
      let response = await axios.get(
        `https://techecho-live-3.onrender.com/api/admin/enrolledUsers`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setUsers(response.data.data);
      setIsLoading(false);
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const searchedData = searchText
    ? users?.filter((user: any) => user.firstname.includes(searchText.toLowerCase()))
    : users;

  return (
    <div className='h-screen w-[70%] float-right mt-[3rem]'>
      <h1 className='text-white text-center text-2xl'>Enrolled Users</h1>
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
        {isLoading ? (
          <div className='loader'></div>
        ) : (
          searchedData?.map((user: any, index: number) => {
            return (
              <li
                key={user._id}
                className='text-white border-4 border-blue-500 rounded-lg my-4 flex p-4 justify-between'
              >
                <div>
                  <span className='text-2xl flex'>
                    {index + 1} :{" "}
                    <h3 className='ml-3 text-green-400'>
                      {" "}
                      {user.firstname + " " + user.lastname}
                    </h3>
                  </span>

                  <p>Email : {user.email}</p>
                  <p>Phone : {user.phone}</p>
                  <p>Qualification : {user.qualification}</p>
                  <p>Course : {user.course}</p>
                  <p>Address : {user.address}</p>
                </div>
                <button className='text-3xl text-neutral-500 hover:text-red-500 transition rounded-lg p-2'>
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
