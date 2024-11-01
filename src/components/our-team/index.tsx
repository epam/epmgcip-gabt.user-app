import React from "react";

import { OurTeam_Data } from "@/src/constants/our-team-mock";

import { TeamMemberCard } from "../cards/team-member-card/team-member-card";

const OurTeam: React.FC = () => {
  const { heading, descriptionText, teamMembers } = OurTeam_Data;
  return (
    <section className="our-team">
      <div className="flex flex-col items-center">
        {" "}
        <h2 className="text-4xl font-semibold text-center my-6">{heading}</h2>
        <h2 className="  md:w-[650px] text-lg font-normal text-center ">
          {descriptionText}
        </h2>
      </div>

      <div className="mx-16 md:gap-12 flex justify-center flex-wrap mt-16">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
