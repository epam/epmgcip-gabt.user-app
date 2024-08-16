import React from "react";
import { Box, Heading, Text } from "@radix-ui/themes";

import Link from "next/link";
import Image from "next/image";

import arrowIcon from "@/public/arrow.svg";

interface ICollapsibleBoxProps {
  title: string;
  items: { href: string; text: string }[];
  isVisible: boolean;
  onToggle: () => void;
}

const CollapsibleBox: React.FC<ICollapsibleBoxProps> = ({
  title,
  items,
  isVisible,
  onToggle,
}) => (
  <Box className="none md:flex-1 md:p-4 md:text-white md:flex md:flex-col md:items-center">
    <Box className="flex-1 p-4 text-white-text flex flex-col items-start border-t border-gray-600 md:border-t-0">
      <Heading
        onClick={onToggle}
        className="w-full font-bold text-lg mb-2 cursor-pointer flex justify-between items-center text-center md:mr-4 md:cursor-default md:border-none"
        style={{ color: "white" }}
      >
        {title}
        <Image
          src={arrowIcon}
          alt="Arrow"
          className={`transition-transform duration-300 ${
            isVisible ? "rotate-180" : ""
          } md:hidden`}
          style={{ width: "20px", height: "20px", filter: "invert(1)" }}
        />
      </Heading>
      <div className={`md:block ${isVisible ? "block" : "hidden"}`}>
        {items.map(({ href, text }) => (
          <Link key={href} href={href} className="block mb-1 pb-2">
            <Text className="text-lg text-white hover:underline hover:text-golden-yellow">
              {text}
            </Text>
          </Link>
        ))}
      </div>
    </Box>
  </Box>
);

export default CollapsibleBox;
