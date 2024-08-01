'use client'
import { Box, Flex, Heading, Text, Link } from '@radix-ui/themes'
import React from 'react'
import facebookIcon from '@/public/contact-info/facebook.svg'
import telegramIcon from '@/public/contact-info/telegram.svg'
import instagramIcon from '@/public/contact-info/instagram.svg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { bonnaNova, jost } from '@/src/constants/utils'

export const ContactInfo = () => {
	const t = useTranslations('Index')

	return (
		<Box className='w-full md:w-[50%] md:h-[500px] bg-creamy-yellow/[.7] flex justify-center items-center px-[30px] xl:px-[70px] py-[40px] bg-no-repeat bg-center bg-cover bg-contact-info-contacts-bg'>
			<Flex className='w-full flex-col'>
				<Heading
					as='h3'
					className={`${bonnaNova.className} text-[40px] leading-10 tracking-wide text-center xl:text-left`}
				>
					{t('ContactInfo.contact-info')}
				</Heading>

				<Flex className='flex-row xl:flex-col justify-center mt-[15px] xl:mt-[28px] gap-y-[18px] gap-x-[20px]'>
					<Flex
						justify={'between'}
						className={`${jost.className}  flex-col gap-y-[33px] xl:flex-row`}
					>
						<Text className='max-w-[147px] xl:max-w-[155px]'>
							<Text className='font-semibold'>
								{t('ContactInfo.ticket-office')} <br />
							</Text>
							<a href='tel:(+99871) 233-90-81' className='hover:opacity-60'>
								(+99871) 233-90-81
							</a>{' '}
							<br />
							<a href='tel:(+99871) 232-19-48' className='hover:opacity-60'>
								(+99871) 232-19-48
							</a>
						</Text>

						<Text className='max-w-[147px] xl:max-w-[155px]'>
							<Text className='font-semibold'>
								{t('ContactInfo.administrator')} <br />
							</Text>
							<a href='tel:(+99871) 233-33-36' className='hover:opacity-60'>
								(+99871) 233-33-36
							</a>
						</Text>

						<Text className='max-w-[147px] xl:max-w-[155px]'>
							<Text className='font-semibold'>
								{t('ContactInfo.deputy-director')} <br />
							</Text>
							<a href='tel:(+99871) 233-32-21' className='hover:opacity-60'>
								(+99871) 233-32-21
							</a>
						</Text>
					</Flex>

					<Flex
						justify={'between'}
						className={`${jost.className} flex-col gap-y-[33px] xl:flex-row`}
					>
						<Text className='max-w-[147px] xl:max-w-[155px]'>
							<Text className='font-semibold'>
								{t('ContactInfo.phone-fax')} <br />
							</Text>
							<a href='tel:(+99871) 233-35-28' className='hover:opacity-60'>
								(+99871) 233-35-28
							</a>
						</Text>

						<Text className='max-w-[147px] xl:max-w-[155px]'>
							<Text className='font-semibold'>
								{t('ContactInfo.e-mail')} <br />
							</Text>
							<a href='mailto:info@gabt.uz' className='hover:opacity-60'>
								info@gabt.uz
							</a>
							<br />
							<a href='mailto:gabtuzb@mail.ru' className='hover:opacity-60'>
								gabtuzb@mail.ru
							</a>
						</Text>

						<Flex className='max-w-[147px] xl:max-w-[155px] w-full gap-[21px]'>
							<Link
								href='https://www.facebook.com/gabtnavoi/'
								className='hover:opacity-60'
							>
								<Image src={facebookIcon} alt='facebook' />
							</Link>

							<Link href='https://t.me/gabtuzb' className='hover:opacity-60'>
								<Image src={telegramIcon} alt='telegram' />
							</Link>

							<Link
								href='https://instagram.com/gabt.uz'
								className='hover:opacity-60'
							>
								<Image src={instagramIcon} alt='instagram' />
							</Link>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	)
}
