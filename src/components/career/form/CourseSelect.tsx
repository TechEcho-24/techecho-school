export const CourseSelect = ({ value, onChange }: any) => {
  return (
    <>
      <div className='w-full'>
        <label className='block text-sm mb-1'>Select Course</label>
        <select
          name='course'
          onChange={onChange}
          value={value}
          className='w-full text-base rounded-lg bg-transparent text-text-main placeholder:text-neutral-500 border-2 border-neutral-700 p-2'
          required
        >
          <option value='' disabled selected>
            Choose a course
          </option>
          <option value='web-development'>Web Development</option>
          <option value='data-science'>Marketing</option>
          <option value='machine-learning'>UI/UX</option>
          <option value='mobile-app-development'>Mobile App Development</option>
        </select>
      </div>
    </>
  );
};
