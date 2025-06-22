import { useEffect, useState } from "react";

const DateField = ({ value, setValue }: any) => {
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  return (
    <div className='w-full'>
      <label className='block text-sm mb-1'>Schedule a Date</label>
      <input
        type='date'
        name='scheduleDate'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min={minDate}
        className={`w-full px-2 py-1 border-2 border-neutral-700 rounded-lg bg-transparent appearance-none ${
          value ? "text-text-main" : "text-neutral-500"
        }`}
        required
      />
    </div>
  );
};

export default DateField;
