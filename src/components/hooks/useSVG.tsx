"use client";
import { useMemo } from "react";

interface IArrowSvgProps {
  direction: "left" | "right";
  color: string;
}

export const useArrowSvg = ({
  direction,
  color,
}: IArrowSvgProps): JSX.Element => {
  return useMemo(() => {
    const rotate: string =
      direction === "left" ? "rotate-custom-90" : "rotate-custom-270";
    return (
      <svg
        width="18"
        height="14"
        viewBox="0 0 13 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={rotate}
      >
        <path
          d="M12 1L6.5 6L1 0.999999"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }, [direction, color]);
};
