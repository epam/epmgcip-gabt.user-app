"use client";

import React, { useState } from "react";
import { Box, Section, Text } from "@radix-ui/themes";
import Image from "next/image";
import CollapsibleBox from "../boxes/collapsible-box/collapsible-box";
import {
  BOX1_ITEMS,
  BOX2_ITEMS,
  BOX3_ITEMS,
} from "../../constants/footer-items-mock";
import footerLogo from "../../../public/footer-logo.png";
import Link from "next/link";
import facebook from "../../../public/facebook.png";
import teleg from "../../../public/telegram.png";
import insta from "../../../public/insta.png";

const Footer: React.FC = () => {
  const [visibleBox, setVisibleBox] = useState<string | null>(null);

  const handleToggle = (box: string) => () => {
    setVisibleBox((prev) => (prev === box ? null : box));
  };

  return (
    <Box className="bg-footer-bg text-white py-8">
      <Section className="container mx-auto px-4 py-0 flex flex-col md:flex-row md:justify-between">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </Text>
          <Box className="w-full mt-4 flex gap-4 justify-center">
            <Link href="https://facebook.com" target="_blank">
              <Image src={facebook} alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="https://telegram.org" target="_blank">
              <Image src={teleg} alt="Telegram" width={24} height={24} />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Image src={insta} alt="Instagram" width={24} height={24} />
            </Link>
          </Box>
        </Box>
        <CollapsibleBox
          title="LOREM IPSUM"
          items={BOX1_ITEMS}
          isVisible={visibleBox === "box1"}
          onToggle={handleToggle("box1")}
        />
        <CollapsibleBox
          title="LOREM IPSUM"
          items={BOX2_ITEMS}
          isVisible={visibleBox === "box2"}
          onToggle={handleToggle("box2")}
        />
        <CollapsibleBox
          title="LOREM IPSUM"
          items={BOX3_ITEMS}
          isVisible={visibleBox === "box3"}
          onToggle={handleToggle("box3")}
        />
      </Section>
      <Box className="border-t border-gray-800 text-white">
        <Section className="flex justify-center">
          <Text className="text-sm" style={{ color: "white" }}>
            © 2024 GABT named after A.Navoiy. All rights reserved. Designed by{" "}
            <Link href="https://www.epam.com" className="hover:text-dark-red">
              <Text className="text-sm" style={{ color: "white" }}>
                Epam
              </Text>
            </Link>
          </Text>
        </Section>
      </Box>
    </Box>
  );
};

export default Footer;
