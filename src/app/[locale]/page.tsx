'use client'
import { NextEvents } from '@/src/components/next-events'
import { ContactsInfo } from '@/src/components/contactsInfo'
import { Intro } from '@/src/components/intro'
import { useTranslations } from 'use-intl'

export default function Home() {
  const t = useTranslations('Index')
  return (
    <main>
      <Intro />
      <NextEvents />
      <ContactsInfo />
    </main>
  )
}
