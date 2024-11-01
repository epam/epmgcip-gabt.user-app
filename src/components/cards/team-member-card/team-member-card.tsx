import { Box, Text } from "@radix-ui/themes";
import Image from "next/image";

import { IOurTeam } from "@/src/constants/our-team-mock";

export const TeamMemberCard: React.FC<IOurTeam> = ({
  name,
  description,
  img,
}) => {
  return (
    <Box className="w-[280px] text-center bg-white">
      <Box className="w-[full] ">
        <Image src={img} alt={name} height={228} width={280} />
      </Box>

      <Box className="py-[17px] px-[20px]">
        <Text className="font-medium text-xl">{name}</Text>

        <Text
          as="p"
          className="mt-2 text-sm h-20 line-clamp-3 text-ellipsis overflow-hidden"
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
};
