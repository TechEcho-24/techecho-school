const TimeSelect = ({ value, setValue }: any) => (
  <div className='w-full'>
    <label className='block text-sm mb-1'>Schedule a Time</label>
    <select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`w-full text-base rounded-lg bg-transparent border-2 border-neutral-700 p-2 ${
        value ? "text-text-main" : "text-neutral-500"
      }`}
      required
    >
      <option value=''>Select Time</option>
      <option value='09:00'>09:00 AM</option>
      <option value='12:00'>12:00 PM</option>
      <option value='15:00'>03:00 PM</option>
      <option value='18:00'>06:00 PM</option>
    </select>
  </div>
);

export default TimeSelect;
