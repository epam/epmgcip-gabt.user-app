import useEmblaCarousel from "embla-carousel-react";
import type { EmblaViewportRefType } from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";

import {
  ILatestNews,
  LATEST_NEWS_DATA,
} from "@/src/constants/latest-news-mock";

import { DotButton, useDotButton } from "../../slider/pagination";
import { LatestNewsCard } from "../../cards";

export const LatestNewsList: React.FC<unknown> = () => {
  const [emblaRef, emblaApi]: [
    EmblaViewportRefType,
    EmblaCarouselType | undefined,
  ] = useEmblaCarousel({
    dragFree: true,
    breakpoints: {
      "(min-width: 600px)": { slidesToScroll: 1, align: "center" },
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

  return (
    <div className="embla relative">
      <div className="px-[30px]">
        <div
          className="embala__viewport max-w-[1440px] overflow-hidden"
          ref={emblaRef}
        >
          <div className="embla__container flex gap-x-[18px]">
            {LATEST_NEWS_DATA.map((item: ILatestNews) => (
              <div
                key={item.id}
                className="embla__slide relative h-full w-full flex justify-center"
              >
                <LatestNewsCard
                  id={item.id}
                  img={item.img}
                  date={item.date}
                  link={item.link}
                  description={item.description}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="embla__dots mt-[30px] flex justify-center mx-auto gap-[20px] lg:hidden">
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
