import type { Metadata } from 'next'
import PrivacyPageClient from './PrivacyPageClient'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Screen Shiksha\'s Privacy Policy explains how we collect, use, and protect your personal information when you use our services.',
  alternates: {
    canonical: 'https://screenshiksha.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return <PrivacyPageClient />
}
