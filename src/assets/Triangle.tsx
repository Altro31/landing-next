import type { ComponentProps } from "react";

export default function Triangle({ className }: ComponentProps<"svg">) {
  return (
    <svg
      width="720"
      height="80"
      viewBox="0 0 720 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_b_29220_354636)">
        <path d="M0 0L720 80H0V0Z" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_b_29220_354636"
          x="-20"
          y="-20"
          width="760"
          height="120"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_29220_354636"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_29220_354636"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
