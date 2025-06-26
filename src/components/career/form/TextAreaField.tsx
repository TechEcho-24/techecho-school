const TextareaField = ({ label, name, value, onChange }: any) => (
  <div className='w-full mb-4'>
    <label className='block text-sm mb-1'>{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={5}
      className='w-full text-text-main text-base placeholder:text-neutral-500 border-2 border-neutral-700 p-4 bg-transparent rounded-lg'
      required
    />
  </div>
);

export default TextareaField;
