"use client";
import React, { useState } from "react";
import { Box, Section, Text } from "@radix-ui/themes";
import Image from "next/image";
import CollapsibleBox from "../boxes/collapsible-box/collapsible-box";
import {
  FOOTER_SECTION_ONE,
  FOOTER_SECTION_TWO,
  FOOTER_SECTION_THREE,
} from "@/src/constants/footer-items-mock";
import footerLogo from "@/public/footerLogo.svg";
import Link from "next/link";
import facebook from "@/public/facebook.svg";
import teleg from "@/public/telegram.svg";
import insta from "@/public/insta.svg";
import { footerLiterals } from "@/src/constants/footer-literals";
import EpamLogo from "@/public/epam-logo.svg";

const CurrentFooterSection: React.FC = () => {
  const [visibleBox, setVisibleBox] = useState<string | null>(null);

  const handleToggle = (box: string) => () => {
    setVisibleBox((prev) => (prev === box ? null : box));
  };

  return (
    <Box className="bg-footer-bg text-white pt-8">
      <Section className="container mx-auto px-0 py-0 flex flex-col md:flex-row md:justify-between md:px-4 ">
        <Box className="flex-1 mb-4 text-white flex flex-col items-center ">
          <Image
            src={footerLogo}
            alt="Logo"
            className="mb-2"
            width={130}
            height={70}
          />
          <Text
            className="text-lg text-center  mt-4"
            style={{ color: "white" }}
          >
            {footerLiterals.description}
          </Text>
          <Box className="w-full mt-4 flex gap-4 justify-center">
            <div className="w-full mt-4 flex gap-4 justify-center">
              <Link href={footerLiterals.facebookUrl} target="_blank">
                <div className="bg-red-500 rounded-full border border-white hover:border-golden-yellow py-2 px-3 hover:bg-golden-yellow group">
                  <Image
                    src={facebook}
                    alt="Facebook"
                    width={7}
                    height={6}
                    className="group-hover:filter group-hover:invert"
                  />
                </div>
              </Link>
              <Link href={footerLiterals.telegramUrl} target="_blank">
                <div className="bg-red-500 rounded-full border border-white hover:border-golden-yellow p-2 hover:bg-golden-yellow group">
                  <Image
                    src={teleg}
                    alt="Telegram"
                    width={16}
                    height={16}
                    className="group-hover:filter group-hover:invert"
                  />
                </div>
              </Link>
              <Link href={footerLiterals.instagramUrl} target="_blank">
                <div className="bg-red-500 rounded-full border border-white hover:border-golden-yellow p-2 hover:bg-golden-yellow group">
                  <Image
                    src={insta}
                    alt="Instagram"
                    width={16}
                    height={16}
                    className="group-hover:filter group-hover:invert"
                  />
                </div>
              </Link>
            </div>
          </Box>
        </Box>
        <CollapsibleBox
          title={footerLiterals.collapsibleTitles[0]}
          items={FOOTER_SECTION_ONE}
          isVisible={visibleBox === "box1"}
          onToggle={handleToggle("box1")}
        />
        <CollapsibleBox
          title={footerLiterals.collapsibleTitles[1]}
          items={FOOTER_SECTION_TWO}
          isVisible={visibleBox === "box2"}
          onToggle={handleToggle("box2")}
        />
        <CollapsibleBox
          title={footerLiterals.collapsibleTitles[2]}
          items={FOOTER_SECTION_THREE}
          isVisible={visibleBox === "box3"}
          onToggle={handleToggle("box3")}
        />
      </Section>
      <Box className="border-t border-gray-800 text-white">
        <Section className="flex justify-center py-4">
          <Text
            className="text-sm flex flex-col  items-center text-center  md:flex-row"
            style={{ color: "white" }}
          >
            {footerLiterals.copyright}
            <Link href="https://www.epam.com" className="flex ml-1">
              <Text className="text-sm flex items-center">
                {footerLiterals.epamText}
              </Text>
              <Image src={EpamLogo} alt="EPAM" className="ml-2 mt-1" />
            </Link>
          </Text>
        </Section>
      </Box>
    </Box>
  );
};

export default CurrentFooterSection;
