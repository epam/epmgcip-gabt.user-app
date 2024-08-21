import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { INextEvent } from "@/src/constants/next-events-mock";
import { formatDateWithDayName } from "@/src/constants/utils";

export const NextEventCard: ({
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
    <Box className="w-[310px] border border-solid border-black  bg-white">
      <Box className="w-full h-[228px]">
        <Image src={`${img}`} alt="image" height={228} width={310} />
      </Box>

      <Box className="py-[17px] px-[20px]">
        <Text as="p" className="font-medium uppercase text-dark-red text-sm">
          {t(`${type}`)}
        </Text>

        <Text
          as="p"
          className="mt-2 font-medium text-xl h-20 line-clamp-3 text-ellipsis overflow-hidden ..."
        >
          {title}
        </Text>

        <Flex className="mt-10 gap-[14px] items-center">
          <Image
            src={"/next-event-card/calendar.svg"}
            alt="calendar"
            width={14}
            height={16}
          />

          <Text className="text-sm text-black">
            {formatDateWithDayName(date)}
          </Text>
        </Flex>

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

      <Link
        href={link}
        className="py-4 flex items-center justify-center text-[15px] tracking-wide border-t border-solid border-black hover:opacity-60"
      >
        {t("more-info")}
      </Link>
    </Box>
  );
};
