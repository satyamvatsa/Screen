import type { Metadata } from 'next'
import TermsPageClient from './TermsPageClient'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read Screen Shiksha\'s Terms and Conditions for course enrollment, payment terms, refund policy, and user guidelines.',
  alternates: {
    canonical: 'https://screenshiksha.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return <TermsPageClient />
}
