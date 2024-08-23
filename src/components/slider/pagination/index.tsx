import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";

interface IUseDotButtonType {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
}

export const useDotButton: (
  emblaApi: EmblaCarouselType | undefined
) => IUseDotButtonType = (
  emblaApi: EmblaCarouselType | undefined
): IUseDotButtonType => {
  const [selectedIndex, setSelectedIndex]: [
    number,
    React.Dispatch<React.SetStateAction<number>>,
  ] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps]: [
    number[],
    React.Dispatch<React.SetStateAction<number[]>>,
  ] = useState<number[]>([]);

  const onDotButtonClick: (index: number) => void = useCallback(
    (index: number) => {
      if (!emblaApi) {
        return;
      }
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit: (emblaApi: EmblaCarouselType) => void = useCallback(
    (emblaApi: EmblaCarouselType) => {
      setScrollSnaps(emblaApi.scrollSnapList());
    },
    []
  );

  const onSelect: (emblaApi: EmblaCarouselType) => void = useCallback(
    (emblaApi: EmblaCarouselType) => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button">;

export const DotButton: React.FC<PropType> = (props: PropType) => {
  return (
    <button
      type="button"
      {...props}
      className={`w-[30px] h-[30px] flex justify-center items-center rounded-full border border-solid border-black ${props.className}`}
    >
      <div className="bg-black w-2 h-2 rounded">{props.children}</div>
    </button>
  );
};
