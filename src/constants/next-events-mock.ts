export enum EventCategory {
  All = "ALL",
  Opera = "OPERA",
  Ballet = "BALLET",
  Childrens = "CHILDREN'S",
  Musical = "MUSICAL",
  Concerts = "CONCERTS",
  Tours = "TOURS",
}

export interface INextEvent {
  id: number;
  type: EventCategory;
  img: string;
  title: string;
  text: string;
  date: Date;
  time: string;
  link: string;
}

export const padToStartNumber: number = 2;

const formatTime = (date: Date): string =>
  `${date.getHours().toString().padStart(padToStartNumber, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(
      padToStartNumber,
      "0"
    )}:${date.getSeconds().toString().padStart(padToStartNumber, "0")}`;

export const NEXT_EVENTS: INextEvent[] = [
  {
    id: 1,
    type: EventCategory.Opera,
    img: "/mock-data/mock-next-event-img.jpg",
    title:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    text: "Malesuada pellentesque elit eget gravida cum sociis. Pretium viverra suspendisse potenti nullam ac tortor. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Id eu nisl nunc mi ipsum.",
    date: new Date("2024-03-18"),
    time: formatTime(new Date("2024-03-18")),
    link: "/",
  },
  {
    id: 2,
    type: EventCategory.Ballet,
    img: "/mock-data/mock-next-event-img.jpg",
    title:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    text: "Malesuada pellentesque elit eget gravida cum sociis. Pretium viverra suspendisse potenti nullam ac tortor. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Id eu nisl nunc mi ipsum.",
    date: new Date("2024-03-24"),
    time: formatTime(new Date("2024-03-24")),
    link: "/",
  },
  {
    id: 3,
    type: EventCategory.Childrens,
    img: "/mock-data/mock-next-event-img.jpg",
    title:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    text: "Malesuada pellentesque elit eget gravida cum sociis. Pretium viverra suspendisse potenti nullam ac tortor. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Id eu nisl nunc mi ipsum.",
    date: new Date("2024-04-01"),
    time: formatTime(new Date("2024-04-01")),
    link: "/",
  },
  {
    id: 4,
    type: EventCategory.Concerts,
    img: "/mock-data/mock-next-event-img.jpg",
    title:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    text: "Malesuada pellentesque elit eget gravida cum sociis. Pretium viverra suspendisse potenti nullam ac tortor. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Id eu nisl nunc mi ipsum.",
    date: new Date("2024-04-05"),
    time: formatTime(new Date("2024-04-05")),
    link: "/",
  },
  {
    id: 5,
    type: EventCategory.Musical,
    img: "/mock-data/mock-next-event-img.jpg",
    title:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    text: "Malesuada pellentesque elit eget gravida cum sociis. Pretium viverra suspendisse potenti nullam ac tortor. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Id eu nisl nunc mi ipsum.",
    date: new Date("2024-04-10"),
    time: formatTime(new Date("2024-04-10")),
    link: "/",
  },
  {
    id: 6,
    type: EventCategory.Tours,
    img: "/mock-data/mock-next-event-img.jpg",
    title:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    text: "Malesuada pellentesque elit eget gravida cum sociis. Pretium viverra suspendisse potenti nullam ac tortor. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Id eu nisl nunc mi ipsum.",
    date: new Date("2024-04-15"),
    time: formatTime(new Date("2024-04-15")),
    link: "/",
  },
];
