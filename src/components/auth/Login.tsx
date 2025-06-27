import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authThunk";
import { loginAdmin } from "../../features/admin/adminSlice";
import { TriangleAlert } from "lucide-react";

export const Login = ({
  role,
  onClose,
  handleModule,
}: {
  role: string;
  onClose: () => void;
  handleModule: (role: string) => void;
}) => {
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
    console.log("Login data", data);
    if (role === "user") {
      dispatch(loginUser(data) as any);

      // navigate("/course");
      onClose?.(); // close modal after login
    } else if (role === "admin") {
      dispatch(loginAdmin(data) as any);
      navigate("/admin/users");
      onClose?.(); // close modal after login
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-50 overflow-y-hidden'>
      <div className='relative w-full h-full mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10'>
        {/* Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className='absolute top-4 right-4 text-text-muted hover:text-gray-800 text-xl'
          >
            &times;
          </button>
        )}

        <h2 className='text-5xl h-17 font-extrabold text-center mb-10 bg-[url("/assets/home/bg.webp")] bg-clip-text text-transparent bg-center bg-contain'>
          Login
        </h2>
        <h2 className='text-3xl font-bold text-primary mb-4 text-center'>
          Welcome Back
        </h2>
        <div className='flex flex-col md:flex-row items-center'>
          {/* Form Section */}
          <div className='md:basis-1/2 p-4 basis-full'>
            {error && (
              <div className='text-red-500 bg-red-300 rounded-lg p-4 font-bold mb-4'>
                <TriangleAlert className='mr-2' size={20} />
                {error}
              </div>
            )}

            <form className='w-full' onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  className='block text-gray-500 text-sm font-bold mb-2'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  id='email'
                  type='email'
                  value={data.email}
                  onChange={(e: any) =>
                    setData({ ...data, email: e.target.value })
                  }
                  placeholder='Your email'
                  className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
                />
              </div>

              <div className='mb-4 relative'>
                <label
                  className='block text-gray-500 text-sm font-bold mb-2'
                  htmlFor='password'
                >
                  Password
                </label>
                <input
                  id='password'
                  type={hidePass ? "password" : "text"}
                  value={data.password}
                  onChange={(e: any) =>
                    setData({ ...data, password: e.target.value })
                  }
                  placeholder='Your password'
                  className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
                />
                <div
                  className='absolute top-[50%] right-4 text-primary cursor-pointer'
                  onClick={() => setHidePass(!hidePass)}
                >
                  <FontAwesomeIcon icon={hidePass ? faEyeSlash : faEye} />
                </div>
              </div>

              <p className='text-right text-sm mb-4'>
                <Link to='/forgot-password' className='text-primary'>
                  Forgot Password?
                </Link>
              </p>

              <button
                type='submit'
                disabled={isDisabled}
                className={`w-full py-2 px-4 rounded font-bold text-white bg-btn-bg ${
                  isDisabled
                    ? " cursor-not-allowed"
                    : " hover:bg-btn-hover-bg cursor-pointer"
                }`}
              >
                {loading ? <div className='btn-loader'></div> : "Log In"}
              </button>
            </form>

            <p className='text-center mt-6 text-gray-500'>
              Don't have an account?
              <button
                onClick={() => handleModule("signup" as any)}
                className='text-primary underline ml-1 cursor-pointer'
              >
                Register here
              </button>
            </p>
          </div>

          {/* Image Section */}
          <div className='hidden md:flex flex-col items-center justify-center md:basis-1/2'>
            <figure className=' w-[400px]'>
              <video
                src='/assets/home/login.mp4'
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className='pointer-events-none select-none'
              ></video>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
