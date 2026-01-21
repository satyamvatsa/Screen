import type { Metadata } from 'next'
import ArticlePageClient from './ArticlePageClient'
import { articleData } from './articleData'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articleData[slug]

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for does not exist.',
    }
  }

  const articleUrl = `https://screenshiksha.com/articles/${slug}`

  return {
    title: `${article.title} | Screen Shiksha Blog`,
    description: article.excerpt,
    keywords: [
      ...article.keywords,
      'Screen Shiksha',
      'design tutorial',
      'learn design',
      'online course',
    ],
    authors: [{ name: article.author }],
    creator: article.author,
    publisher: 'Screen Shiksha',
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: articleUrl,
      siteName: 'Screen Shiksha',
      locale: 'en_IN',
      type: 'article',
      publishedTime: article.publishedDate,
      modifiedTime: article.publishedDate,
      authors: [article.author],
      section: article.category,
      tags: article.keywords,
      images: [
        {
          url: `/og-articles/${slug}.png`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      creator: '@screenshiksha',
      images: [`/og-articles/${slug}.png`],
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    category: article.category,
  }
}

export async function generateStaticParams() {
  return Object.keys(articleData).map((slug) => ({ slug }))
}

export default function ArticlePage() {
  return <ArticlePageClient />
}
