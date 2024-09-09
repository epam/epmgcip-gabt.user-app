"use client";
import { Dispatch, SetStateAction, useState } from "react";

import {
  ILatestNews,
  LATEST_NEWS_DATA,
} from "@/src/constants/latest-news-mock";
import { EventCategory } from "@/src/constants/next-events-mock";

import { NumericPagination } from "../slider/numeric-pagination";
import { LatestNewsCard } from "../cards";
import { NewsFilter } from "./news-filter/news-filter";

const NEWS_PER_PAGE: number = 9;

export function LatestNewsPage() {
  const [currentPage, setCurrentPage]: [
    number,
    Dispatch<SetStateAction<number>>,
  ] = useState<number>(1);

  const [filteredEvents, setFilteredEvents]: [
    ILatestNews[],
    Dispatch<SetStateAction<ILatestNews[]>>,
  ] = useState<ILatestNews[]>(LATEST_NEWS_DATA);

  const paginateNews = (news: ILatestNews[], page: number): ILatestNews[] => {
    const startIndex: number = (page - 1) * NEWS_PER_PAGE;
    return news.slice(startIndex, startIndex + NEWS_PER_PAGE);
  };

  const totalPages: number = Math.ceil(filteredEvents.length / NEWS_PER_PAGE);
  const newsToShow: ILatestNews[] = paginateNews(filteredEvents, currentPage);

  const handleFilterChange = (category: EventCategory): void => {
    if (category === EventCategory.All) {
      setFilteredEvents(LATEST_NEWS_DATA);
    } else {
      setFilteredEvents(
        LATEST_NEWS_DATA.filter(
          (event: ILatestNews) => event.category === category
        )
      );
    }
    setCurrentPage(1);
  };

  return (
    <div className="p-0 md:p-4">
      <NewsFilter onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 gap-8">
        {newsToShow.map((news: ILatestNews) => (
          <div key={news.id} className="flex justify-center">
            <LatestNewsCard {...news} />
          </div>
        ))}
      </div>
      <div className="flex justify-center my-8">
        <NumericPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
