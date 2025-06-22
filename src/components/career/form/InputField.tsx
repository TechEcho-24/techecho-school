const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  ...rest
}: any) => (
  <div className='w-full'>
    <label className='block text-sm mb-1'>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className='w-full text-base rounded-lg bg-transparent text-text-main placeholder:text-neutral-500 border-2 border-neutral-700 p-2'
      required
      {...rest}
    />
  </div>
);

export default InputField;
