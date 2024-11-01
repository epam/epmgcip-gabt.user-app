"use client";

import { Box, Text } from "@radix-ui/themes";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import type { FC } from "react";
import Link from "next/link";

import { jost } from "@/src/constants/utils";

export const Breadcrumbs: FC = () => {
  const pathname: string = usePathname();
  const locale: string = useLocale();

  if (pathname === `/${locale}`) {
    return null;
  }

  const getTextFromUrl: () => string[] = () => {
    const transformedText: string = pathname.replace(`/${locale}/`, "");
    return transformedText
      .split("/")
      .filter((part: string) => part !== "")
      .map((part: string) => part.replace(/-/g, " "));
  };

  const capitalizeFirstLetter: (string: string) => string = (
    string: string
  ) => {
    if (string.length === 0) {
      return string;
    }
    return string[0].toUpperCase() + string.slice(1);
  };

  const capitalizeFirstLetterOfEachWord: (string: string) => string = (
    string: string
  ) => {
    return string
      .split(" ")
      .map((word: string) => capitalizeFirstLetter(word))
      .join(" ");
  };

  const routeForBreadcrumb: (endIndex: number) => string = (
    endIndex: number
  ) => {
    const arrayOfStringRoutes: string[] = pathname.split("/");
    const startIndex: number = 2;
    const result: string = arrayOfStringRoutes
      .slice(startIndex, endIndex + startIndex)
      .join("/");
    return result;
  };

  return (
    <Box className="bg-breadcrumbs-bg">
      <Box className="bg-light-yellow-shade">
        <Box className="h-[90px] mx-auto max-w-[1440px]">
          <Box className="w-full h-full flex items-center px-[30px] lg:px-[70px]">
            <Text className={`${jost.className} flex gap-x-3`}>
              <Link href={"/"} className="hover:opacity-60">
                Home
              </Link>
              {getTextFromUrl().map((item: string, index: number) => (
                <div key={index} className="flex items-center">
                  <Text>{">"}</Text>
                  <Link
                    href={`/${routeForBreadcrumb(index + 1)}`}
                    className="hover:opacity-60"
                  >
                    {capitalizeFirstLetterOfEachWord(item)}
                  </Link>
                </div>
              ))}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
