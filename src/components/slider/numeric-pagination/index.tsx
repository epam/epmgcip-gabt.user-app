import React from "react";
import { useArrowSvg } from "../../hooks/useSVG";

interface INumericPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const NumericPagination: React.FC<INumericPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages: number[] = Array.from(
    { length: totalPages },
    (_: unknown, index: number) => index + 1
  );

  const handlePageChange = (page: number): void => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const leftArrow: React.ReactElement = useArrowSvg({
    direction: "left",
    color: currentPage === 1 ? "gray" : "black",
  });

  const rightArrow: React.ReactElement = useArrowSvg({
    direction: "right",
    color: currentPage === totalPages ? "gray" : "black",
  });

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black"
      >
        {leftArrow}
      </button>
      {pages.map((page: number) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-12 h-12 text-2xl font-bold flex items-center justify-center rounded-full ${currentPage === page ? "bg-dark-red text-white" : "bg-white text-black"}`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black"
      >
        {rightArrow}
      </button>
    </div>
  );
};
