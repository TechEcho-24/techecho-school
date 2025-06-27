import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Design = () => {
  useGSAP(() => {
    gsap.from("h1", {
      opacity: 0,
      duration: 2,
      scale: 2,
    });
  });
  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <h1 className='text-3xl text-white'>Coming Soon...</h1>
    </div>
  );
};
