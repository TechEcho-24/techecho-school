import { useState } from "react";
import { Link } from "react-router-dom";
import { getItem, setItem } from "../../utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const AdminDashboard = () => {
  const [active, setActive] = useState(getItem("active") || "users");
  const [menuOpen, setMenuOpen] = useState(false);

  const handlePage = (page: string) => {
    setItem("active", page);
    setActive(page);
    setMenuOpen(false); // close menu on mobile after clicking
  };

  const navLinks = [
    { to: "/admin/users", label: "Users", id: "users" },
    { to: "/admin/calls", label: "Scheduled Calls", id: "calls" },
    { to: "/admin/courses", label: "Courses", id: "courses" },
    { to: "/admin/help-calls", label: "Help Calls", id: "help-calls" },
    { to: "/admin/add-course", label: "Add Course", id: "courseForm" },
    { to: "/admin/add-user", label: "Add User", id: "add-user" },
    { to: "/admin/tracks", label: "Add Tracks", id: "add-tracks" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className='hidden md:flex basis-1/5 bg-white h-screen pt-[10rem] flex-col fixed'>
        {navLinks.map((link) => (
          <Link
            key={link.id}
            to={link.to}
            onClick={() => handlePage(link.id)}
            className={`text-xl border-b-2 py-3 pl-4 ${
              active === link.id ? "bg-blue-500 text-white font-semibold" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
        <button className='mt-auto text-center px-4 py-2 border-4 border-blue-500 hover:bg-blue-500 hover:text-white'>
          Logout
        </button>
      </div>

      {/* Mobile Top Navbar */}
      <div className='md:hidden fixed top-0 w-full bg-white z-50 border-b shadow p-4 flex justify-between items-center'>
        <h1 className='text-lg font-bold'>Admin Panel</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className='text-2xl'>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='md:hidden fixed top-16 w-full bg-white z-40 border-b shadow flex flex-col'>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              onClick={() => handlePage(link.id)}
              className={`text-sm border-b p-3 ${
                active === link.id ? "bg-blue-500 text-white font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button className='text-sm text-left p-3 border-t-2 border-blue-500 hover:bg-blue-500 hover:text-white'>
            Logout
          </button>
        </div>
      )}
    </>
  );
};
