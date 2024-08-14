export enum EventCategory {
  All = 'ALL',
  Opera = 'OPERA',
  Ballet = 'BALLET',
  Childrens = "CHILDREN'S",
  Musical = 'MUSICAL',
  Concerts = 'CONCERTS',
  Tours = 'TOURS'
}

export interface INextEvent {
  type: EventCategory
  img: string
  title: string
  text: string
  date: Date
  time: string
  link: string
}

const now = new Date()

const formattedTime = `${now.getHours().toString().padStart(2, '0')}:${now
  .getMinutes()
  .toString()
  .padStart(2, '0')}`

export const NEXT_EVENTS: INextEvent[] = [
  {
    type: EventCategory.Opera,
    img: '/mock-data/mock-next-event-img.jpg',
    title:
      'enim ad minim veniam, quis nostrud exercitation nostruostruostruostrud exercitation nostrud exercitation ullamco laboris nisi ut',
    text: 'Malesuada pellentesque elit eget gravida cum sociis. Pretium viverra suspendisse potenti nullam ac tortor. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Id eu nisl nunc mi ipsum.elis imperdiet proin fermentum leo. Quisque id diam vel quam elementum pulvinar etiam non. Purus semper eget duis at tellus. Lacinia at quis risus sed vulputate odio ut enim. Tincidunt nunc pulvinar sapien et. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Sit amet cursus sit amet. Ac auctor augue mauris augue neque gravida in fermentum. Ut eu sem integer vitae justo eget. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Sit amet mattis vulputate enim. Viverra nam libero justo laoreet.',
    date: now,
    time: formattedTime,
    link: '/'
  },
  {
    type: EventCategory.Ballet,
    img: '/mock-data/mock-next-event-img.jpg',
    title: 'minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
    text: 'Malesuada pellentesque elit eget gravida cum sociis. Pretium viverra suspendisse potenti nullam ac tortor. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Id eu nisl nunc mi ipsum. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Luctus accumsan tortor posuere ac. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Quisque id diam vel quam elementum pulvinar etiam non. Purus semper eget duis at tellus. Lacine enim. Viverra nam libero justo laoreet.',
    date: now,
    time: formattedTime,
    link: '/'
  },
  {
    type: EventCategory.Childrens,
    img: '/mock-data/mock-next-event-img.jpg',
    title: 'veniam, quis nostrud exercitation ullamco laboris nisi ut',
    text: 'Malesuada pellentesque elit eget gravida cum sociis. Pretium viverra suspendisse potenti nullam ac tortor. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Id eu nisl nunc mi ipsum. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Luctus accumsan tortor posuere ac. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Quisque id diam vel quam elementum pulvinar etiam non. Purus semper eget duis at tellus. Lacinia at quis risus sed vulputate odio ut enim. Tincidunt nunc pulvinar sapien et. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Sit amet cursus sit amet. Ac auctor augue mauris augue neque gravidu scelerisque felis imperdiet proin fermentum leo. Quisque id diam vel quam elementum pulvinar etiam non. Purus semper eget duis at tellus. Lacinia at quis risus sed vulputate odio ut enim. Tincidunt nunc pulvinar sapien et. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Sit amet cursus sit amet. Ac auctor augue mauris augue neque gravida in fermentum. Ut eu sem integer vitae justo eget. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Sit amet mattis vulputate enim. Viverra nam libero justo laoreet.',
    date: now,
    time: formattedTime,
    link: '/'
  },
  {
    type: EventCategory.Concerts,
    img: '/mock-data/mock-next-event-img.jpg',
    title: 'quis nostrud exercitation ullamco laboris nisi ut',
    text: 'Malesuada pellentesavida in fermentum. Ut eu sem integer vitae justo eget. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Sit amet mattis vulputate enim. Viverra nam libero justo laoreet.',
    date: now,
    time: formattedTime,
    link: '/'
  },
  {
    type: EventCategory.Musical,
    img: '/mock-data/mock-next-event-img.jpg',
    title: 'Ut ullamco laboris nisi ut',
    text: 'Malesuada pellentesavida in fermentum. Ut eu sem integer vitae justo eget. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Sit amet mattis vulputate enim. Viverra nam libero justo laoreet.',
    date: now,
    time: formattedTime,
    link: '/'
  },
  {
    type: EventCategory.Tours,
    img: '/mock-data/mock-next-event-img.jpg',
    title: 'ad exercitation ullamco laboris nisi ut',
    text: 'Malesuada pellentesavida in fermentum. Ut eu sem integer vitae justo eget. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Sit amet mattis vulputate enim. Viverra nam libero justo laoreet.',
    date: now,
    time: formattedTime,
    link: '/'
  }
]
