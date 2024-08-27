"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Box, Section } from "@radix-ui/themes";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";

import annonceImage1 from "@/public/img-1.svg";
import annonceImage2 from "@/public/img-2.svg";
import annonceImage3 from "@/public/img-3.svg";
import { BasicButton } from "@/src/components/buttons";

import useMediaQuery from "../../hooks/useMediaQuery";
import { DotButton, useDotButton } from "../../slider/pagination";

const SCROLL_INTERVAL_MS = 5000;

const useAutoScroll = (
  emblaApi: EmblaCarouselType | undefined,
  interval: number
) => {
  const [isScrolling, setIsScrolling] = useState(false);

  const startScrolling = useCallback(() => {
    if (emblaApi && !isScrolling) {
      setIsScrolling(true);
      const scroll = () => {
        emblaApi.scrollNext();
        setTimeout(scroll, interval);
      };
      scroll();
    }
  }, [emblaApi, isScrolling, interval]);

  return { startScrolling };
};

export const AnnonceSection: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    slidesToScroll: 1,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const t = useTranslations("Index");

  const { startScrolling } = useAutoScroll(emblaApi, SCROLL_INTERVAL_MS);


  if (emblaApi) {
    startScrolling();
  }

  return (
    <Box className='bg-[url("/background-lines.svg")] h-full object-cover w-full overflow-hidden bg-center bg-no-repeat'>
      <Section className="flex justify-center pt-0">
        <BasicButton
          text={t("button-buy-tickets")}
          classNames="bg-dark-red text-white"
          outBoxClassNames="mt-5 mb-5 w-32 h-12 bg-dark-red"
        />
      </Section>
      <Section className="max-w-[1380px] px-[30px] mx-auto overflow-hidden flex justify-center flex-col items-center">
        {isMobile ? (
          <div className="relative overflow-hidden embla" ref={emblaRef}>
            <div className="flex embla__container">
              <div className="relative min-w-full overflow-hidden embla__slide">
                <Image className="w-full" src={annonceImage1} alt="annonce-1" />
              </div>
              <div className="relative min-w-full overflow-hidden embla__slide mx-8">
                <Image className="w-full" src={annonceImage2} alt="annonce-2" />
              </div>
              <div className="relative min-w-full overflow-hidden embla__slide">
                <Image className="w-full" src={annonceImage3} alt="annonce-3" />
              </div>
            </div>
            <div className="flex mt-4 justify-center">
              {scrollSnaps.map((_: number, index: number) => (
                <DotButton
                  key={index}
                  className={`mx-2 ${selectedIndex === index ? "border-1" : "bg-gray-300 border-none"}`}
                  onClick={() => onDotButtonClick(index)}
                />
              ))}
            </div>
          </div>
        ) : (
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
        )}
      </Section>
    </Box>
  );
};
