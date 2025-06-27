import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteUser, getUsers } from "../../features/admin/adminThunk";
import { UserModal } from "./UserModal";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading, error } = useSelector((state: any) => state.admin);

  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getUsers() as any);
  }, []);

  // searched user
  const searchedData = searchText
    ? users.filter((user: any) => user.username.includes(searchText.toLowerCase()))
    : users;

  // handle delete
  const handleDelete = async (id: string) => {
    dispatch(deleteUser(id) as any);
  };

  // function to change modal state
  const toggleModal = (userId: string) => {
    setIsModalOpen(!isModalOpen);
    navigate(`/admin/users?userId=${userId}`);
  };

  return (
    <div className='h-screen md:w-[75%] w-full float-right mt-[3rem] md:px-20 px-4'>
      <h1 className='text-white text-center text-2xl'>Users</h1>
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
      {/* showing error based on backend response and loading */}
      {error && <div>{error}</div>}

      {/* user modal to view specific user details*/}
      {isModalOpen && <UserModal />}

      {/* all users name and email in a list */}
      <ul>
        {loading ? (
          <div className='loader'></div>
        ) : (
          searchedData.map((user: any) => {
            return (
              <>
                {!user.isAdmin && (
                  <li
                    key={user._id}
                    className={`text-white border-4 border-blue-500 rounded-lg my-4 flex md:flex-row flex-col p-4 justify-between ${
                      isModalOpen && "hidden"
                    }`}
                  >
                    <div>
                      <h3>{user.username}</h3>
                      <p>{user.email}</p>
                    </div>
                    <div>
                      <button
                        onClick={() => toggleModal(user._id)}
                        className='text-xl bg-green-400 hover:bg-green-500 transition rounded-lg p-2 mr-6'
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className='text-3xl text-neutral-500 hover:text-red-500 transition rounded-lg p-2'
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>
                  </li>
                )}
              </>
            );
          })
        )}
      </ul>
    </div>
  );
};
