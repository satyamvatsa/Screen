import type { Metadata } from 'next'
import Script from 'next/script'
import ArticlesPageClient from './ArticlesPageClient'

export const metadata: Metadata = {
  title: 'Articles & Insights - Design, Development & Career Tips | Screen Shiksha Blog',
  description: 'Read expert articles on UI/UX Design, Web Development, Graphic Design, Game Development, and career tips. Free tutorials and insights from Screen Shiksha.',
  keywords: [
    'design articles',
    'UI UX blog',
    'web development tips',
    'design career',
    'industry insights',
    'design tutorials',
    'Figma tutorials',
    'React tutorials',
    'Unity tutorials',
    'graphic design tips',
    'portfolio tips',
    'Screen Shiksha blog',
  ],
  authors: [{ name: 'Screen Shiksha Team' }],
  creator: 'Screen Shiksha',
  publisher: 'Screen Shiksha',
  alternates: {
    canonical: 'https://screenshiksha.com/articles',
  },
  openGraph: {
    title: 'Articles & Insights - Screen Shiksha Blog',
    description: 'Expert articles on UI/UX design, web development, and creative careers. Learn from industry professionals.',
    url: 'https://screenshiksha.com/articles',
    siteName: 'Screen Shiksha',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-articles.png',
        width: 1200,
        height: 630,
        alt: 'Screen Shiksha Articles & Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles & Insights - Screen Shiksha Blog',
    description: 'Expert articles on design, development, and creative careers.',
    creator: '@screenshiksha',
    images: ['/og-articles.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
}

// Blog Schema
const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Screen Shiksha Blog',
  description: 'Expert articles on UI/UX Design, Web Development, Graphic Design, and career tips.',
  url: 'https://screenshiksha.com/articles',
  publisher: {
    '@type': 'EducationalOrganization',
    name: 'Screen Shiksha',
    url: 'https://screenshiksha.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://screenshiksha.com/logo-black.png',
    },
  },
  blogPost: [
    {
      '@type': 'BlogPosting',
      headline: 'Getting Started with UI/UX Design: A Beginner\'s Guide',
      url: 'https://screenshiksha.com/articles/getting-started-with-ui-ux-design',
      datePublished: '2026-01-15',
      author: { '@type': 'Organization', name: 'Screen Shiksha Team' },
    },
    {
      '@type': 'BlogPosting',
      headline: 'Top 10 Web Development Trends to Watch in 2026',
      url: 'https://screenshiksha.com/articles/top-10-web-development-trends-2026',
      datePublished: '2026-01-12',
      author: { '@type': 'Organization', name: 'Screen Shiksha Team' },
    },
    {
      '@type': 'BlogPosting',
      headline: 'Building Your Design Portfolio: Tips from Industry Experts',
      url: 'https://screenshiksha.com/articles/building-your-design-portfolio',
      datePublished: '2026-01-10',
      author: { '@type': 'Organization', name: 'Screen Shiksha Team' },
    },
    {
      '@type': 'BlogPosting',
      headline: 'The Psychology of Color in Brand Design',
      url: 'https://screenshiksha.com/articles/psychology-of-color-in-brand-design',
      datePublished: '2026-01-08',
      author: { '@type': 'Organization', name: 'Screen Shiksha Team' },
    },
    {
      '@type': 'BlogPosting',
      headline: 'Introduction to Game Development with Unity',
      url: 'https://screenshiksha.com/articles/introduction-to-game-development-unity',
      datePublished: '2026-01-05',
      author: { '@type': 'Organization', name: 'Screen Shiksha Team' },
    },
    {
      '@type': 'BlogPosting',
      headline: 'Responsive Design Best Practices for Modern Websites',
      url: 'https://screenshiksha.com/articles/responsive-design-best-practices',
      datePublished: '2026-01-03',
      author: { '@type': 'Organization', name: 'Screen Shiksha Team' },
    },
  ],
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://screenshiksha.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Articles',
      item: 'https://screenshiksha.com/articles',
    },
  ],
}

export default function ArticlesPage() {
  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ArticlesPageClient />
    </>
  )
}
