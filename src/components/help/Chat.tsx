import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Chat = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);

  return (
    <div className='h-screen flex justify-center items-center px-10'>
      {loader ? (
        <div className='loader'></div>
      ) : (
        <div className='text-white text-2xl text-center'>
          <p className='my-4'>
            Our all executive are busy.Please try after some time
          </p>
          <p>
            or request a callback{" "}
            <Link className='text-blue-500 underline' to={"/help"}>
              click here
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};
