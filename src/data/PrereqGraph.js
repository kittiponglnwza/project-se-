import React from 'react';

const PrereqGraph = ({ chain }) => {
  if (!chain || chain.length === 0) return null;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">เส้นทางรายวิชา</h2>

      <svg width="400" height={chain.length * 90}>
        {chain.map((subject, index) => {
          const y = index * 90;

          return (
            <g key={index}>
              {/* Box */}
              <rect
                x="50"
                y={y}
                width="300"
                height="60"
                rx="10"
                ry="10"
                fill="#f0f0f0"
                stroke="#555"
                strokeWidth="2"
              />

              {/* Text */}
              <text
                x="200"
                y={y + 35}
                fontSize="14"
                fontWeight="bold"
                textAnchor="middle"
              >
                {subject}
              </text>

              {/* Arrow ↓ */}
              {index < chain.length - 1 && (
                <line
                  x1="200"
                  y1={y + 60}
                  x2="200"
                  y2={y + 90}
                  stroke="#333"
                  strokeWidth="2"
                />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default PrereqGraph;
