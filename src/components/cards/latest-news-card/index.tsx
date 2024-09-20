import { Box, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { ILatestNews } from "@/src/constants/latest-news-mock";
import { trimWithEllipsis } from "@/src/constants/utils";

const CHAR_VARS: { [key: string]: number } = {
  MAX_TITLE_COUNT: 78,
  MAX_DESCRIPTION_COUNT: 100,
};

export const LatestNewsCard: ({
  title,
  link,
  description,
  date,
  img,
}: ILatestNews) => JSX.Element = ({
  title,
  link,
  img,
  date,
  description,
}: ILatestNews) => {
  const t: (arg: string) => string = useTranslations("Index");

  return (
    <Box className="w-[420px] bg-white">
      <Box className="relative w-full h-auto">
        <Image src={`${img}`} alt="image" height={280} width={420} />
        <Box className="absolute m-auto inset-x-0 bottom-0 left-0.5 bg-white w-[170px] h-[30px]">
          <Text as="p" className="mt-1 text-center text-dark-red font-medium">
            {date}
          </Text>
        </Box>
      </Box>

      <Box className="py-[17px] px-[20px]">
        <Text
          as="p"
          className="mt-2 font-medium text-xl text-center h-18 line-clamp-3 text-ellipsis overflow-hidden ..."
        >
          {trimWithEllipsis(title, CHAR_VARS.MAX_TITLE_COUNT)}
        </Text>
        <Text
          as="p"
          className="mt-2 font-normal text-l text-center h-18 line-clamp-3 text-ellipsis overflow-hidden ..."
        >
          {trimWithEllipsis(description, CHAR_VARS.MAX_DESCRIPTION_COUNT)}
        </Text>
      </Box>

      <Link
        href={link}
        className="py-4 flex items-center justify-center text-[15px] tracking-wide hover:opacity-60 underline font-medium"
      >
        {t("read-more")}
      </Link>
    </Box>
  );
};
