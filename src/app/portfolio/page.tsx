import type { Metadata } from 'next'
import PortfolioPageClient from './PortfolioPageClient'

export const metadata: Metadata = {
  title: 'Student Portfolio - Projects by Our Graduates',
  description: 'Explore amazing projects created by Screen Shiksha students. See real work from our UI/UX Design, Web Development, Graphic Design & Game Development courses.',
  keywords: ['student portfolio', 'design portfolio', 'UI UX projects', 'web development projects', 'student work', 'design school portfolio'],
  alternates: {
    canonical: 'https://screenshiksha.com/portfolio',
  },
  openGraph: {
    title: 'Student Portfolio - Screen Shiksha',
    description: 'View impressive projects created by our talented students across all courses.',
    url: 'https://screenshiksha.com/portfolio',
  },
}

export default function PortfolioPage() {
  return <PortfolioPageClient />
}
