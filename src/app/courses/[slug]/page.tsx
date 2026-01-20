import type { Metadata } from 'next'
import CoursePageClient from './CoursePageClient'

type Props = {
  params: Promise<{ slug: string }>
}

const courseMetadata: { [key: string]: { title: string; description: string; keywords: string[] } } = {
  'ui-ux-design': {
    title: 'UI/UX Design Course - Master Figma, Prototyping & User Research',
    description: 'Learn UI/UX Design with live online classes. Master Figma, user research, wireframing, prototyping & design systems. 12-month program with certification & placement support.',
    keywords: ['UI UX design course', 'Figma course', 'UX design training', 'UI design course online', 'learn UX design', 'user experience course', 'design certification'],
  },
  'web-development': {
    title: 'Web Development Course - Full Stack React, Node.js & More',
    description: 'Become a full-stack web developer. Learn React, Node.js, TypeScript, databases & deployment. 12-month live online course with hands-on projects & job assistance.',
    keywords: ['web development course', 'full stack course', 'React course', 'Node.js training', 'learn web development', 'coding bootcamp', 'frontend course'],
  },
  'graphic-design': {
    title: 'Graphic Design Course - Adobe Photoshop, Illustrator & Branding',
    description: 'Professional graphic design training. Master Adobe Photoshop, Illustrator, InDesign & brand design. 8-month program with portfolio building & career support.',
    keywords: ['graphic design course', 'Photoshop course', 'Illustrator training', 'brand design course', 'learn graphic design', 'design certification'],
  },
  'game-development': {
    title: 'Game Development Course - Unity, C# & Game Design',
    description: 'Learn game development with Unity & C#. Create 2D/3D games from scratch. 12-month live online course with industry mentors & portfolio-ready projects.',
    keywords: ['game development course', 'Unity course', 'C# game programming', 'learn game dev', 'game design course', 'Unity training'],
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const meta = courseMetadata[slug] || {
    title: 'Course Details',
    description: 'Professional online courses at Screen Shiksha',
    keywords: ['online course', 'professional training'],
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `https://screenshiksha.com/courses/${slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://screenshiksha.com/courses/${slug}`,
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  return [
    { slug: 'ui-ux-design' },
    { slug: 'web-development' },
    { slug: 'graphic-design' },
    { slug: 'game-development' },
  ]
}

export default function CoursePage() {
  return <CoursePageClient />
}
