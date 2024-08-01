'use-client'

import { Box, Flex, Heading, Link, Text } from '@radix-ui/themes'
import { useTranslations } from 'next-intl'
import { Bona_Nova, Jost } from 'next/font/google'
import Image from 'next/image'
import flowerIcon from '@/public/contact-info/flower.svg'
import pointOnMapIcon from '@/public/contact-info/point-on-map.svg'
import { ContactInfo } from './contact-info'
import { Map } from './map'

const bonnaNova = Bona_Nova({ subsets: ['latin'], weight: '400' })
const jost = Jost({ subsets: ['latin'], weight: ['400', '600'] })

export const ContactsInfo = () => {
	const t = useTranslations('Index')

	return (
		<Box className='z-[100] mt-20'>
			<Flex className='flex-col md:flex-row'>
				<ContactInfo />

				<Box className='w-full md:w-[50%] h-[260px] md:h-[500px] bg-[url("/contact-info/contact-info-img.jpg")] bg-no-repeat bg-center bg-cover' />
			</Flex>

			<Flex className='flex-col-reverse md:flex-row'>
				<Box className='w-full md:w-[50%] h-[260px] md:h-[500px]'>
					<Map />
				</Box>
				<Box className='md:w-[50%] md:h-[500px] px-[30px] py-[40px] flex justify-center items-center flex-col bg-[#A80403] text-[#FFFFFF] text-center'>
					<Image src={flowerIcon} alt='flower' />

					<Text className={`${bonnaNova.className} mt-7 uppercase text-[40px]`}>
						{t('ContactInfo.where-to-find-us')}
					</Text>

					<Text className={`${jost.className} mt-[18px] text-base flex`}>
						<Image
							src={pointOnMapIcon}
							alt='point'
							className='mr-[15px] hidden xl:block'
						/>
						Zip code 100029. 28, Zarafshon str., Tashkent, Uzbekistan
					</Text>

					<Link
						href='/'
						underline='always'
						className={`${jost.className} mt-4 py-3 decoration-[#FFF] uppercase text-[#FFFFFF] text-[15px]`}
					>
						{t('ContactInfo.more-about-us')}
					</Link>
				</Box>
			</Flex>
		</Box>
	)
}
