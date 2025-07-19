import axios from "axios";
import { useState } from "react";
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

interface PaymentButtonProps {
  role: string;
  formPlaceholder: string;
}
const backend_url = import.meta.env.VITE_BACKEND_URL;

export const PaymentButton = ({
  role,
  formPlaceholder,
}: PaymentButtonProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading: courseLoading } = useGetAllCoursesQuery({});
  const { data: user, isLoading, isSuccess } = useGetUserQuery({});

  const [selectedCourseId, setSelectedCourseId] = useState<string>("");
  const [paymentLoading, setPaymentLoading] = useState(false);

  const courses: Course[] = data?.data || [];

  const selectedCourse = courses.find(
    (course) => course._id === selectedCourseId
  );
  const totalAmount = selectedCourse?.price || 0;

  const createOrder = async () => {
    if (!selectedCourse) {
      alert("Please select a course before proceeding.");
      return;
    }

    setPaymentLoading(true);

    try {
      const response = await axios.post(
        `${backend_url}/api/v1/payments/create-order`,
        {
          course: selectedCourse,
          totalAmount,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { data: order } = response.data;
      openRazorpay(order);
    } catch (error: any) {
      console.error("Error creating order:", error.message);
      alert("Something went wrong while creating the order.");
      setPaymentLoading(false);
    }
  };

  const openRazorpay = (order: any) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: order.amount,
      currency: "INR",
      order_id: order.id,
      name: "Course Purchase",
      description: `Purchase of ${selectedCourse?.title}`,
      handler: async (response: any) => {
        const paymentData = {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          course: selectedCourse,
          userId: getItem("userId"),
        };

        try {
          const verifyResponse = await axios.post(
            `${backend_url}/api/v1/payments/verify`,
            paymentData,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getItem("token")}`,
              },
            }
          );

          const { success } = verifyResponse.data;
          if (success) {
            alert("Payment successful!");
            setSelectedCourseId("");
            formPlaceholder === "step3" && navigate("/");
          } else {
            alert("Payment verification failed.");
          }
        } catch (error: any) {
          console.error("Verification error:", error.message);
          alert("Error verifying payment. Please contact support.");
        } finally {
          setPaymentLoading(false);
        }
      },
      prefill: {
        name: user?.name || "User Name",
        email: user?.email || "user@example.com",
      },
      theme: { color: "#3b82f6" },
      modal: {
        ondismiss: () => setPaymentLoading(false),
      },
    };

    if (typeof (window as any).Razorpay !== "undefined") {
      const rzp1 = new (window as any).Razorpay(options);
      rzp1.open();
    } else {
      alert("Razorpay script not loaded. Please refresh the page.");
      setPaymentLoading(false);
    }
  };

  const handleManualPayment = () => {
    if (!selectedCourse) return;

    const paymentData = {
      course: selectedCourse,
      totalAmount,
      userId: getItem("userId"),
    };

    dispatch(createManualPayment(paymentData) as any);
    setSelectedCourseId("");
    navigate("/admin/users");
  };

  if (courseLoading || isLoading) {
    return (
      <div className='flex justify-center items-center h-64'>
        <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500'></div>
      </div>
    );
  }

  return (
    <div className={formPlaceholder === "step3" ? "mt-[1rem]" : "mt-[20rem]"}>
      {isSuccess || role === "admin" ? (
        <div className='flex flex-col justify-center items-center w-full'>
          <h2 className='text-2xl font-bold text-white mb-6 text-center'>
            Select a Course
          </h2>

          <div className='w-full max-w-2xl flex gap-4 mb-6'>
            <select
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value)}
              className='flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value=''>Select a course</option>
              {courses.map((course) => (
                <option key={course._id} value={course._id}>
                  {course.title} - ₹{course.price.toLocaleString()}
                </option>
              ))}
            </select>
          </div>

          {selectedCourse && (
            <div className='bg-white rounded-lg shadow-xl p-6 w-full max-w-xl mb-6'>
              <h3 className='text-xl font-bold text-gray-800'>
                {selectedCourse.title}
              </h3>
              <p className='text-gray-600 my-2'>{selectedCourse.description}</p>
              <p className='text-gray-600'>Level: {selectedCourse.level}</p>
              <p className='text-gray-600 mb-4'>
                Duration: {selectedCourse.duration} months
              </p>
              <p className='text-xl font-bold text-right'>
                ₹{selectedCourse.price.toLocaleString()}
              </p>
            </div>
          )}

          {selectedCourse && (
            <button
              onClick={role === "admin" ? handleManualPayment : createOrder}
              disabled={paymentLoading}
              className='bg-purple-500 hover:bg-purple-600 disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors'
            >
              {paymentLoading ? (
                <div className='flex items-center gap-2'>
                  <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                  Processing...
                </div>
              ) : (
                `Buy Now (₹${totalAmount.toLocaleString()})`
              )}
            </button>
          )}
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center h-[10vh]'>
          <h2 className='py-10 text-red-500 text-xl'>You are not verified</h2>
          <button
            onClick={() => navigate("/")}
            className='bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg'
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};
