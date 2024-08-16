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

const now: Date = new Date();

export const padToStartNumber: number = 2;

const formattedTime: string = `${now.getHours().toString().padStart(padToStartNumber, "0")}:${now
  .getMinutes()
  .toString()
  .padStart(
    padToStartNumber,
    "0"
  )}:${now.getSeconds().toString().padStart(padToStartNumber, "0")}`;

export const NEXT_EVENTS: INextEvent[] = [
  {
    id: 1,
    type: EventCategory.Opera,
    img: "/mock-data/mock-next-event-img.jpg",
    title:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    text: "Malesuada pellentesque elit eget gravida cum sociis. Pretium viverra suspendisse potenti nullam ac tortor. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Id eu nisl nunc mi ipsum.elis imperdiet proin fermentum leo. Quisque id diam vel quam elementum pulvinar etiam non. Purus semper eget duis at tellus. Lacinia at quis risus sed vulputate odio ut enim. Tincidunt nunc pulvinar sapien et. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Sit amet cursus sit amet. Ac auctor augue mauris augue neque gravida in fermentum. Ut eu sem integer vitae justo eget. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Sit amet mattis vulputate enim. Viverra nam libero justo laoreet.",
    date: now,
    time: formattedTime,
    link: "/",
  },
  {
    id: 2,
    type: EventCategory.Ballet,
    img: "/mock-data/mock-next-event-img.jpg",
    title:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    text: "Malesuada pellentesque elit eget gravida cum sociis. Pretium viverra suspendisse potenti nullam ac tortor. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Id eu nisl nunc mi ipsum. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Luctus accumsan tortor posuere ac. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Quisque id diam vel quam elementum pulvinar etiam non. Purus semper eget duis at tellus. Lacine enim. Viverra nam libero justo laoreet.",
    date: now,
    time: formattedTime,
    link: "/",
  },
  {
    id: 3,
    type: EventCategory.Childrens,
    img: "/mock-data/mock-next-event-img.jpg",
    title:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    text: "Malesuada pellentesque elit eget gravida cum sociis. Pretium viverra suspendisse potenti nullam ac tortor. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Id eu nisl nunc mi ipsum. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Luctus accumsan tortor posuere ac. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Quisque id diam vel quam elementum pulvinar etiam non. Purus semper eget duis at tellus. Lacinia at quis risus sed vulputate odio ut enim. Tincidunt nunc pulvinar sapien et. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Sit amet cursus sit amet. Ac auctor augue mauris augue neque gravidu scelerisque felis imperdiet proin fermentum leo. Quisque id diam vel quam elementum pulvinar etiam non. Purus semper eget duis at tellus. Lacinia at quis risus sed vulputate odio ut enim. Tincidunt nunc pulvinar sapien et. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Sit amet cursus sit amet. Ac auctor augue mauris augue neque gravida in fermentum. Ut eu sem integer vitae justo eget. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Sit amet mattis vulputate enim. Viverra nam libero justo laoreet.",
    date: now,
    time: formattedTime,
    link: "/",
  },
  {
    id: 4,
    type: EventCategory.Concerts,
    img: "/mock-data/mock-next-event-img.jpg",
    title:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    text: "Malesuada pellentesavida in fermentum. Ut eu sem integer vitae justo eget. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Sit amet mattis vulputate enim. Viverra nam libero justo laoreet.",
    date: now,
    time: formattedTime,
    link: "/",
  },
  {
    id: 5,
    type: EventCategory.Musical,
    img: "/mock-data/mock-next-event-img.jpg",
    title:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    text: "Malesuada pellentesavida in fermentum. Ut eu sem integer vitae justo eget. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Sit amet mattis vulputate enim. Viverra nam libero justo laoreet.",
    date: now,
    time: formattedTime,
    link: "/",
  },
  {
    id: 6,
    type: EventCategory.Tours,
    img: "/mock-data/mock-next-event-img.jpg",
    title:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    text: "Malesuada pellentesavida in fermentum. Ut eu sem integer vitae justo eget. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Sit amet mattis vulputate enim. Viverra nam libero justo laoreet.",
    date: now,
    time: formattedTime,
    link: "/",
  },
];
