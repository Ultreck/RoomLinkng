import React from "react";

interface CompleteProfileCardProps {
  progress: number; // 0 - 100
}

const CompleteProfileCard: React.FC<CompleteProfileCardProps> = ({
  progress,
}) => {
  const radius = 25;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="w-64 bg-green-900 text-white lg:p-4 p-2 rounded-2xl   shadow-md">
      <div className="text flex items-center space-x-3">
        {/* Circle Progress */}
        <div className="transform">
          <svg
            height={radius * 2}
            width={radius * 2}
            className="transform"
          >
            <circle
              stroke="#FFFFFF"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              stroke="#FAC036" 
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              strokeLinecap="round"
            />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="white"
              fontSize="10"
            >
              {`${progress}%`}
            </text>
          </svg>
        </div>

        {/* Text + Button */}
        <div className="flex-1 space-y-1">
          <h4 className="text-sm font-semibold">Complete profile</h4>
          <p className="text-xs text-gray-300 leading-snug">
            Complete your profile to unlock all features.
          </p>
        </div>
      </div>
      <button className="mt-2 w-full text-sm font-medium py-1.5 bg-white text-green-900 rounded-full hover:bg-gray-200 transition">
        Verify Identity
      </button>
    </div>
  );
};

export default CompleteProfileCard;
