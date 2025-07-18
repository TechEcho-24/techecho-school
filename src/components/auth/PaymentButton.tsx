import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getItem } from "../../utils";
import { createManualPayment } from "../../features/admin/adminThunk";
import { useGetUserQuery } from "@/features/auth/authApi";
import { useGetAllCoursesQuery } from "@/features/user/userApi";

interface Course {
  _id: string;
  title: string;
  price: number;
  level: string;
  duration: number;
  description: string;
}

interface RazorpayOrder {
  id: string;
  amount: number;
}

interface PaymentButtonProps {
  role: string;
  formPlaceholder: string;
}

export const PaymentButton = ({
  role,
  formPlaceholder,
}: PaymentButtonProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading: courseLaoding } = useGetAllCoursesQuery({});
  const { data: user, isLoading, isSuccess } = useGetUserQuery({});
  const [selectedCourses, setSelectedCourses] = useState<number | null>(null);

  const courses: Course[] = data?.data || [];

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

  if (courseLaoding) {
    return <div>Loading...</div>;
  }

  const createOrder = async () => {
    if (selectedCourses === null) return;

    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/payments/create-order",
        { course: courses[selectedCourses] },
        { headers: { "Content-Type": "application/json" } }
      );

      const { order }: { order: RazorpayOrder } = response.data;

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

  const openRazorpay = (order: RazorpayOrder) => {
    const options = {
      key: "rzp_test_vl2ROaEMAb3LGH",
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
            "http://localhost:3001/api/v1/payments/verify",
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
        name: user?.name || "User Name",
        email: user?.email || "user@example.com",
        contact: user?.phone || "9999999999",
      },
      theme: { color: "#3b82f6" },
    };

    if (typeof (window as any).Razorpay !== "undefined") {
      const rzp1 = new (window as any).Razorpay(options);
      rzp1.open();
      navigate("/course");
    } else {
      alert("Razorpay script not loaded. Please refresh the page.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourses(Number(e.target.value));
  };

  const handlePaymentManually = () => {
    if (selectedCourses === null) return;

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
      {isLoading && <div className='loader'></div>}
      <div className={formPlaceholder === "step3" ? "mt-[1rem]" : "mt-[20rem]"}>
        {isSuccess || role === "admin" ? (
          <div className='flex flex-col justify-center items-center'>
            <select
              name='course'
              id='course'
              onChange={handleChange}
              className={`px-2 py-4 rounded-lg border border-gray-300 mt-5 bg-transparent text-neutral-300 ${
                formPlaceholder === "step3" ? "w-11/12" : "w-1/2"
              }`}
            >
              <option value=''>Select course</option>
              {Array.isArray(courses) &&
                courses.map((course, index) => (
                  <option key={course._id} value={index} className='text-black'>
                    {course.title} - ₹{course.price}
                  </option>
                ))}
            </select>

            {selectedCourses !== null && (
              <div
                className={`card text-black bg-white mt-2 p-8 mx-20 rounded-lg shadow-xl shadow-[#a53b48] ${
                  formPlaceholder === "step3" ? "w-11/12" : "w-1/2"
                }`}
              >
                <div className='flex flex-row items-center justify-between'>
                  <h2 className='text-2xl font-semibold text-[var(--btn-bg)]'>
                    {courses[selectedCourses].title}
                  </h2>
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
                <p className='my-2'>{courses[selectedCourses].description}</p>
                <button
                  onClick={
                    role === "admin" ? handlePaymentManually : createOrder
                  }
                  className='bg-purple-500 hover:bg-purple-600 cursor-pointer text-white font-bold py-2 px-6 rounded mt-4'
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
