"use-client";
import { Box, Heading, Section, Text } from "@radix-ui/themes";
import { Bona_Nova } from "next/font/google";

const bonnaNova = Bona_Nova({ subsets: ["latin"], weight: "400" });

export const WelocomeText = () => {
  return (
    <Box className="flex justify-center">
      <Section>
        <Heading
          className={`${bonnaNova.className} mb-1.5 text-8xl text-center`}
        >
          WELCOME
        </Heading>
        <Text className="block text-3xl text-center max-w-3xl">
          to the State Academic Bolshoi Theatre of Uzbekistan named after
          Alisher Navoi
        </Text>
      </Section>
    </Box>
  );
};
