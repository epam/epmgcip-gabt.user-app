"use client";

import { Box, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";

import { NEXT_EVENTS } from "@/src/constants/next-events-mock";
import { bonnaNova, jost } from "@/src/constants/utils";

export default function EventsDetails({ params }: { params: { id: string } }) {
  const t: (arg: string) => string = useTranslations("Index");

  const { date, id, img, link, text, time, title, type } =
    NEXT_EVENTS[Number(params.id)];
  return (
    <Box className="mx-auto pt-[100px] lg:px-[70px] px-[30px] w-full max-w-[1440px] flex justify-between gap-x-[20px]">
      <Box className="max-w-[640px] w-full">
        <Text
          as="p"
          className={`${jost.className} font-medium uppercase text-dark-red text-sm`}
        >
          {t(`${type}`)}
        </Text>

        <Text
          as="p"
          className={`${bonnaNova.className} mt-[17px] font-medium text-[40px]`}
        >
          {title}
        </Text>
      </Box>
      <Box className="w-full">jjjjj</Box>
    </Box>
  );
}
