import "../../bubbles.css"; // Make sure this import exists

export const BubblesBackground = () => {
  return (
    <div className='absolute inset-0 -z-10 overflow-hidden'>
      <div className='bubbles'>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className='bubble w-32 h-32 z-50 bg-blue-500'
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
