"use-client";
import { BasicButton } from "@/src/components/buttons";
import { Box, Section } from "@radix-ui/themes";
import Image from "next/image";
import annonceImage1 from "@/public/img-1.svg";
import annonceImage2 from "@/public/img-2.svg";
import annonceImage3 from "@/public/img-3.svg";

export const AnnonceSection = () => {
  return (
    <Box className='bg-[url("/background-lines.svg")] h-[56.5vh] object-cover'>
      <Section className="flex justify-center pt-0">
        <BasicButton
          text="BUY TICKETS"
          classnames="bg-dark-red"
          outBoxClassnames="w-32 h-12 bg-dark-red"
        />
      </Section>
      <Section className="flex flex-row justify-center h-auto max-w-1/2">
        <Image className="px-8" src={annonceImage1} alt="annonce-1" />
        <Image className="px-8" src={annonceImage2} alt="annonce-2" />
        <Image className="px-8" src={annonceImage3} alt="annonce-3" />
      </Section>
    </Box>
  );
};
