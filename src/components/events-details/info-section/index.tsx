import { Box, Flex, Link, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import { FC } from "react";
import Image from "next/image";

import { bonnaNova, formatDateWithDayName, jost } from "@/src/constants/utils";
import { INextEvent, NEXT_EVENTS } from "@/src/constants/next-events-mock";
import facebookIcon from "@/public/contact-info/facebook.svg";
import instagramIcon from "@/public/contact-info/instagram.svg";
import telegramIcon from "@/public/contact-info/telegram.svg";

import { BasicButton } from "../../buttons";

interface IInfoSection {
  id: number;
}

export const InfoSection: FC<IInfoSection> = ({ id }: IInfoSection) => {
  const t: (arg: string) => string = useTranslations("Index");

  const { date, link, text, time, title, type }: INextEvent =
    NEXT_EVENTS[Number(id)];

  return (
    <Box className="max-w-[640px] w-full">
      <Text
        as="p"
        className={`${jost.className} font-medium uppercase text-dark-red text-sm`}
      >
        {t(`${type}`)}
      </Text>

      <Text
        as="p"
        className={`${bonnaNova.className} mt-[17px] font-medium text-[40px] leading-[50px]`}
      >
        {title}
      </Text>

      <Flex className="mt-[17px] gap-x-[17px] items-center">
        <Flex className="gap-[14px] items-center">
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

        <Flex className="gap-[14px] items-center">
          <Image
            src={"/next-event-card/clock.svg"}
            alt="clock"
            width={14}
            height={16}
          />

          <Text className="text-sm text-black">{`${time} ${t("h")}`}</Text>
        </Flex>
      </Flex>

      <Text as="p" className={`${jost.className} mt-[17px]`}>
        {text}
      </Text>

      <Flex className="mt-[42px] items-center gap-x-[40px]">
        <Link href={link}>
          <BasicButton
            text={t("button-buy-tickets")}
            classNames="bg-dark-red text-white"
            outBoxClassNames="w-32 h-12 bg-dark-red"
          />
        </Link>

        <Flex className="items-center gap-x-2">
          <Text className={`${jost.className}`}>{t("share")}</Text>

          <Flex className="items-center gap-x-5">
            <Link
              href="https://www.facebook.com/gabtnavoi/"
              className="hover:opacity-60"
            >
              <Image src={facebookIcon} alt="facebook" />
            </Link>

            <Link href="https://t.me/gabtuzb" className="hover:opacity-60">
              <Image src={telegramIcon} alt="telegram" />
            </Link>

            <Link
              href="https://instagram.com/gabt.uz"
              className="hover:opacity-60"
            >
              <Image src={instagramIcon} alt="instagram" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
