import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { PaymentButton } from "../auth/PaymentButton";
import { useGetUserQuery } from "@/features/auth/authApi";

export const Course = () => {
  const { data, isLoading, error } = useGetUserQuery({});
  const user = data?.data;
  const purchasedCourses: any = user?.purchasedCourses || [];
  return (
    <>
      {isLoading && (
        <div className='absolute top-1/2 md:left-1/2 left-[40%]'>loading</div>
      )}
      {error && (
        <p className='text-red-500 border border-red-500 bg-red-200'>
          {typeof error === "string"
            ? error
            : "data" in (error as any) &&
              typeof (error as any).data === "string"
            ? (error as any).data
            : "An error occurred. Please try again."}
        </p>
      )}
      {purchasedCourses.length !== 0 ? (
        <>
          <div className=' flex justify-center items-center flex-col md:mt-40  mt-32 p-4 '>
            <h1 className='text-center md:text-2xl text-lg mb-10 text-text-muted md:w-[75%] w-full'>
              Welcome,{" "}
              <b className='capitalize text-primary'>{user?.username}!</b> We’re
              delighted to have you on board. Our courses are carefully designed
              to help you expand your knowledge and enhance your skills in their
              respective fields. We’re excited to support you on this learning
              journey. If you have any questions or need assistance, feel free
              to reach out—we’re here to help!
            </h1>
            <p className='text-text-muted text-center'>
              {" "}
              You are currently enrolled in our{" "}
              {purchasedCourses.map((course: any, index: number) => (
                <span key={index}>
                  {/* {index === purchasedCourses.length - 1 && (
                    <span className='pr-2'>and</span>
                  )} */}
                  <b className='capitalize pr-2 text-primary'>
                    {course.title}
                    {index !== purchasedCourses.length - 1 ? "," : ""}
                  </b>
                </span>
              ))}
              course.
            </p>
            <div className='flex justify-center items-center flex-wrap gap-4 mt-6 w-full'>
              {purchasedCourses.map(
                (course: any, index: number) => (
                  console.log(course.title.split(" ")[0].toLowerCase()),
                  (
                    <li
                      key={index}
                      className='flex md:flex-row-reverse flex-col md:items-center gap-4 text-text-muted border border-neutral-600 md:basis-[40%]   m-4 hover:border-text-primary rounded-xl md:p-10 p-4  justify-between h-[300px]'
                    >
                      <figure className='basis-1/2'>
                        <img
                          src='/assets/career/fullstack.webp'
                          alt='course'
                          className='w-full'
                        />
                      </figure>
                      <div className='text-left'>
                        <h3 className='md:text-2xl text-xl text-primary '>
                          {course.title}
                        </h3>
                        <p className='md:my-6 mt-2 mb-4 '>
                          {course.description}
                        </p>
                        <Link
                          to={`/courses/${course._id}`}
                          className='bg-btn-bg p-2 mt-8 rounded-lg hover:bg-btn-hover-bg text-white transition-colors duration-300 px-4'
                        >
                          View Course <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                      </div>
                    </li>
                  )
                )
              )}
            </div>
          </div>
        </>
      ) : (
        <div className='flex justify-center items-center flex-col md:mt-40  mt-32 p-4'>
          <h1 className='text-center md:text-2xl text-lg mb-10 text-text-muted md:w-[75%] w-full'>
            Welcome, <b className='capitalize'>{user?.username}!</b> We’re
            delighted to have you on board. Our courses are carefully designed
            to help you expand your knowledge and enhance your skills in their
            respective fields. We’re excited to support you on this learning
            journey. If you have any questions or need assistance, feel free to
            reach out—we’re here to help!
          </h1>
          <p className='text-red-500 bg-red-100 p-4 rounded-sm text-center'>
            You haven't enrolled in any of our courses yet, please select a
            course from the options below and purchase it to get started!
          </p>

          <div className='w-full -mt-72 '>
            <PaymentButton role='user' formPlaceholder='profile' />
          </div>
        </div>
      )}
    </>
  );
};
