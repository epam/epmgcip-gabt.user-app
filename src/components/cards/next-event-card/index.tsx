import { Box, Button, Flex, Text } from '@radix-ui/themes'
import { Props } from './types'
import Image from 'next/image'
import { title } from 'process'
import Link from 'next/link'

export const NextEventCard = ({
	type,
	title,
	text,
	link,
	date,
	img,
	time
}: Props) => {
	function formatDateWithDayName(date: Date): string {
		const daysOfWeek = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		]
		const dayName = daysOfWeek[date.getDay()]

		const day = String(date.getDate()).padStart(2, '0')
		const month = String(date.getMonth() + 1).padStart(2, '0')
		const year = date.getFullYear()

		return `${dayName}, ${day}.${month}.${year}`
	}

	return (
		<Box className='max-w-[310px] w-full border border-solid border-black  bg-white'>
			<Box className='w-full h-[228px]'>
				<Image src={`${img}`} alt='image' height={228} width={310} />
			</Box>

			<Box className='py-[17px] px-[20px]'>
				<Text as='p' className='font-medium uppercase text-dark-red text-sm'>
					{type}
				</Text>

				<Text
					as='p'
					className='mt-2 font-medium text-xl h-20 line-clamp-3 text-ellipsis overflow-hidden ...'
				>
					{title}
				</Text>

				<Flex className='mt-10 gap-[14px] items-center'>
					<Image
						src={'/next-event-card/calendar.svg'}
						alt='calendar'
						width={14}
						height={16}
					/>

					<Text className='text-sm text-black'>
						{formatDateWithDayName(date)}
					</Text>
				</Flex>

				<Flex className='mt-1 gap-[14px] items-center'>
					<Image
						src={'/next-event-card/clock.svg'}
						alt='clock'
						width={14}
						height={16}
					/>

					<Text className='text-sm text-black'>{time} h</Text>
				</Flex>
			</Box>

			<Link
				href={link}
				className='py-4 flex items-center justify-center text-[15px] tracking-wide	border-t border-solid border-black hover:opacity-60'
			>
				More Info
			</Link>
		</Box>
	)
}
