'use-client'

import { Box, Flex, Link, Text } from '@radix-ui/themes'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import flowerIcon from '@/public/contact-info/flower.svg'
import pointOnMapIcon from '@/public/contact-info/point-on-map.svg'
import { ContactInfo } from './contact-info'
import { Map } from './map'
import { bonnaNova, jost } from '@/src/constants/utils'

export const ContactsInfo = () => {
	const t = useTranslations('Index')

	return (
		<Box>
			<Flex className='flex-col md:flex-row'>
				<ContactInfo />

				<Box className='w-full md:w-[50%] h-[260px] md:h-[500px] bg-contact-info-photo-img bg-no-repeat bg-center bg-cover' />
			</Flex>

			<Flex className='flex-col-reverse md:flex-row'>
				<Box className='w-full md:w-[50%] h-[260px] md:h-[500px]'>
					<Map />
				</Box>
				<Box className='md:w-[50%] md:h-[500px] px-[30px] py-[40px] flex justify-center items-center flex-col bg-dark-red text-white text-center'>
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
						{t('ContactInfo.address')}
					</Text>

					<Link
						href='/'
						underline='always'
						className={`${jost.className} mt-4 py-3 decoration-white uppercase text-white text-[15px]`}
					>
						{t('ContactInfo.more-about-us')}
					</Link>
				</Box>
			</Flex>
		</Box>
	)
}
