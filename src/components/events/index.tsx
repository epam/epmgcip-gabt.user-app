"use client";
import { useState } from "react";
import { EventFilter } from "./event-filter.tsx/event-filter";
import { NEXT_EVENTS, EventCategory } from "@/src/constants/next-events-mock";
import { CurrentlyPlayingCard } from "../cards/currently-playing-card.tsx";

export function EventList() {
  const [filteredEvents, setFilteredEvents] = useState(NEXT_EVENTS);

  const handleFilterChange = (category) => {
    if (category === EventCategory.All) {
      setFilteredEvents(NEXT_EVENTS);
    } else {
      setFilteredEvents(NEXT_EVENTS.filter((event) => event.type === category));
    }
  };

  const groupEventsByDate = (events) => {
    return events.reduce((acc, event) => {
      const eventDate = event.date.toDateString();
      if (!acc[eventDate]) {
        acc[eventDate] = [];
      }
      acc[eventDate].push(event);
      return acc;
    }, {});
  };

  const groupedEvents = groupEventsByDate(filteredEvents);

  return (
    <div>
      <EventFilter onFilterChange={handleFilterChange} />
      {Object.keys(groupedEvents).map((date) => (
        <div key={date} className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">{date}</h2>
          <div className="flex flex-col">
            {groupedEvents[date].map((event) => (
              <CurrentlyPlayingCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
