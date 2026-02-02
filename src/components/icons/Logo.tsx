import * as React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Rajeev Kavala Logo"
    >
      <rect
        width="32"
        height="32"
        rx="8"
        className="fill-blue-600 dark:fill-blue-500"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        className="fill-white font-bold"
        fontSize="16"
      >
        RK
      </text>
    </svg>
  );
}
