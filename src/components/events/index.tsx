"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

import {
  EventCategory,
  INextEvent,
  NEXT_EVENTS,
} from "@/src/constants/next-events-mock";

import { EventFilter } from "./event-filter.tsx/event-filter";
import { CurrentlyPlayingCard } from "../cards/currently-playing-card.tsx";
import { NumericPagination } from "../slider/numeric-pagination";

const EVENTS_PER_PAGE: number = 5;

export function EventList() {
  const [filteredEvents, setFilteredEvents]: [
    INextEvent[],
    Dispatch<SetStateAction<INextEvent[]>>,
  ] = useState<INextEvent[]>(NEXT_EVENTS);

  const [currentPage, setCurrentPage]: [
    number,
    Dispatch<SetStateAction<number>>,
  ] = useState<number>(1);

  const handleFilterChange = (category: EventCategory): void => {
    if (category === EventCategory.All) {
      setFilteredEvents(NEXT_EVENTS);
    } else {
      setFilteredEvents(NEXT_EVENTS.filter((event) => event.type === category));
    }
    setCurrentPage(1);
  };

  const paginateEvents = (events: INextEvent[], page: number): INextEvent[] => {
    const startIndex: number = (page - 1) * EVENTS_PER_PAGE;
    return events.slice(startIndex, startIndex + EVENTS_PER_PAGE);
  };

  const totalPages: number = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE);
  const eventsToShow: INextEvent[] = paginateEvents(
    filteredEvents,
    currentPage
  );

  const groupEventsByDate = (
    events: INextEvent[]
  ): { [key: string]: INextEvent[] } => {
    return events.reduce(
      (acc: { [key: string]: INextEvent[] }, event: INextEvent) => {
        const eventDate: string = event.date.toLocaleDateString("en-GB", {
          weekday: "long",
          day: "numeric",
          month: "long",
        });
        const formattedDate = eventDate.replace(/^(\w+)\s/, "$1, ");
        if (!acc[formattedDate]) {
          acc[formattedDate] = [];
        }
        acc[formattedDate].push(event);
        return acc;
      },
      {}
    );
  };

  const groupedEvents = groupEventsByDate(eventsToShow);

  return (
    <div>
      <EventFilter onFilterChange={handleFilterChange} />
      {Object.keys(groupedEvents).map((date: string) => (
        <div key={date} className="mb-8 ">
          <h2 className="flex gap-3 text-xl font-bold text-gray-800 mb-4 bg-champagne px-16 py-8">
            <Image
              src={"/next-event-card/calendar.svg"}
              alt="clock"
              width={14}
              height={16}
            />
            {date}
          </h2>
          <div className="flex flex-col">
            {groupedEvents[date].map((event: INextEvent) => (
              <CurrentlyPlayingCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      ))}
      <div className="flex justify-center my-24">
        <NumericPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
