const mockDate: Date = new Date("2023-10-03T19:00:00.000Z");

const year: number = mockDate.getFullYear();
const month: string = mockDate.toLocaleDateString("default", { month: "long" });
const day: number = mockDate.getDay();
const formattedDate: string = `${day}. ${month} ${year}`;

export interface ILatestNews {
  id: number;
  img: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

export const LATEST_NEWS_DATA: ILatestNews[] = [
  {
    id: 1,
    date: formattedDate,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
    link: "/",
    img: "/mock-data/latest-news-1.jpg",
  },
  {
    id: 2,
    date: formattedDate,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    link: "/",
    img: "/mock-data/latest-news-2.jpg",
  },
  {
    id: 3,
    date: formattedDate,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    link: "/",
    img: "/mock-data/latest-news-3.jpg",
  },
];
