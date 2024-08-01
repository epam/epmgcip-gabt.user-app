"use client";

import React from "react";
import { Box, Section, Text } from "@radix-ui/themes";
import Link from "next/link";
import { Bona_Nova } from "next/font/google";
import linkimage1 from "../../../../public/quicklinks1.png";
import linkimage2 from "../../../../public/quicklinks2.png";
import linkimage3 from "../../../../public/quicklinks3.png";

const bonnaNova = Bona_Nova({ subsets: ["latin"], weight: "400" });

const QuickLinks: React.FC = () => {
  return (
    <Box className="bg-gray-100 p-8">
      <Section className="flex flex-col  justify-center items-center md:flex-row gap-5">
        <Box
          className="w-full sm:w-[420px] sm:h-[170px] bg-light-gold p-4 bg-white shadow-md rounded-lg border border-gray-300"
          style={{
            backgroundImage: `url(${linkimage1.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Section className="w-full h-full flex justify-center items-center border">
            <Link href="/history" passHref>
              <Text
                as="a"
                className={`${bonnaNova.className} text-4xl font-semibold transition-colors duration-300`}
              >
                History
              </Text>
            </Link>
          </Section>
        </Box>
        <Box
          className="w-full sm:w-[420px] sm:h-[170px] bg-light-almond p-4 bg-white shadow-md rounded-lg border border-gray-300"
          style={{
            backgroundImage: `url(${linkimage2.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center top 20px",
            backgroundRepeat: "no-repeat",
            paddingTop: "10px",
          }}
        >
          <Section className="w-full h-full flex justify-center items-center border">
            <Link href="/our-team" passHref>
              <Text
                as="a"
                className={`${bonnaNova.className} text-4xl font-semibold transition-colors duration-300`}
              >
                Our Team
              </Text>
            </Link>
          </Section>
        </Box>
        <Box
          className="w-full sm:w-[420px] sm:h-[170px] bg-gold-fusion p-4 bg-white shadow-md rounded-lg border border-gray-300"
          style={{
            backgroundImage: `url(${linkimage3.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Section className="w-full h-full flex justify-center items-center border">
            <Link href="/dress-code" passHref>
              <Text
                as="a"
                className={`${bonnaNova.className} text-4xl font-semibold transition-colors duration-300`}
              >
                Dress Code
              </Text>
            </Link>
          </Section>
        </Box>
      </Section>
    </Box>
  );
};

export default QuickLinks;
