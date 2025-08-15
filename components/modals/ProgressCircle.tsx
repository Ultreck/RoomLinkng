import React from 'react'

type ProgressCircleProps = {
    data: number;
}
const ProgressCircle = ({data}: ProgressCircleProps) => {
    const radius = 15;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 0.7;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (data / 100) * circumference;
  return (
     <div className="transform">
          <svg
            height={radius * 2}
            width={radius * 2}
            className="transform"
          >
            <circle
              stroke="#A5A5A5"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              stroke="#00A859" 
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              strokeLinecap="round"
            />
          </svg>
        </div>
  )
}

export default ProgressCircle