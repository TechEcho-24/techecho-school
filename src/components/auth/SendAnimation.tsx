const TickAnimation = () => {
    return (
      <div className='tick-container mx-auto my-8'>
        <div className='confetti'></div>
        <svg
          className='tick-svg'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 100 100'
        >
          {/* Circle Background */}
          <circle
            className='circle-bg'
            cx='50'
            cy='50'
            r='40'
            fill='none'
            stroke='#ddd'
            strokeWidth='6'
          />
          {/* Animated Circle Border */}
          <circle
            className='circle-anim'
            cx='50'
            cy='50'
            r='40'
            fill='none'
            stroke='#4CAF50'
            strokeWidth='6'
          />
          {/* Tick Path */}
          <path
            className='tick-path'
            fill='none'
            stroke='#4CAF50'
            strokeWidth='6'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M30 50 L45 65 L70 35'
          />
        </svg>
      </div>
    );
  };
  
  export default TickAnimation;
  