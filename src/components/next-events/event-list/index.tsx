import useEmblaCarousel, {
  type EmblaViewportRefType,
} from "embla-carousel-react";
import { useCallback } from "react";
import Image from "next/image";
import { EmblaCarouselType } from "embla-carousel";

import {
  EventCategory,
  INextEvent,
  NEXT_EVENTS,
} from "@/src/constants/next-events-mock";
import { NextEventCard } from "@/src/components/cards";

import { IProps } from "./types";
import { DotButton, useDotButton } from "../../slider/pagination";

export const EventList: React.FC<IProps> = ({ filterOption }: IProps) => {
  const [emblaRef, emblaApi]: [
    EmblaViewportRefType,
    EmblaCarouselType | undefined,
  ] = useEmblaCarousel({
    dragFree: true,
    breakpoints: {
      "(min-width: 1124px)": { slidesToScroll: 4 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });
  const {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  }: {
    selectedIndex: number;
    scrollSnaps: number[];
    onDotButtonClick: (index: number) => void;
  } = useDotButton(emblaApi);

  const scrollPrev: () => void = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext: () => void = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const filteredList: INextEvent[] = NEXT_EVENTS.filter((item: INextEvent) =>
    filterOption === EventCategory.All ? item : item.type === filterOption
  );
  return (
    <div className="embla relative">
      <div className="lg:px-[70px] px-[30px]">
        <div
          className="embala__viewport max-w-[1440px] overflow-hidden"
          ref={emblaRef}
        >
          <div className="embla__container flex xl:justify-center gap-x-[18px]">
            {filteredList.map((item: INextEvent) => (
              <div
                key={item.id}
                className="embla__slide relative h-full w-full flex justify-center min-[1124px]:flex-[0_0_calc(25%-20px)] lg:flex-[0_0_calc(33%-20px)] sm:flex-[0_0_calc(51%-20px)] flex-[0_0_100%]"
              >
                <NextEventCard
                  id={item.id}
                  img={item.img}
                  date={item.date}
                  link={item.link}
                  text={item.text}
                  time={item.time}
                  title={item.title}
                  type={item.type}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className="embla__prev lg:block hidden absolute top-[calc(590px-66%)] left-0 bg-dark-red rounded-full p-[3px]"
        onClick={scrollPrev}
      >
        <div className="w-[29px] h-[29px] bg-dark-red flex justify-center items-center rounded-full border border-solid border-white hover:border-dark-red">
          <Image
            src={"/arrow-slide-icon.svg"}
            alt="arrow"
            width={7}
            height={11}
            className="border"
          />
        </div>
      </button>

      <button
        className="embla__next lg:block hidden absolute top-[calc(590px-66%)] right-0  bg-dark-red rounded-full p-[3px]"
        onClick={scrollNext}
      >
        <div className="w-[29px] h-[29px] bg-dark-red flex justify-center items-center rounded-full border border-solid border-white hover:border-dark-red">
          <Image
            src={"/arrow-slide-icon.svg"}
            alt="arrow"
            width={7}
            height={11}
            className="border rotate-180"
          />
        </div>
      </button>

      <div className="embla__dots mt-[40px] flex justify-center mx-auto gap-[20px]">
        {scrollSnaps.map((_: number, index: number) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex
                ? " embla__dot--selected "
                : " border-opacity-0 "
            )}
          />
        ))}
      </div>
    </div>
  );
};
