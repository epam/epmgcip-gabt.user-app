import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { INextEvent } from "@/src/constants/next-events-mock";

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
    <Box className="w-full mt-8  bg-white flex">
      <Box className="ml-16 h-auto">
        <Image
          src={`${img}`}
          alt="image"
          height={228}
          width={310}
          className="object-cover"
        />
      </Box>

      <Box className="w-[50%] ml-8 p-[20px] flex flex-col justify-between">
        <Box>
          <Text as="p" className="font-medium uppercase text-dark-red text-sm">
            {t(`${type}`)}
          </Text>

          <Text
            as="p"
            className="mt-2 font-medium text-xl line-clamp-3 text-ellipsis overflow-hidden"
          >
            {title}
          </Text>

          <Flex className="mt-1 gap-[14px] items-center">
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

      <Flex className="w-[20%] flex-col justify-center items-center p-[20px] gap-[30px]">
        <Link
          href={link}
          className="py-2 px-4 w-full text-center bg-black text-white text-[15px] tracking-wide hover:opacity-60"
        >
          {t("button-buy-tickets")}
        </Link>

        <Link
          href={link}
          className="py-2 px-4 w-full text-center bg-transparent border border-black text-black text-[15px] tracking-wide hover:opacity-60"
        >
          {t("more-info")}
        </Link>
      </Flex>
    </Box>
  );
};
