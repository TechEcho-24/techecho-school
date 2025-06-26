// /* eslint-disable react/prop-types */

const RankCard = ({
  rank,
  nextRank,
  userPoints,
  totalPoints,
  progress,
  rankColors,
  currentBarColor,
  nextBarColor,
}: any) => {
  return (
    <div className='bg-white p-6 rounded-xl shadow-md w-full '>
      {/* Level transition */}
      <div className='flex justify-between items-center mb-6'>
        {/* Current Rank */}
        <div className='flex flex-col items-center'>
          <div
            className={`w-14 h-14 rounded-full border-4 flex items-center justify-center ${rankColors[rank]}`}
          >
            <span className={`text-xl ${rankColors[rank]}`}>🏅</span>
          </div>
          <p className={`mt-1 text-sm font-semibold ${rankColors[rank]}`}>
            {rank}
          </p>
        </div>

        <div className='text-gray-400 text-2xl'>➜</div>

        {/* Next Rank */}
        <div className='flex flex-col items-center'>
          <div
            className={`w-14 h-14 rounded-full border-4 flex items-center justify-center ${
              rankColors[nextRank] || "border-gray-300 text-gray-400"
            }`}
          >
            <span
              className={`text-xl ${rankColors[nextRank] || "text-gray-400"}`}
            >
              🏅
            </span>
          </div>
          <p
            className={`mt-1 text-sm font-semibold ${
              rankColors[nextRank] || "text-gray-400"
            }`}
          >
            {nextRank}
          </p>
        </div>
      </div>

      {/* Points Summary */}
      <div className='text-sm text-gray-800 space-y-3'>
        <div className='flex justify-between items-center'>
          <span>Total Points</span>
          <span className='font-semibold'>
            {userPoints}/{totalPoints}
          </span>
        </div>
        <div className={`w-full h-2 rounded overflow-hidden ${nextBarColor}`}>
          <div
            className={`h-2 rounded ${currentBarColor}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RankCard;
