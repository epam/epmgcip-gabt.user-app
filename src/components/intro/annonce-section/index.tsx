"use-client";
import { BasicButton } from "@/src/components/buttons";
import { Box, Section } from "@radix-ui/themes";
import Image from "next/image";
import annonceImage1 from "@/public/img-1.svg";
import annonceImage2 from "@/public/img-2.svg";
import annonceImage3 from "@/public/img-3.svg";
import { useTranslations } from "next-intl";

export const AnnonceSection = () => {
  const t = useTranslations("Index");
  return (
    <Box className='bg-[url("/background-lines.svg")] h-[56.5vh] object-cover w-full'>
      <Section className="flex justify-center pt-0">
        <BasicButton
          text={t("button-buy-tickets")}
          classnames="bg-dark-red text-white"
          outBoxClassnames="mt-5 mb-5 w-32 h-12 bg-dark-red"
        />
      </Section>
      <Section className="flex flex-row justify-center">
        {/* <Image className="px-8 " src={annonceImage1} alt="annonce-1" />
        <Image className="px-8" src={annonceImage2} alt="annonce-2" />
        <Image className="px-8" src={annonceImage3} alt="annonce-3" /> */}
      </Section>
    </Box>
  );
};
