"use client";
import { Box, Heading, Section, Text } from "@radix-ui/themes";
import { Bona_Nova } from "next/font/google";
import { useTranslations } from "use-intl";

const bonnaNova = Bona_Nova({ subsets: ["latin"], weight: "400" });

export const WelcomeText: React.FC = () => {
  const t: (key: string) => string = useTranslations("Index");

  return (
    <Box className="flex justify-center">
      <Section className="w-full flex flex-col justify-center items-center">
        <Heading
          className={`${bonnaNova.className} mb-1.5 lg:text-8xl md:text-5xl sm:text-5xl text-center`}
        >
          {t("home-page-welcome")}
        </Heading>
        <Text className="block w-2/3 lg:text-3xl md:text-2xl sm:text-2xl text-center">
          {t("home-page-welcome-description")}
        </Text>
      </Section>
    </Box>
  );
};
