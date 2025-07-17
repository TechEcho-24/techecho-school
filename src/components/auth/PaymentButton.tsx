import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import { getCourses, getUser } from "../../features/user/userThunk";
import { getItem } from "../../utils";
import { createManualPayment } from "../../features/admin/adminThunk";
import { useGetUserQuery } from "@/features/auth/authApi";

// payment interface
export const PaymentButton = ({
  role,
  formPlaceholder,
}: {
  role: string;
  formPlaceholder: string;
}) => {
  const dispatch = useDispatch();
  const { data, isLoading, isSuccess } = useGetUserQuery({});
  const { courses } = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  // selected courses  state
  const [selectedCourses, setSelectedCourses] = useState<any>(null);
  const user = data?.user || "";
  // load razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => console.log("Razorpay script loaded successfully!");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // function to create order
  const createOrder = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/payments/create-order",
        { course: courses[selectedCourses] },
        { headers: { "Content-Type": "application/json" } }
      );

      const { order } = response.data;
      if (order) {
        openRazorpay(order);
      } else {
        console.error("Order creation failed: Missing order details.");
        alert("Unable to create an order. Please try again.");
      }
    } catch (error: any) {
      console.error("Error creating order:", error.message);
      alert("Something went wrong while creating the order.");
    }
  };

  // function to open razorpay payment modal
  const openRazorpay = (order: any) => {
    const options = {
      key: "rzp_test_vl2ROaEMAb3LGH", // Replace with your Razorpay API key
      amount: order.amount,
      currency: "INR",
      order_id: order.id,
      handler: async (response: any) => {
        const paymentData = {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        };

        try {
          const verifyResponse = await axios.post(
            "http://localhost:3001/api/payments/verify",
            paymentData,
            { headers: { "Content-Type": "application/json" } }
          );

          const { success } = verifyResponse.data;
          if (success) {
            alert("Payment verified successfully!");
            formPlaceholder === "step3" && navigate("/");
          } else {
            alert("Payment verification failed!");
          }
        } catch (error: any) {
          console.error("Payment verification failed:", error.message);
          alert("Error verifying payment. Please contact support.");
        }
      },
      prefill: {
        name: user?.name || "User Name", // Use dynamic user name if available
        email: user?.email || "user@example.com", // Use dynamic user email if available
        contact: user?.phone || "9999999999", // Use dynamic user phone if available
      },
      theme: {
        color: "#3b82f6", // Customize the theme color
      },
    };

    if (typeof (window as any).Razorpay !== "undefined") {
      const rzp1 = new (window as any).Razorpay(options);
      rzp1.open();
      navigate("/course");
    } else {
      alert("Razorpay script not loaded. Please refresh the page.");
    }
  };

  // function to handle the selected course
  const handleChange = (e: any) => {
    setSelectedCourses(e.target.value);
  };

  // add dispatch for this function to handle payment manually for admin
  const handlePaymentManually = () => {
    const data = {
      course: courses[selectedCourses]._id,
      price: courses[selectedCourses].price,
      userId: getItem("userId"),
    };
    dispatch(createManualPayment(data) as any);
    navigate("/admin/users");
  };

  return (
    <>
      {/* loading spinner  */}
      {isLoading && <div className='loader'></div>}
      <div
        className={`${
          formPlaceholder === "step3" ? "mt-[1rem]" : "mt-[20rem]"
        }`}
      >
        {/* checking is the user is verified  */}
        {isSuccess || role === "admin" ? (
          <div className='flex flex-col justify-center items-center'>
            {/* <h2>Select Courses below to continue</h2> */}
            {/* course selector  */}
            <select
              name='course'
              id='course'
              onChange={handleChange}
              className={`px-2 py-4 rounded-lg border border-gray-300 mt-5 bg-transparent text-neutral-300 ${
                formPlaceholder === "step3" ? "w-11/12" : "w-1/2"
              }`}
            >
              <option value=''>Select course</option>
              {courses.map((course: any, index: number) => (
                <option key={index} value={index} className='text-black'>
                  {course.title} - ₹{course.price}
                </option>
              ))}
            </select>

            {/* course card  */}
            {selectedCourses && (
              <div
                className={`card text-black bg-white mt-2 p-8 mx-20 rounded-lg shadow-xl shadow-[#a53b48]  ${
                  formPlaceholder === "step3" ? "w-11/12" : "w-1/2"
                }`}
              >
                <div className='flex flex-row items-center justify-between'>
                  <h2 className='text-2xl font-semibold text-[var(--btn-bg)]'>
                    {courses[selectedCourses].title}
                  </h2>
                  {/* <p className='text-gray-400'>Course Details</p> */}
                  <p className='text-black text-2xl mt-2 font-bold'>
                    ₹{courses[selectedCourses].price}
                  </p>
                </div>
                <div className='flex flex-row justify-between'>
                  <p>
                    <span className='text-xl font-semibold'>Level:</span>{" "}
                    {courses[selectedCourses].level}
                  </p>
                  <p>
                    <span className='text-xl font-semibold'>Duration:</span>{" "}
                    {courses[selectedCourses].duration} months
                  </p>
                </div>
                <p className=' my-2'>{courses[selectedCourses].description}</p>
                <button
                  // onClick={createOrder}
                  onClick={
                    role === "admin" ? handlePaymentManually : createOrder
                  }
                  className='bg-[var(--btn-bg)] hover:bg-[var(--btn-hover-bg)] text-white font-bold py-2 px-6 rounded mt-4 '
                >
                  {isLoading ? (
                    <div className='btn-loader'></div>
                  ) : (
                    "Proceed to pay"
                  )}
                </button>
              </div>
            )}
          </div>
        ) : (
          // not verified message
          <div className='flex flex-col justify-center items-center h-[10vh]'>
            <h2 className='py-10 text-red-500'>You are not verified</h2>
            <button
              onClick={() => navigate("/")}
              className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
            >
              Login
            </button>
          </div>
        )}
      </div>
    </>
  );
};
