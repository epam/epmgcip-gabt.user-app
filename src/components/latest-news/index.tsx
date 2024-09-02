import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";

import { BasicButton } from "../buttons";
import { LatestNewsList } from "./lastest-news-list";

export const LatestNews: () => JSX.Element = () => {
  const t: (arg: string) => string = useTranslations("Index");

  return (
    <Box className="pt-[48px] pb-[40px]">
      <Box className="mx-auto max-w-[1380px]">
        <Heading
          as="h3"
          className={`px-[30px] uppercase text-[59px] leading-[65px] tracking-wide text-center lg:text-center`}
        >
          {t("latest-news")}
        </Heading>
        <Flex align="center" justify="center" className="mt-[18px]">
          <Text className="max-w-[710px] text-center lag:text-center text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Flex>

        <Box className="mt-[30px] mx-auto max-w-[1380px]">
          <LatestNewsList />
        </Box>
        <Flex justify="center">
          <BasicButton
            text={t("read-all-news")}
            classNames="bg-dark-red"
            outBoxClassNames="mt-5 mb-5 w-40 h-12 bg-dark-red"
          />
        </Flex>
      </Box>
    </Box>
  );
};
