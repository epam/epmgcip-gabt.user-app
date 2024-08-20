"use client";

import React from "react";
import { Box, Section, Text } from "@radix-ui/themes";
import Link from "next/link";
import { Bona_Nova } from "next/font/google";

import { IQuickLink, QUICK_LINKS } from "@/src/constants/quick-links-literals";
import { IFont } from "@/src/constants/fonts";

const bonnaNova: IFont = Bona_Nova({ subsets: ["latin"], weight: "400" });

const QuickLinks: React.FC = () => {
  return (
    <Box className="bg-gray-100 p-8">
      <Section className="flex flex-col justify-center items-center md:flex-row gap-5">
        {QUICK_LINKS.map((link: IQuickLink, index: number) => (
          <Box
            key={index}
            className={`w-full sm:w-[420px] sm:h-[170px] p-4 bg-white shadow-md rounded-lg border border-gray-300  ${link.backgroundColor}`}
            style={{
              backgroundImage: `url(${link.backgroundImage})`,
              backgroundSize: link.backgroundSize,
              backgroundPosition: link.backgroundPosition,
              backgroundRepeat: link.backgroundRepeat,
              paddingTop: link.paddingTop,
            }}
          >
            <Section className="w-full h-full flex justify-center items-center border">
              <Link href={link.href} passHref>
                <Text
                  className={`${bonnaNova.className} text-4xl font-semibold transition-colors duration-300`}
                >
                  {link.text}
                </Text>
              </Link>
            </Section>
          </Box>
        ))}
      </Section>
    </Box>
  );
};

export default QuickLinks;
