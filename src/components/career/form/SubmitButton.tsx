const SubmitButton = ({ loading, value = "Submit Now" }: any) => (
  <button
    type='submit'
    className='w-full bg-purple-500 hover:bg-purple-400   text-white p-4 rounded-lg'
  >
    {loading ? <div className='btn-loader'></div> : value}
  </button>
);

export default SubmitButton;
