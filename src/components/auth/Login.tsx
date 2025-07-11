import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authThunk";
import { loginAdmin } from "../../features/admin/adminSlice";
import { TriangleAlert } from "lucide-react";
import { motion } from "framer-motion";

export const Login = ({ role }: { role: string }) => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();

  const [data, setData] = useState({ email: "", password: "" });
  const [hidePass, setHidePass] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const { email, password } = data;
    setIsDisabled(!(email && password));
  }, [data]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (role === "user") {
      dispatch(loginUser(data) as any);
      navigate("/course");
    } else if (role === "admin") {
      dispatch(loginAdmin(data) as any);
      navigate("/admin/users");
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-white px-4'>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-200'
      >
        <motion.h2
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='text-4xl font-extrabold text-center bg-gradient-to-r from-violet-600 via-purple-600 to-pink-700 text-transparent bg-clip-text mb-2'
        >
          Login
        </motion.h2>
        <p className='text-center text-gray-600 mb-6'>
          Welcome back! Please login to continue.
        </p>

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className='flex items-center text-red-600 bg-red-100 rounded-lg p-3 mb-4 text-sm font-medium'
          >
            <TriangleAlert className='mr-2' size={18} />
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Email
            </label>
            <input
              id='email'
              type='email'
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder='Enter your email'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400'
            />
          </div>

          <div className='mb-4 relative'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Password
            </label>
            <input
              id='password'
              type={hidePass ? "password" : "text"}
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder='Enter your password'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400'
            />
            <div
              className='absolute top-[70%] right-4 transform -translate-y-1/2 text-purple-500 cursor-pointer'
              onClick={() => setHidePass(!hidePass)}
            >
              <FontAwesomeIcon icon={hidePass ? faEyeSlash : faEye} />
            </div>
          </div>

          <div className='text-right text-sm mb-4'>
            <Link
              to='/forgot-password'
              className='text-purple-600 hover:underline'
            >
              Forgot Password?
            </Link>
          </div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: isDisabled ? 1 : 1.03 }}
            type='submit'
            disabled={isDisabled}
            className={`w-full py-2 px-4 rounded-lg font-semibold text-white transition bg-gradient-to-r from-violet-600 via-purple-600 to-pink-700 ${
              isDisabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:shadow-lg hover:shadow-pink-300/40"
            }`}
          >
            {loading ? <div className='btn-loader'></div> : "Log In"}
          </motion.button>
        </form>

        <p className='text-center mt-6 text-sm text-gray-600'>
          Don't have an account?
          <Link
            to='/signup'
            className='text-pink-600 underline ml-1 hover:text-pink-700'
          >
            Register here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};
