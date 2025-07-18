/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { PaymentButton } from "./PaymentButton";
import { useEffect } from "react";
// import { getAuthUser } from "../../features/auth/authThunk";

export const StepThreeForm = () => {
  const { error } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAuthUser() as any);
  }, [dispatch]);

  return (
    <>
      {/* form   */}
      <div className='flex flex-col items-start md:basis-1/2 px-8'>
        <div className='flex justify-between items-center w-11/12'>
          <h2 className='md:text-3xl text-2xl font-bold text-neutral-700'>
            Payment
          </h2>
          <h3 className='text-neutral-500 block'>
            <span className='text-text-main text-xl'>Step</span>-
            <span className='text-primary text-xl font-semibold'>3</span>/3
          </h3>
        </div>
        {error && (
          <div className='text-red-500 border-red-500 border-2 rounded-md p-2 bg-red-200'>
            <p>{error}</p>
          </div>
        )}

        <PaymentButton role='user' formPlaceholder='step3' />
      </div>
    </>
  );
};
