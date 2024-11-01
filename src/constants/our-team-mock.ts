import { StaticImageData } from "next/image";

import avatar1 from "@/public/our-team/Mask group (2).png";
import avatar2 from "@/public/our-team/Mask group (3).png";
import avatar3 from "@/public/our-team/Mask group (4).png";
import avatar4 from "@/public/our-team/Mask group (5).png";
import avatar5 from "@/public/our-team/Mask group (6).png";
import avatar6 from "@/public/our-team/Mask group (7).png";

export interface IOurTeam {
  name: string;
  description: string;
  img: StaticImageData;
}

export interface IOurTeamPage {
  heading: string;
  descriptionText: string;
  teamMembers: IOurTeam[];
}

export const OurTeam_Data: IOurTeamPage = {
  heading: "Heads",
  descriptionText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet varius lectus. Praesent at vestibulum sapien. Nulla facilisi.",
  teamMembers: [
    {
      name: "John Doe",
      description: "Director",
      img: avatar1,
    },
    {
      name: "Jane Doe",
      description: "Stage Manager",
      img: avatar2,
    },
    {
      name: "John Smith",
      description: "Lead Actor",
      img: avatar3,
    },
    {
      name: "Emily Johnson",
      description: "Set Designer",
      img: avatar4,
    },
    {
      name: "Michael Brown",
      description: "Lighting Technician",
      img: avatar5,
    },
    {
      name: "Sarah Davis",
      description: "Costume Designer",
      img: avatar6,
    },
  ],
};
