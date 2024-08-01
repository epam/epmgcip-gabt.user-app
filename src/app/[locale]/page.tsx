'use client'
import { ContactsInfo } from '@/src/components/contactsInfo'
import { Intro } from '@/src/components/intro'
import { useTranslations } from 'use-intl'

export default function Home() {
	const t = useTranslations('Index')
	return (
		<main>
			{/* <Intro /> */}
			<ContactsInfo />
		</main>
	)
}
