"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Box, Section } from "@radix-ui/themes";

import { BasicButton } from "@/src/components/buttons";
import annonceImage1 from "@/public/img-1.svg";
import annonceImage2 from "@/public/img-2.svg";
import annonceImage3 from "@/public/img-3.svg";

export const AnnonceSection: React.FC = () => {
  const t = useTranslations("Index");

  return (
    <Box className='bg-[url("/background-lines.svg")] h-full object-cover w-full overflow-hidden bg-center bg-no-repeat'>
      <Section className="flex justify-center pt-0">
        <BasicButton
          text={t("button-buy-tickets")}
          classNames="bg-dark-red text-white"
          outBoxClassNames="mt-5 mb-5 w-32 h-12 bg-dark-red"
        />
      </Section>
      <Section className="overflow-hidden flex justify-center">
        <div className="flex gap-16">
          <Image
            className="w-[30vw] min-w-[150px]"
            src={annonceImage1}
            alt="annonce-1"
          />
          <Image
            className="w-[30vw] min-w-[150px]"
            src={annonceImage2}
            alt="annonce-2"
          />
          <Image
            className="w-[30vw] min-w-[150px]"
            src={annonceImage3}
            alt="annonce-3"
          />
        </div>
      </Section>
    </Box>
  );
};
