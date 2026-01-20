import type { Metadata } from 'next'
import ArticlesPageClient from './ArticlesPageClient'

export const metadata: Metadata = {
  title: 'Articles & Insights - Design & Development Blog',
  description: 'Read expert articles on UI/UX Design, Web Development, Graphic Design trends, career tips, and industry insights. Stay updated with Screen Shiksha blog.',
  keywords: ['design articles', 'UI UX blog', 'web development tips', 'design career', 'industry insights', 'design tutorials'],
  alternates: {
    canonical: 'https://screenshiksha.com/articles',
  },
  openGraph: {
    title: 'Articles & Insights - Screen Shiksha Blog',
    description: 'Expert articles on design, development, and creative careers.',
    url: 'https://screenshiksha.com/articles',
  },
}

export default function ArticlesPage() {
  return <ArticlesPageClient />
}
