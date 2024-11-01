import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList: MediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);

    const handleChange = (event: MediaQueryListEvent): void => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
