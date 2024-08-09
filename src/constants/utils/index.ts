import { Bona_Nova, Jost } from 'next/font/google'

export const GoogleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

export const bonnaNova = Bona_Nova({ subsets: ['latin'], weight: '400' })
export const jost = Jost({ subsets: ['latin'], weight: ['400', '600'] })
