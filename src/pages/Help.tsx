import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestCall } from "../features/user/userThunk";

export const Help = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: any) => state.user);
  const [phoneNum, setPhoneNum] = useState(""); // Changed to a string
  const [activeForm, setActiveForm] = useState(false);
  const [disableInput, setDisableInput] = useState(true);

  useEffect(() => {
    const isNumeric = /^\d+$/.test(phoneNum);
    setDisableInput(!(isNumeric && phoneNum.length > 9)); // Correct validation logic
  }, [phoneNum]);

  const handleSubmit = () => {
    dispatch(requestCall({ phone: phoneNum }) as any);
  };

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='text-white pt-[8rem] md:pt-0 px-10'>
        <h2 className='text-center text-2xl'>
          Want to chat now or get a call from us?
        </h2>
        <div className='flex justify-evenly flex-col md:flex-row gap-4 p-8'>
          {/* Chat */}
          <div className='md:basis-1/3 px-6 pt-6 border-4 border-neutral-600 rounded-lg text-center'>
            <FontAwesomeIcon icon={faMessage} className='text-3xl' />
            <h3 className='text-xl my-3'>Chat right now</h3>
            <p className='text-sm my-4'>
              Our messaging assistant can quickly solve many issues or direct
              you to the right person or place
            </p>
            <p className='text-neutral-400'>
              Instant chat and always available
            </p>
            <Link to='/chat' className='btn px-4 text-center w-full md:w-1/2'>
              <span className='btn-text text-sm'>Start Chatting</span>
            </Link>
          </div>

          {/* Call */}
          <div className='md:basis-1/3 px-6 pt-6 border-4 border-neutral-600 rounded-lg text-center'>
            <FontAwesomeIcon icon={faPhone} className='text-3xl' />
            <h3 className='text-xl my-3'>Have us call you</h3>
            <p className='text-sm my-4'>
              We will first get a few details about your query.
            </p>
            <p className='text-neutral-400'>
              Provide your contact, and we’ll call you right now.
            </p>

            {activeForm ? (
              <form>
                {/* {error && <p className='text-red-500'>{error}</p>} */}
                <input
                  type='tel'
                  placeholder='Enter your contact no'
                  name='phoneNum'
                  className='block bg-transparent border-4 border-neutral-500 mt-10 p-3 rounded w-full'
                  value={phoneNum}
                  onChange={(e) => setPhoneNum(e.target.value)}
                />
                <button
                  disabled={disableInput}
                  onClick={handleSubmit}
                  className={`bg-blue-500 rounded-lg my-4 py-3 w-full ${
                    disableInput ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  {loading ? <div className='btn-loader'></div> : "Submit"}
                </button>
              </form>
            ) : (
              <button
                className='btn px-4 text-center w-full md:w-1/2'
                onClick={() => setActiveForm(true)}
              >
                <span className='btn-text text-sm'>Call me</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
