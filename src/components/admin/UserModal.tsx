import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getUser } from "../../features/user/userThunk";
import { setItem } from "../../utils";

export const UserModal = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state: any) => state.user);

  useEffect(() => {
    const dispatchUserDetails = async () => {
      const id = location.search.split("=")[1];
      dispatch(getUser(id) as any);
    };

    dispatchUserDetails();
  }, [dispatch, location.search]);

  // const handleCheckboxChange = async (installmentId) => {
  //   if (!user) return;

  //   const updatedInstallments = user.installments.map((i) =>
  //     i.id === installmentId ? { ...i, paid: !i.paid } : i
  //   );

  //   try {
  //     await dispatch(
  //       updateInstallments({
  //         userId: user._id,
  //         installments: updatedInstallments,
  //       })
  //     ).unwrap();
  //   } catch (error) {
  //     console.error("Failed to update installments:", error);
  //   }
  // };

  const handleBuyCourse = () => {
    if (!user) return;
    setItem("userId", user._id);
    navigate("/admin/payment");
  };

  return (
    <div className='min-h-screen w-full bg-gray-900 text-white p-8'>
      {loading && <div className='loader'></div>}

      <div className='flex items-center mb-4'>
        <Link
          to='/admin/users'
          className='text-neutral-500 hover:text-white transition-colors'
        >
          <FontAwesomeIcon icon={faArrowLeft} className='mr-2' /> Back
        </Link>
      </div>

      {error && (
        <div className='text-red-500 text-center'>
          <p>Failed to load user details: {error}</p>
        </div>
      )}

      {!loading && user && (
        <>
          <h1 className='text-4xl text-blue-500 text-center capitalize mb-8'>
            {user.username}
          </h1>
          <div className='mt-4 space-y-2'>
            <p>
              <span className='font-bold'>Email: </span>
              {user.email}
            </p>
            <p>
              <span className='font-bold'>Phone no.: </span>
              {user.phone}
            </p>
            <p>
              <span className='font-bold'>Address: </span>
              {user.address}
            </p>
            <p>
              <span className='font-bold'>Qualification: </span>
              {user.qualification}
            </p>
            <ul>
              <h1 className='text-2xl font-bold'>Purchased Courses</h1>
              {user.purchasedCourses.map((course: any) => (
                <li key={course._id}>{course.title}</li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleBuyCourse}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Add Course
          </button>
          {/* Checkboxes for installments */}
          {/* <div className='mt-8'>
            <h2 className='text-2xl font-bold mb-4'>Installments</h2>
            {user.payment[0].installments.map((installment) => (
              <div
                key={installment.id}
                className='flex items-center space-x-2 mb-2'
              >
                <input
                  type='checkbox'
                  id={`installment-${installment.id}`}
                  checked={installment.paid}
                  onChange={() => handleCheckboxChange(installment.id)}
                  className='form-checkbox h-5 w-5 text-blue-600'
                />
                <label
                  htmlFor={`installment-${installment.id}`}
                  className='select-none'
                >
                  Installment {installment.id}
                </label>
              </div>
            ))}
          </div> */}
        </>
      )}
    </div>
  );
};
