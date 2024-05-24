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
  const color = value > goal ? 'lightgray' : 'blue'
  const strokeWidth = 14

  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r={radius} stroke="lightgray" strokeWidth={strokeWidth} fill="white" />
      <circle
        cx="100"
        cy="100"
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="white"
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
          stroke="red"
          strokeWidth={strokeWidth}
          fill="white"
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
