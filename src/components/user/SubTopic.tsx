import { useState } from "react";

export const SubTopic = ({ subtopic }: any) => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => setChecked(!checked);

  return (
    <li className='text-gray-700 text-lg mb-2 flex justify-between items-center group transition-all duration-300'>
      <div>
        <span className='text-primary font-semibold'>•</span> {subtopic}
      </div>

      {/* Animated Checkbox */}
      <label className='relative cursor-pointer flex items-center'>
        <input
          type='checkbox'
          className='peer hidden'
          checked={checked}
          onChange={toggleCheckbox}
        />
        <div
          className={`
            w-5 h-5 border-2 border-gray-400 rounded-sm flex items-center justify-center
            transition-all duration-200
            peer-checked:bg-primary peer-checked:border-primary
            group-hover:border-primary
          `}
        >
          <svg
            className={`w-3 h-3 text-white transition-transform duration-300 ${
              checked ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
            fill='none'
            stroke='currentColor'
            strokeWidth='3'
            viewBox='0 0 24 24'
          >
            <path d='M5 13l4 4L19 7' />
          </svg>
        </div>
      </label>
    </li>
  );
};
