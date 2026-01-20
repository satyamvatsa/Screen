import type { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: 'About Us - Our Story, Mission & Values',
  description: 'Learn about Screen Shiksha\'s mission to empower creative careers through expert-led online training. 1000+ students trained, industry-expert trainers, and comprehensive career support.',
  keywords: ['about Screen Shiksha', 'design school India', 'online education', 'UI UX training institute', 'web development training'],
  alternates: {
    canonical: 'https://screenshiksha.com/about',
  },
  openGraph: {
    title: 'About Screen Shiksha - Empowering Creative Careers',
    description: 'Discover how Screen Shiksha is transforming creative education with live online courses and expert mentorship.',
    url: 'https://screenshiksha.com/about',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
