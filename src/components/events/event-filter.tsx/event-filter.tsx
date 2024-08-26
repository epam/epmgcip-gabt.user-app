"use client";

import { IFont } from "@/src/constants/fonts";
import { EventCategory } from "@/src/constants/next-events-mock";
import { useTranslations } from "next-intl";
import { Bona_Nova } from "next/font/google";
import { useState, ChangeEvent } from "react";
import arrow from "@/public/arrow.svg";
import Image from "next/image";

const categories = Object.values(EventCategory);
const bonnaNova: IFont = Bona_Nova({ subsets: ["latin"], weight: "400" });

interface EventFilterProps {
  onFilterChange: (category: EventCategory) => void;
}

export function EventFilter({ onFilterChange }: EventFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>(
    EventCategory.All
  );
  const t: (arg: string) => string = useTranslations("Index");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value as EventCategory;
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="flex flex-col  items-center md:flex-row justify-between ml-16 mr-28 my-8">
      <label
        htmlFor="event-category"
        className={`${bonnaNova.className} mb-1.5 text-6xl text-center`}
      >
        {t("currently-playing")}
      </label>
      <div className="relative w-[200px] mt-8 md:mt-0">
        <select
          id="event-category"
          value={selectedCategory}
          onChange={handleChange}
          className="block cursor-pointer mt-1 p-4 border border-gray-300 
          text-center text-gray-700 appearance-none  pr-24 bg-white"
        >
          {categories.map((category) => (
            <option key={category} value={category} className="text-gray-700">
              {category}
            </option>
          ))}
        </select>

        <div className="absolute right-0 top-0 flex items-center h-full pointer-events-none">
          <div className="border-l border-gray-300 p-4 mr-4">
            <Image src={arrow.src} alt="arrow" height={24} width={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
