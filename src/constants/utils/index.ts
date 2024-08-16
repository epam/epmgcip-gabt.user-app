import { Bona_Nova, Jost } from "next/font/google";

import { padToStartNumber } from "../next-events-mock";

export const GoogleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export const bonnaNova = Bona_Nova({ subsets: ["latin"], weight: "400" });
export const jost = Jost({ subsets: ["latin"], weight: ["400", "600"] });

enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

export function formatDateWithDayName(date: Date): string {
  const dayName: string = DaysOfWeek[date.getDay()];

  const day: string = String(date.getDate()).padStart(padToStartNumber, "0");
  const month: string = String(date.getMonth() + 1).padStart(
    padToStartNumber,
    "0"
  );
  const year: number = date.getFullYear();

  return `${dayName}, ${day}.${month}.${year}`;
}
