import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ProfileNavbar } from "../components/user/ProfileNavbar";

export const User = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState("");
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser") || "false");
  }, []);
  const handleLogout = () => {
    toast.success("Logged out");
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };
  return (
    <>
      <ProfileNavbar />
      <div className='flex flex-col pt-[10rem] justify-center items-center text-white'>
        <h1 className='text-3xl'>{loggedInUser}</h1>
        <button onClick={handleLogout} className='btn'>
          <span className='btn-text'>Logout</span>
        </button>
      </div>
    </>
  );
};
