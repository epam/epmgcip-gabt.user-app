import { StaticImageData } from "next/image";

import avatar from "@/public/theater.svg";

export interface IHistoryData {
  heading: string;
  descriptionText1: string;
  descriptionText2: string;
  descriptionText3: string;
  descriptionText4: string;
  avatar: StaticImageData;
}

export const History_Data: IHistoryData = {
  heading:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  descriptionText1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  descriptionText2:
    "Malesuada pellentesque elit eget gravida cum sociis. Pretium viverra suspendisse potenti nullam ac tortor. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Id eu nisl nunc mi ipsum. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Luctus accumsan tortor posuere ac. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Quisque id diam vel quam elementum pulvinar etiam non. Purus semper eget duis at tellus. Lacinia at quis risus sed vulputate odio ut enim. Tincidunt nunc pulvinar sapien et. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Sit amet cursus sit amet. Ac auctor augue mauris augue neque gravida in fermentum. Ut eu sem integer vitae justo eget. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Sit amet mattis vulputate enim. Viverra nam libero justo laoreet.",
  descriptionText3:
    "Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Est ultricies integer quis auctor elit sed. Vulputate sapien nec sagittis aliquam malesuada. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Aliquam id diam maecenas ultricies. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Habitant morbi tristique senectus et netus et malesuada fames ac. Amet consectetur adipiscing elit ut aliquam. Felis eget nunc lobortis mattis aliquam faucibus purus in. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Risus commodo viverra maecenas accumsan lacus vel facilisis. Sed blandit libero volutpat sed cras ornare arcu. Felis imperdiet proin fermentum leo vel orci porta non.",
  descriptionText4:
    "Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Luctus accumsan tortor posuere ac. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Quisque id diam vel quam elementum pulvinar etiam non. Purus semper eget duis at tellus. Lacinia at quis risus sed vulputate odio ut enim. Tincidunt nunc pulvinar sapien et. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Sit amet cursus sit amet. Ac auctor augue mauris augue neque gravida in fermentum. Ut eu sem integer vitae justo eget. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Sit amet mattis vulputate enim. Viverra nam libero justo laoreet",
  avatar: avatar,
};
