import React from 'react'

interface ProgressCircleProps {
  value: number // 현재 값
  goal: number // 목표 값
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ value, goal }) => {
  const radius = 90
  const circumference = 2 * Math.PI * radius
  const progress = Math.min(value / goal, 1) // 진행률을 1로 제한
  const offset = circumference - progress * circumference
  const overProgress = Math.max((value - goal) / goal, 0) // 목표를 넘은 부분
  const overOffset = circumference - overProgress * circumference
  const color = value > goal ? '#F1F2F4' : '#6CC3E0'
  const strokeWidth = 14

  return (
    <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r={radius} stroke="#F1F2F4" strokeWidth={strokeWidth} fill="transparent" />
      <circle
        cx="100"
        cy="100"
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 100 100)"
        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
      />
      {value > goal && (
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#FF6A6E"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={overOffset}
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
      )}
    </svg>
  )
}

export default ProgressCircle
