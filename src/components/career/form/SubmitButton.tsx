const SubmitButton = ({ loading, value = "Submit Now" }: any) => (
  <button
    type='submit'
    className='w-full bg-btn-bg border-btn-bg text-white border-4 hover:bg-btn-hover-bg p-4 rounded-lg'
  >
    {loading ? <div className='btn-loader'></div> : value}
  </button>
);

export default SubmitButton;
