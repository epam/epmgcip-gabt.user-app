import { Box, Button, DropdownMenu, Flex, Heading } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction, useState } from "react";

import { EventCategory } from "@/src/constants/next-events-mock";

import { BasicButton } from "../buttons";
import { EventList } from "./event-list";

export const NextEvents: () => JSX.Element = () => {
  // eslint-disable-next-line @typescript-eslint/typedef
  const t = useTranslations("Index");
  const [filterOption, setFilterOption]: [
    EventCategory,
    Dispatch<SetStateAction<EventCategory>>,
  ] = useState<EventCategory>(EventCategory.All);

  return (
    <Box className="px-[30px] pt-[48px] pb-[40px] bg-light-yellow">
      <Heading
        as="h3"
        className={`uppercase text-[59px] leading-[65px] tracking-wide text-center lg:text-left`}
      >
        {t("next-events")}
      </Heading>

      <Flex className="mt-[7px] lg:mt-[26px] flex-col gap-y-[20px] gap-x-[15px] items-center lg:flex-row lg:justify-between">
        <div className="lg:hidden">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="soft">
                Options
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              {Object.values(EventCategory).map((key: EventCategory) => (
                <Button
                  key={key}
                  variant="outline"
                  radius="none"
                  className={`${
                    key === filterOption
                      ? " bg-dark-red text-white"
                      : "text-black"
                  } tracking-wider font-normal px-[17px] h-[39px] w-auto flex justify-center items-center hover:opacity-60 cursor-pointer bg-transparent  border border-solid shadow-none uppercase`}
                  onClick={() => setFilterOption(key)}
                >
                  {key}
                </Button>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>

        <Flex className="hidden lg:flex gap-x-[23px]">
          {Object.values(EventCategory).map((key: EventCategory) => (
            <Button
              key={key}
              variant="outline"
              radius="none"
              className={`${
                key === filterOption ? " bg-dark-red text-white" : "text-black"
              } tracking-wider font-normal px-[17px] h-[39px] w-auto flex justify-center items-center hover:opacity-60 cursor-pointer bg-transparent  border border-solid shadow-none uppercase`}
              onClick={() => setFilterOption(key)}
            >
              {key}
            </Button>
          ))}
        </Flex>

        <BasicButton
          text={t("see-all-events")}
          classNames="px-[26px] uppercase text-[15px] w-auto text-black border-white bg-warm-orange"
          outBoxClassNames="w-[181px] bg-warm-orange"
        />
      </Flex>

      <Box className="mt-[30px] mx-auto max-w-[1440px]">
        <EventList filterOption={filterOption} />
      </Box>
    </Box>
  );
};
