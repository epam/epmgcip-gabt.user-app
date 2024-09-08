"use client";

import { Box, Flex } from "@radix-ui/themes";

import { InfoSection } from "@/src/components/events-details/info-section";

export default function EventsDetails({ params }: { params: { id: string } }) {
  return (
    <Flex className="mx-auto pt-[100px] lg:pb-[80px] pb-[50px] lg:px-[70px] px-[30px] w-full max-w-[1440px] justify-between gap-x-[20px]">
      <InfoSection id={Number(params.id)} />

      <Box className="w-full">jjjjj</Box>
    </Flex>
  );
}
