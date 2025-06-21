import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { scheduleForm } from "../../features/user/userSlice";
import { Thankyou } from "./Thankyou";
import InputField from "./form/InputField";
import TextareaField from "./form/TextareaField";
import DateField from "./form/DateField";
import TimeSelect from "./form/TimeSelect";
import SubmitButton from "./form/SubmitButton";
import { CourseSelect } from "./form/CourseSelect";

export const QueryCallForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    message: "",
    email: "",
    course: "",
  });

  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [isDataPosted, setIsDataPosted] = useState(false);

  const handleChange = (e) => {
    console.log("handleChange called", e.target.name, e.target.value);
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const combinedDateTime = new Date(`${scheduleDate}T${scheduleTime}`);
      const payload = { ...userData, schedule: combinedDateTime.toISOString() };

      dispatch(scheduleForm(payload));
      setIsDataPosted(true);

      setTimeout(() => navigate("/"), 10000);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  if (isDataPosted && !error && !loading) return <Thankyou />;

  return (
    <section className='pt-[5rem] md:pt-[7rem] w-11/12 mx-auto min-h-screen flex items-center'>
      <div className='flex flex-col md:flex-row justify-between w-full gap-10 items-center'>
        <div className='hidden md:block md:basis-2/5'>
          <img src='/assets/schedule1.png' alt='schedule' className='w-full' />
        </div>

        <form
          onSubmit={handleSubmit}
          className='text-text-muted basis-full md:basis-1/2'
        >
          <h2 className='text-2xl text-primary text-center mb-2 font-semibold'>
            Let’s see TechEcho in Action
          </h2>
          <p className='text-sm text-center mb-8'>
            Discover how our solutions can help you streamline workflows,
            enhance productivity, and achieve your goals. Book a free demo to
            explore our platform, features, and how we can tailor our solutions
            to your needs.
          </p>

          <div className='flex flex-col md:flex-row gap-4 mb-4'>
            <InputField
              label='Enter your name'
              name='name'
              value={userData.name}
              onChange={handleChange}
            />
            <InputField
              label='Enter your contact number'
              name='phone'
              type='tel'
              value={userData.phone}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4 flex flex-col md:flex-row gap-4'>
            <InputField
              label='Official Email Address'
              name='email'
              type='email'
              value={userData.email}
              onChange={handleChange}
            />
            <CourseSelect value={userData.course} onChange={handleChange} />
          </div>
          <div className='flex flex-col md:flex-row gap-4 mb-4'>
            <DateField value={scheduleDate} setValue={setScheduleDate} />
            <TimeSelect value={scheduleTime} setValue={setScheduleTime} />
          </div>

          <TextareaField
            label='How do you plan to use TechEcho?'
            name='message'
            value={userData.message}
            onChange={handleChange}
          />

          <SubmitButton loading={loading} />
        </form>
      </div>
    </section>
  );
};
