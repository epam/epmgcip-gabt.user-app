import React from "react";
import { Box, Heading, Text } from "@radix-ui/themes";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

interface CollapsibleBoxProps {
  title: string;
  items: { href: string; text: string }[];
  isVisible: boolean;
  onToggle: () => void;
}

const CollapsibleBox: React.FC<CollapsibleBoxProps> = ({
  title,
  items,
  isVisible,
  onToggle,
}) => (
  <Box className="flex-1 p-4 text-white flex flex-col items-start border-t border-gray-600 md:border-t-0 md:items-center">
    <Heading
      onClick={onToggle}
      className="w-full font-bold text-lg mb-2 cursor-pointer flex justify-between items-center text-center md:justify-center md:mr-4 md:cursor-default md:border-none"
      style={{ color: "white" }}
    >
      {title}
      <FaChevronDown
        className={`transition-transform duration-300 ${
          isVisible ? "rotate-180" : ""
        } md:hidden`}
      />
    </Heading>
    <div className={`md:block ${isVisible ? "block" : "hidden"}`}>
      {items.map(({ href, text }) => (
        <Link key={href} href={href} className="block mb-1 pb-2">
          <Text
            className="hover:text-dark-red text-lg"
            style={{ color: "white" }}
          >
            {text}
          </Text>
        </Link>
      ))}
    </div>
  </Box>
);

export default CollapsibleBox;
