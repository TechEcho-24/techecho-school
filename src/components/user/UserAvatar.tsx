import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export const UserAvatar = ({ user, onUpload }: any) => (
  <div className='relative w-40 h-40 md:w-56 md:h-56 border-4 border-purple-400 rounded-full shadow-xl bg-white'>
    <img
      src={user?.avatar || "/assets/about/user.webp"}
      alt='User'
      className='object-cover w-full h-full rounded-full'
    />
    <label
      htmlFor='imageUpload'
      className='absolute right-1 bottom-1 cursor-pointer'
    >
      <FontAwesomeIcon
        icon={faPen}
        className='text-purple-600 bg-white border border-purple-600 rounded-full p-3 hover:bg-purple-600 hover:text-white transition'
      />
    </label>
    <input
      type='file'
      id='imageUpload'
      accept='image/*'
      hidden
      onChange={onUpload}
    />
  </div>
);
