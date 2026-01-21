import type { Metadata } from 'next'
import Script from 'next/script'
import PortfolioPageClient from './PortfolioPageClient'

export const metadata: Metadata = {
  title: 'Student Portfolio - Projects by Our Graduates | Screen Shiksha',
  description: 'Explore amazing projects created by Screen Shiksha students. See real work from our UI/UX Design courses including iVOTE, Parking Space, and Subandhan Nidhi apps. View Behance portfolios.',
  keywords: [
    'student portfolio',
    'design portfolio',
    'UI UX projects',
    'Screen Shiksha students',
    'design school portfolio',
    'Behance portfolio',
    'UI design case study',
    'UX design projects',
    'mobile app design',
    'web app design',
    'student work India',
    'design course projects',
  ],
  authors: [{ name: 'Screen Shiksha' }],
  creator: 'Screen Shiksha',
  publisher: 'Screen Shiksha',
  alternates: {
    canonical: 'https://screenshiksha.com/portfolio',
  },
  openGraph: {
    title: 'Student Portfolio - Amazing Projects by Screen Shiksha Graduates',
    description: 'View impressive UI/UX design projects created by our talented students. Real case studies on Behance.',
    url: 'https://screenshiksha.com/portfolio',
    siteName: 'Screen Shiksha',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-portfolio.png',
        width: 1200,
        height: 630,
        alt: 'Screen Shiksha Student Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Portfolio - Screen Shiksha',
    description: 'View impressive UI/UX design projects created by our talented students.',
    creator: '@screenshiksha',
    images: ['/og-portfolio.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
}

// Portfolio Collection Schema
const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Screen Shiksha Student Portfolio',
  description: 'A collection of projects created by Screen Shiksha students showcasing their UI/UX design skills.',
  url: 'https://screenshiksha.com/portfolio',
  publisher: {
    '@type': 'EducationalOrganization',
    name: 'Screen Shiksha',
    url: 'https://screenshiksha.com',
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'CreativeWork',
          name: 'iVOTE: Bringing Elections Closer',
          description: 'An election empowerment platform with user-centric design and intuitive workflows.',
          creator: {
            '@type': 'Person',
            name: 'Sai Surya',
          },
          url: 'https://www.behance.net/gallery/211107221/iVOTE-Bringing-Elections-Closer',
          learningResourceType: 'Student Project',
          educationalLevel: 'Professional',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'CreativeWork',
          name: 'Parking Space',
          description: 'A smart parking app with clean UI and seamless user experience.',
          creator: {
            '@type': 'Person',
            name: 'Kailash Nath',
          },
          url: 'https://www.behance.net/gallery/208313707/Parking-Space',
          learningResourceType: 'Student Project',
          educationalLevel: 'Professional',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'CreativeWork',
          name: 'Subandhan Nidhi Web-App',
          description: 'A comprehensive financial management web app with intuitive dashboard.',
          creator: {
            '@type': 'Person',
            name: 'Sai Surya',
          },
          url: 'https://www.behance.net/gallery/212632883/subandhan-nidhi-Web-App-UIUX-case-study',
          learningResourceType: 'Student Project',
          educationalLevel: 'Professional',
        },
      },
    ],
  },
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
      name: 'Student Portfolio',
      item: 'https://screenshiksha.com/portfolio',
    },
  ],
}

export default function PortfolioPage() {
  return (
    <>
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PortfolioPageClient />
    </>
  )
}
