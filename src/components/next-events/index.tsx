import { Box, Button, DropdownMenu, Flex, Heading } from '@radix-ui/themes'
import { useTranslations } from 'next-intl'
import { BasicButton } from '../buttons'
import { NextEventCard } from '../cards'
import { EventCategory, NEXT_EVENTS } from '@/src/constants/next-events-mock'
import { useState } from 'react'
import { EventList } from './event-list'

export const NextEvents = () => {
  const t = useTranslations('Index')
  const [filterOption, setFilterOption] = useState<EventCategory>(
    EventCategory.All
  )

  return (
    <Box className='px-[30px] pt-[48px] pb-[40px] bg-light-yellow'>
      <Heading
        as='h3'
        className={`uppercase text-[59px] leading-[65px] tracking-wide text-center lg:text-left`}
      >
        {t('next-events')}
      </Heading>

      <Flex className='mt-[7px] lg:mt-[26px] flex-col gap-y-[20px] gap-x-[15px] items-center lg:flex-row lg:justify-between'>
        <div className='lg:hidden'>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant='soft'>
                Options
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Edit</DropdownMenu.Item>
              <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>Archive</DropdownMenu.Item>

              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                  <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>

              <DropdownMenu.Separator />
              <DropdownMenu.Item>Share</DropdownMenu.Item>
              <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut='⌘ ⌫' color='red'>
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>

        <Flex className='hidden lg:flex gap-x-[23px]'>
          {Object.values(EventCategory).map(key => (
            <Button
              key={key}
              variant='outline'
              radius='none'
              className={`${
                key === filterOption ? ' bg-dark-red text-white' : 'text-black'
              } tracking-wider font-normal px-[17px] h-[39px] w-auto flex justify-center items-center hover:opacity-60 cursor-pointer bg-transparent  border border-solid shadow-none uppercase`}
              onClick={() => setFilterOption(key)}
            >
              {key}
            </Button>
          ))}
        </Flex>

        <BasicButton
          text={t('see-all-events')}
          classnames='px-[26px] uppercase text-[15px] w-auto text-black border-white bg-warm-orange'
          outBoxClassnames='w-[181px] bg-warm-orange'
        />
      </Flex>

      <Box className='mt-[30px] mx-auto max-w-[1440px]'>
        <EventList filterOption={filterOption} />
      </Box>
    </Box>
  )
}
