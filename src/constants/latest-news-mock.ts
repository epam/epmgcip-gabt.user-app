import { EventCategory } from "./next-events-mock";

export interface ILatestNews {
  id: number;
  img: string;
  title: string;
  description: string;
  date: string;
  link: string;
  category: EventCategory;
}

const getRandomCategory = (): EventCategory => {
  const categories = Object.values(EventCategory);
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
};

const generateRandomDate = (start: Date, end: Date): Date => {
  const range = end.getTime() - start.getTime();
  const randomTime = Math.random() * range + start.getTime();
  return new Date(randomTime);
};

const getFormattedDate = (date: Date): string => {
  const year: number = date.getFullYear();
  const month: string = date.toLocaleDateString("default", { month: "long" });
  const day: number = date.getDate();
  return `${day}. ${month} ${year}`;
};

const startDate = new Date("2023-01-01T00:00:00.000Z");
const endDate = new Date("2023-12-31T23:59:59.999Z");

export const LATEST_NEWS_DATA: ILatestNews[] = Array.from(
  { length: 24 },
  (_, index) => {
    const randomDate = generateRandomDate(startDate, endDate);
    const formattedDate = getFormattedDate(randomDate);
    const randomCategory = getRandomCategory();

    return {
      id: index + 1,
      date: formattedDate,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      link: "/",
      img: `/mock-data/latest-news-${(index % 3) + 1}.jpg`,
      category: randomCategory,
    };
  }
);
