import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export const SettingsMenu = ({ isOpen, onClose, onLogout }: any) =>
  isOpen && (
    <div className='absolute top-12 right-0 w-56 bg-white text-black rounded-lg shadow-xl z-50 p-4'>
      <div className='flex justify-end'>
        <span onClick={onClose} className='text-xl text-red-500 cursor-pointer'>
          ✕
        </span>
      </div>
      <div className='mt-2 space-y-4'>
        <div className='flex items-center justify-between cursor-pointer hover:text-purple-500'>
          Settings <FontAwesomeIcon icon={faGear} />
        </div>
        <hr className='border-gray-300' />
        <div
          onClick={onLogout}
          className='flex items-center justify-between cursor-pointer hover:text-purple-500'
        >
          Logout <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </div>
      </div>
    </div>
  );
