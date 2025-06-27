// components/LoginModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import { Login } from "./Login"; // Adjust the path as needed
import { useState } from "react";
import { Signup } from "./Signup";

export const LoginModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [page, setPage] = useState("login");

  const handleModuleChange = (module: string) => {
    setPage(module);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className='fixed inset-0 backdrop-blur bg-opacity-0 '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl z-70 w-[85%] md:w-[80%] min-h-[60vh] md:min-h-[65vh]'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {page === "signup" ? (
              <Signup onClose={onClose} handleModule={handleModuleChange} />
            ) : (
              <Login
                role='user'
                onClose={onClose}
                handleModule={handleModuleChange}
              />
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
