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
  // New Events
  {
    id: 7,
    type: EventCategory.Concerts,
    img: "/mock-data/mock-next-event-img.jpg",
    title: "Aliquam erat volutpat, consectetur adipiscing elit",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: new Date("2024-04-20"),
    time: formatTime(new Date("2024-04-20")),
    link: "/",
  },
  {
    id: 8,
    type: EventCategory.Musical,
    img: "/mock-data/mock-next-event-img.jpg",
    title: "Phasellus blandit massa enim",
    text: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, nisi eu consectetur interdum, urna justo.",
    date: new Date("2024-04-25"),
    time: formatTime(new Date("2024-04-25")),
    link: "/",
  },
  {
    id: 9,
    type: EventCategory.Ballet,
    img: "/mock-data/mock-next-event-img.jpg",
    title: "Vestibulum tortor quam, feugiat vitae",
    text: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Fusce dapibus, tellus ac cursus commodo.",
    date: new Date("2024-05-01"),
    time: formatTime(new Date("2024-05-01")),
    link: "/",
  },
  {
    id: 10,
    type: EventCategory.Tours,
    img: "/mock-data/mock-next-event-img.jpg",
    title: "Etiam porta sem malesuada magna mollis euismod",
    text: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    date: new Date("2024-05-05"),
    time: formatTime(new Date("2024-05-05")),
    link: "/",
  },
  {
    id: 11,
    type: EventCategory.Opera,
    img: "/mock-data/mock-next-event-img.jpg",
    title: "Curabitur blandit tempus porttitor",
    text: "Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.",
    date: new Date("2024-05-10"),
    time: formatTime(new Date("2024-05-10")),
    link: "/",
  },
  {
    id: 12,
    type: EventCategory.Childrens,
    img: "/mock-data/mock-next-event-img.jpg",
    title: "Aenean lacinia bibendum nulla sed consectetur",
    text: "Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.",
    date: new Date("2024-05-15"),
    time: formatTime(new Date("2024-05-15")),
    link: "/",
  },
];
