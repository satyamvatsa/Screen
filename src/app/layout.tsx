import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0d4f4f',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://screenshiksha.com'),
  title: {
    default: 'Screen Shiksha - Best UI/UX Design & Web Development Courses in India | Live Online Classes',
    template: '%s | Screen Shiksha',
  },
  description: 'Screen Shiksha offers industry-leading online courses in UI/UX Design, Web Development, Graphic Design & Game Development. Live interactive classes with expert trainers, placement assistance & certification. Join 1000+ successful students.',
  keywords: [
    'UI UX design course',
    'UI UX design course online',
    'UI UX design course India',
    'web development course',
    'graphic design course',
    'game development course',
    'online design courses',
    'live online classes',
    'design certification',
    'UX design training',
    'UI design training',
    'learn figma',
    'react course',
    'full stack development',
    'design career',
    'placement assistance',
    'Screen Shiksha',
  ],
  authors: [{ name: 'Screen Shiksha', url: 'https://screenshiksha.com' }],
  creator: 'Screen Shiksha by Multiorigin',
  publisher: 'Screen Shiksha',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://screenshiksha.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://screenshiksha.com',
    siteName: 'Screen Shiksha',
    title: 'Screen Shiksha - Best UI/UX Design & Web Development Courses in India',
    description: 'Join live online courses in UI/UX Design, Web Development, Graphic Design & Game Development. Expert trainers, hands-on projects, placement assistance.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Screen Shiksha - Design Your Career',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Screen Shiksha - Best UI/UX Design & Web Development Courses',
    description: 'Live online courses in UI/UX Design, Web Development & more. Expert trainers, placement assistance.',
    images: ['/og-image.png'],
    creator: '@screenshiksha',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'education',
}

// Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Screen Shiksha',
  alternateName: 'Screen Shiksha by Multiorigin',
  url: 'https://screenshiksha.com',
  logo: 'https://screenshiksha.com/logo.png',
  description: 'Screen Shiksha offers professional online courses in UI/UX Design, Web Development, Graphic Design, and Game Development with live interactive classes.',
  email: 'info@screenshiksha.com',
  telephone: '+91-9650582767',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.facebook.com/screenshiksha',
    'https://www.instagram.com/screenshiksha',
    'https://www.linkedin.com/company/screenshiksha',
    'https://www.youtube.com/@screenshiksha',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Professional Design & Development Courses',
    itemListElement: [
      {
        '@type': 'Course',
        name: 'UI/UX Design Course',
        description: 'Comprehensive UI/UX Design course with Figma, prototyping, and user research.',
        provider: { '@type': 'Organization', name: 'Screen Shiksha' },
        educationalLevel: 'Beginner to Advanced',
        timeRequired: 'P12M',
      },
      {
        '@type': 'Course',
        name: 'Web Development Course',
        description: 'Full-stack web development with React, Node.js, and modern technologies.',
        provider: { '@type': 'Organization', name: 'Screen Shiksha' },
        educationalLevel: 'Beginner to Advanced',
        timeRequired: 'P12M',
      },
      {
        '@type': 'Course',
        name: 'Graphic Design Course',
        description: 'Professional graphic design with Adobe Creative Suite and brand design.',
        provider: { '@type': 'Organization', name: 'Screen Shiksha' },
        educationalLevel: 'Beginner to Advanced',
        timeRequired: 'P8M',
      },
      {
        '@type': 'Course',
        name: 'Game Development Course',
        description: 'Game development with Unity, C#, and game design principles.',
        provider: { '@type': 'Organization', name: 'Screen Shiksha' },
        educationalLevel: 'Beginner to Advanced',
        timeRequired: 'P12M',
      },
    ],
  },
}

// Website Schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Screen Shiksha',
  url: 'https://screenshiksha.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://screenshiksha.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
