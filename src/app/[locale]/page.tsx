'use client'
import { Intro } from '@/src/components/intro'
import { NextEvents } from '@/src/components/next-events'
import { useTranslations } from 'use-intl'

export default function Home() {
	const t = useTranslations('Index')
	return (
		<main>
			{/* <Intro /> */}
			<NextEvents />
		</main>
	)
}
