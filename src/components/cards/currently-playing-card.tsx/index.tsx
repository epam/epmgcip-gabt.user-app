import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { INextEvent } from "@/src/constants/next-events-mock";
import { IFont } from "@/src/constants/fonts";
import { Bona_Nova } from "next/font/google";

const bonnaNova: IFont = Bona_Nova({ subsets: ["latin"], weight: "400" });

export const CurrentlyPlayingCard: ({
  type,
  title,
  link,
  date,
  img,
  time,
}: INextEvent) => JSX.Element = ({
  type,
  title,
  link,
  date,
  img,
  time,
}: INextEvent) => {
  const t: (arg: string) => string = useTranslations("Index");

  return (
    <Box className="w-full mt-8 px-16 lg:pl-0 bg-white flex flex-col lg:flex-row lg:justify-between">
      <Box className="flex flex-col lg:flex-row lg:items-start">
        <Box className=" flex  lg:ml-16 h-auto">
          <Image
            src={`${img}`}
            alt="image"
            height={228}
            width={310}
            className="object-cover"
          />
        </Box>

        <Box className="w-full flex   lg:w-[40%] ml-0 lg:ml-8 p-4 lg:p-6  flex-col justify-between">
          <Box>
            <Text
              as="p"
              className="font-medium  uppercase text-dark-red text-sm"
            >
              {t(`${type}`)}
            </Text>

            <Text
              as="p"
              className={`${bonnaNova.className} mt-4 line-clamp-3 text-ellipsis overflow-hidden text-xl lg:text-3xl`}
            >
              {title}
            </Text>

            <Flex className="mt-4 gap-[14px] items-center">
              <Image
                src={"/next-event-card/clock.svg"}
                alt="clock"
                width={14}
                height={16}
              />
              <Text className="text-sm text-black">{`${time} ${t("h")}`}</Text>
            </Flex>
          </Box>
        </Box>
      </Box>

      <Flex className="flex  lg:flex-col lg:mr-32 lg:justify-center lg:items-center p-4 lg:p-6 gap-4 lg:gap-8">
        <Link
          href={link}
          className="w-[150px] lg:w-[150px] h-[50px] flex items-center justify-center bg-dark-red text-white text-[15px] tracking-wide hover:opacity-60"
        >
          <span className="border border-white px-5 py-2">
            {t("button-buy-tickets")}
          </span>
        </Link>

        <Link
          href={link}
          className="w-[150px] lg:w-[150px] h-[50px] flex items-center justify-center bg-golden-yellow text-black text-[15px] tracking-wide hover:opacity-60"
        >
          <span className="border border-white px-8 py-2">
            {t("more-info")}
          </span>
        </Link>
      </Flex>
    </Box>
  );
};
