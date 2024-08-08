import { Box, Button, DropdownMenu, Flex, Heading } from '@radix-ui/themes'
import { useTranslations } from 'next-intl'
import { BasicButton } from '../buttons'
import { NextEventCard } from '../cards'
import { NEXT_EVENTS } from '@/src/constants/next-events-mock'

export const NextEvents = () => {
	const t = useTranslations('Index')

	return (
		<Box className='px-[30px] pt-[48px] pb-[40px] bg-light-yellow'>
			<Heading
				as='h3'
				className={`uppercase text-[59px] leading-[65px] tracking-wide text-center xl:text-left`}
			>
				{t('next-events')}
			</Heading>

			<Flex className='mt-[7px] lg:mt-[26px] flex-col gap-y-[20px] items-center lg:flex-row lg:justify-between'>
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

				<BasicButton
					text={t('see-all-events')}
					classnames='px-[26px] uppercase text-[15px] w-auto text-black border-white bg-warm-orange'
					outBoxClassnames='w-[181px] bg-warm-orange'
				/>
			</Flex>

			<Flex className='mt-[30px] flex-wrap gap-2'>
				{NEXT_EVENTS.map((item, index) => (
					<NextEventCard
						key={index}
						img={item.img}
						date={item.date}
						link={item.link}
						text={item.text}
						time={item.time}
						title={item.title}
						type={item.type}
					/>
				))}
			</Flex>
		</Box>
	)
}
