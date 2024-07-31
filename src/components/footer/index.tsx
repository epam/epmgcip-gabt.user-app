"use client";
import { Box, Heading, Section, Text } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";
import {
  BOX1_ITEMS,
  BOX2_ITEMS,
  BOX3_ITEMS,
} from "../../constants/footer-items-mock";
import footerLogo from "../../../public/footer-logo.png";

const Footer: React.FC = () => {
  return (
    <Box className="bg-footer-bg text-white py-8 min-h-[4rem]">
      <Section className="container mx-auto px-4 flex flex-wrap justify-between">
        <Box className="flex-1 mb-4 text-white flex flex-col items-center">
          <Image
            src={footerLogo}
            alt="Logo"
            className="mb-2"
            width={130}
            height={70}
          />
          <Text
            style={{ color: "white" }}
            className="text-lg text-center mt-4 w-"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </Text>
        </Box>
        <Box className="flex-1 mb-4 text-white flex flex-col items-center">
          <Heading
            style={{ color: "white" }}
            className="font-bold text-lg mb-2"
          >
            LOREM IPSUM
          </Heading>
          {BOX2_ITEMS.map(({ href, text }) => (
            <Link key={href} href={href} className="block mb-1">
              <Text
                style={{ color: "white" }}
                className=" hover:text-dark-red hover:underline text-lg"
              >
                {text}
              </Text>
            </Link>
          ))}
        </Box>
        <Box className="flex-1 mb-4 text-white flex flex-col items-center">
          <Heading
            style={{ color: "white" }}
            className="font-bold text-lg mb-2"
          >
            LOREM IPSUM
          </Heading>
          {BOX3_ITEMS.map(({ href, text }) => (
            <Link key={href} href={href} className="block mb-1">
              <Text
                style={{ color: "white" }}
                className=" hover:text-dark-red hover:underline text-lg"
              >
                {text}
              </Text>
            </Link>
          ))}
        </Box>
        <Box className="flex-1 mb-4 text-white flex flex-col items-center">
          <Heading
            style={{ color: "white" }}
            className="font-bold text-lg mb-2"
          >
            FOOTER LINKS
          </Heading>
          {BOX1_ITEMS.map(({ href, text }) => (
            <Link key={href} href={href} className="block mb-1">
              <Text
                style={{ color: "white" }}
                className=" hover:text-dark-red hover:underline text-lg"
              >
                {text}
              </Text>
            </Link>
          ))}
        </Box>
      </Section>
      <Box className="border-t border-gray-800  text-white">
        <Section className="  flex justify-center">
          <Text style={{ color: "white" }} className="text-sm">
            © 2024 GABT named after A.Navoiy. All rights reserved. Designed by{" "}
            <Link href="https://www.epam.com">
              <Text className="underline">Epam</Text>
            </Link>
          </Text>
        </Section>
      </Box>
    </Box>
  );
};

export default Footer;
