"use client";

import React, { useState } from "react";
import { Box, Heading, Section, Text } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa"; 
import {
  BOX1_ITEMS,
  BOX2_ITEMS,
  BOX3_ITEMS,
} from "../../constants/footer-items-mock";
import footerLogo from "../../../public/footer-logo.png";

const Footer: React.FC = () => {

  const [isBox1Visible, setIsBox1Visible] = useState(false);
  const [isBox2Visible, setIsBox2Visible] = useState(false);
  const [isBox3Visible, setIsBox3Visible] = useState(false);

  const toggleVisibility = (box: string) => {
    if (box === "box1") setIsBox1Visible(!isBox1Visible);
    if (box === "box2") setIsBox2Visible(!isBox2Visible);
    if (box === "box3") setIsBox3Visible(!isBox3Visible);
  };

  return (
    <Box className="bg-footer-bg text-white py-8">
      <Section className="container mx-auto px-4 py-0 flex flex-col md:flex-row md:justify-between">
        <Box className="flex-1 mb-4 text-white flex flex-col items-center md:items-start">
          <Image
            src={footerLogo}
            alt="Logo"
            className="mb-2"
            width={130}
            height={70}
          />
          <Text
            className="text-lg text-center md:text-left mt-4"
            style={{ color: "white" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </Text>
        </Box>
        <Box className="flex-1 p-4  text-white flex flex-col items-start   border-t border-gray-600 md:border-t-0">
          <Heading
            onClick={() => toggleVisibility("box1")}
            className=" w-full  font-bold text-lg mb-2 cursor-pointer flex justify-between items-center   md:cursor-default md:border-none"
            style={{ color: "white" }}
          >
            LOREM IPSUM
            <FaChevronDown
              className={`transition-transform duration-300 ${
                isBox1Visible ? "rotate-180" : ""
              } md:hidden`}
            />
          </Heading>
          <div className={`md:block ${isBox1Visible ? "block" : "hidden"}`}>
            {BOX1_ITEMS.map(({ href, text }) => (
              <Link key={href} href={href} className="block mb-1  pb-2">
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
        <Box className="flex-1 p-4 text-white flex flex-col items-start border-t border-gray-600 md:border-t-0">
          <Heading
            onClick={() => toggleVisibility("box2")}
            className="w-full font-bold text-lg mb-2 cursor-pointer flex justify-between items-center  md:cursor-default md:border-none"
            style={{ color: "white" }}
          >
            <span>LOREM IPSUM</span>

            <FaChevronDown
              className={`transition-transform duration-300 ${
                isBox2Visible ? "rotate-180" : ""
              } md:hidden`}
            />
          </Heading>
          <div className={`md:block ${isBox2Visible ? "block" : "hidden"}`}>
            {BOX2_ITEMS.map(({ href, text }) => (
              <Link key={href} href={href} className="block mb-1  pb-2">
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
        <Box className="flex-1 p-4 text-white flex flex-col items-start border-t border-gray-600 md:border-t-0">
          <Heading
            onClick={() => toggleVisibility("box3")}
            className=" w-full  font-bold text-lg mb-2 cursor-pointer flex justify-between items-center  pb-2 md:cursor-default md:border-none"
            style={{ color: "white" }}
          >
            FOOTER LINKS
            <FaChevronDown
              className={`transition-transform duration-300 ${
                isBox3Visible ? "rotate-180" : ""
              } md:hidden`}
            />
          </Heading>
          <div className={`md:block ${isBox3Visible ? "block" : "hidden"}`}>
            {BOX3_ITEMS.map(({ href, text }) => (
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
      </Section>
      <Box className="border-t border-gray-800 text-white ">
        <Section className="flex justify-center">
          <Text className="text-sm" style={{ color: "white" }}>
            © 2024 GABT named after A.Navoiy. All rights reserved. Designed by{" "}
            <Link href="https://www.epam.com" className="hover:text-dark-red">
              <Text className="text-sm">Epam</Text>
            </Link>
          </Text>
        </Section>
      </Box>
    </Box>
  );
};

export default Footer;
