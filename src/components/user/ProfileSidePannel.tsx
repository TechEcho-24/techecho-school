import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useLogoutMutation } from "@/features/auth/authApi";

const navItems = [
  { key: "profile", label: "Profile", path: "/profile" },
  { key: "community", label: "Community", path: "/community" },
  { key: "course", label: "Course", path: "/course" },
  { key: "help", label: "Help & Support", path: "/help" },
];

function ToggleSidePanel({ activePage, setActivePage, avatar }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [logout, { isSuccess }] = useLogoutMutation();

  const handleLogout = async () => {
    await logout({});
    if (isSuccess) {
      toast.success("Logged out");
      navigate("/login");
      setIsOpen(false);
    } else {
      navigate("/login");
    }
  };

  const handleNavClick = (key: string) => {
    setActivePage(key);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className='z-50 xl:hidden'>
        {isOpen ? (
          <FontAwesomeIcon icon={faXmark} className='text-[#488EDF] text-3xl' />
        ) : (
          <img
            src={avatar || "/assets/about/user.webp"}
            alt='user'
            className='w-[40px] rounded-full'
          />
        )}
      </button>

      <div
        className={`fixed top-0 left-0 w-full bg-bg p-4 overflow-y-auto transition-transform duration-300 ease-in-out z-20 ${
          isOpen ? "translate-y-20" : "-translate-y-full"
        } xl:hidden`}
      >
        <ul>
          {navItems.map(({ key, label, path }) => (
            <li
              key={key}
              onClick={() => handleNavClick(key)}
              className={`my-4 pl-8 ${
                activePage === key
                  ? "border-l-4 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
            >
              <Link to={path}>{label}</Link>
            </li>
          ))}
          <li className='my-4 pl-8 text-gray-500' onClick={handleLogout}>
            Logout
          </li>
        </ul>
      </div>
    </>
  );
}

export default ToggleSidePanel;
