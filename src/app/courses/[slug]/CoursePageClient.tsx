'use client'

import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Script from 'next/script'
import { 
  Clock, 
  Users, 
  Award, 
  BookOpen,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Calendar,
  Target,
  Briefcase,
  Zap,
  GraduationCap,
  Palette,
  Code,
  User,
  Quote,
  BadgeCheck,
  ChevronDown,
  ChevronUp,
  Layers,
  Megaphone,
  BarChart3,
  Search,
  Share2
} from 'lucide-react'
import { useState } from 'react'
import styles from './page.module.css'
import Button from '@/components/Button'

const courseData: { [key: string]: {
  title: string
  subtitle: string
  description: string
  duration: string
  projects: number
  rating: number
  students: string
  color: string
  highlights: string[]
  curriculum: { title: string; topics: string[] }[]
  skills: string[]
  careers: string[]
} } = {
  'ui-ux-design': {
    title: 'UI/UX Design',
    subtitle: 'Master Graphic Design, Frontend, and UI/UX Strategy',
    description: 'Elevate your skills with our comprehensive 12-month course covering Graphic Design, Frontend Development, User Experience (UX), and User Interface (UI). Build a full-stack design portfolio with interactive modules, real-world projects, and job placement assistance.',
    duration: '12 months',
    projects: 15,
    rating: 4.9,
    students: '500+',
    color: 'var(--color-accent)',
    highlights: [
      'Live interactive classes with industry experts',
      'Hands-on projects with real clients',
      'Master Graphic Design & Frontend Technologies',
      'Comprehensive portfolio & career support',
      'Industry-recognized certification',
      'Job placement assistance',
    ],
    curriculum: [
      {
        title: 'Module 1: Graphic Design',
        topics: ['Vector Art & Logo Creation (Illustrator)', 'Raster Art & Matte Painting (Photoshop)', 'Typography & Grid Systems', 'Masking & Manipulations'],
      },
      {
        title: 'Module 2: Frontend Development',
        topics: ['HTML5 & CSS3 Foundations', 'JavaScript Programming & DOM', 'Responsive Design & Frameworks', 'Mini Project Development'],
      },
      {
        title: 'Module 3: User Experience',
        topics: ['Design Thinking (LUMA, AIGA)', 'Psychology of Experience', 'User Research & Journey Mapping', 'Ideation, Strategy & Prototyping'],
      },
      {
        title: 'Module 4: User Interface',
        topics: ['Figma GUI & Vector Basics', 'Interface & Interaction Design', 'Design Systems & Libraries', 'Information Architecture & Case Studies'],
      },
    ],
    skills: ['Figma', 'Illustrator', 'Photoshop', 'HTML/CSS', 'JavaScript', 'UX Research'],
    careers: ['UI/UX Designer', 'Frontend Developer', 'Product Designer', 'Graphic Designer'],
  },
  'web-development': {
    title: 'Web Development',
    subtitle: 'Build the Future of the Web',
    description: 'Unlock the world of web development with our comprehensive course, offering hands-on projects, expert instruction, and career-boosting certification. Master both frontend and backend technologies.',
    duration: '12 months',
    projects: 20,
    rating: 4.8,
    students: '400+',
    color: 'var(--color-mint)',
    highlights: [
      'Full-stack development training',
      'Real-world project experience',
      'Git & deployment workflows',
      'Industry-recognized certification',
      'Code review sessions',
      'Interview preparation',
    ],
    curriculum: [
      {
        title: 'Frontend Basics',
        topics: ['HTML5 & CSS3', 'JavaScript ES6+', 'Responsive Design', 'CSS Frameworks'],
      },
      {
        title: 'Frontend Advanced',
        topics: ['React.js', 'State Management', 'TypeScript', 'Next.js'],
      },
      {
        title: 'Backend Development',
        topics: ['Node.js', 'Express.js', 'Databases (SQL/NoSQL)', 'REST APIs'],
      },
      {
        title: 'DevOps & Deployment',
        topics: ['Git & GitHub', 'CI/CD', 'Cloud Deployment', 'Performance Optimization'],
      },
    ],
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS'],
    careers: ['Frontend Developer', 'Backend Developer', 'Full-stack Developer', 'Software Engineer'],
  },
  'graphic-design': {
    title: 'Graphic Design Professional',
    subtitle: 'Create Visual Magic',
    description: 'Unleash your creativity with our dynamic course, blending theory and practice to elevate your design skills and empower your artistic vision. Master industry-standard tools and techniques.',
    duration: '8 months',
    projects: 12,
    rating: 4.9,
    students: '350+',
    color: 'var(--color-lavender)',
    highlights: [
      'Adobe Creative Suite mastery',
      'Brand identity design projects',
      'Print & digital design skills',
      'Portfolio development',
      'Client project experience',
      'Freelance guidance',
    ],
    curriculum: [
      {
        title: 'Design Fundamentals',
        topics: ['Visual Principles', 'Color Psychology', 'Typography Mastery', 'Composition'],
      },
      {
        title: 'Digital Design',
        topics: ['Adobe Photoshop', 'Adobe Illustrator', 'Image Manipulation', 'Vector Graphics'],
      },
      {
        title: 'Brand Design',
        topics: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Marketing Materials'],
      },
      {
        title: 'Advanced Techniques',
        topics: ['Print Design', 'Packaging Design', 'Social Media Graphics', 'Motion Graphics Intro'],
      },
    ],
    skills: ['Photoshop', 'Illustrator', 'InDesign', 'Brand Design', 'Typography', 'Layout'],
    careers: ['Graphic Designer', 'Brand Designer', 'Visual Designer', 'Art Director'],
  },
  'game-development': {
    title: 'Game Development',
    subtitle: 'Create Immersive Gaming Experiences',
    description: 'Dive into game development with immersive projects, industry tools, and expert mentorship to build captivating gaming experiences. Learn to create games from concept to launch.',
    duration: '12 months',
    projects: 8,
    rating: 4.8,
    students: '200+',
    color: 'var(--color-sky)',
    highlights: [
      'Unity & Unreal Engine training',
      'Complete game development cycle',
      '2D and 3D game projects',
      'Game design principles',
      'Portfolio-ready games',
      'Industry networking events',
    ],
    curriculum: [
      {
        title: 'Game Design',
        topics: ['Game Theory', 'Level Design', 'Game Mechanics', 'Player Psychology'],
      },
      {
        title: 'Unity Development',
        topics: ['C# Programming', 'Unity Interface', '2D Game Development', 'Physics & Animation'],
      },
      {
        title: '3D Development',
        topics: ['3D Modeling Basics', '3D Game Mechanics', 'Lighting & Effects', 'Optimization'],
      },
      {
        title: 'Publishing',
        topics: ['Game Testing', 'Platform Publishing', 'Monetization', 'Marketing Basics'],
      },
    ],
    skills: ['Unity', 'C#', 'Game Design', '3D Modeling', 'Animation', 'Level Design'],
    careers: ['Game Developer', 'Game Designer', 'Unity Developer', 'Technical Artist'],
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    subtitle: 'Premier Certificate in Digital Performance Strategy & Management',
    description: 'Master the complete digital marketing ecosystem — from SEO and paid advertising to social media strategy, analytics, and AI-powered marketing. This 67-module program covers everything from fundamentals to advanced performance marketing, with 120+ hours of live training and a 6-month internship.',
    duration: '3 months + 6 months internship',
    projects: 15,
    rating: 4.9,
    students: '500+',
    color: 'var(--color-rose)',
    highlights: [
      '67 comprehensive modules covering the full digital ecosystem',
      '120+ hours of live interactive training',
      '6-month online internship with real campaigns',
      'Executive + Management dual-track learning',
      'Generative AI modules for modern marketing',
      'Industry-recognized certification & placement support',
    ],
    curriculum: [
      {
        title: 'Foundations & Web Setup',
        topics: ['Basics of Digital Marketing', 'Branding & Advertising Strategies', 'Content Planning & Marketing', 'Graphic Designing for Content', 'Website Creation (No-Code)', 'E-commerce & Shopify Store', 'Domain & Hosting'],
      },
      {
        title: 'SEO & Search Marketing',
        topics: ['Search Engine Algorithms', 'Keyword Research', 'On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'Google Search Console', 'Google Business Profile (Local SEO)', 'Email Marketing & Automation'],
      },
      {
        title: 'Social Media & Paid Ads',
        topics: ['Facebook & Instagram Marketing', 'LinkedIn & Twitter Marketing', 'YouTube Marketing', 'Meta Ads (Facebook & Instagram)', 'Google Ads (Search, Display, Video)', 'LinkedIn Ads', 'Remarketing & Retargeting'],
      },
      {
        title: 'Analytics & Growth',
        topics: ['Google Analytics (GA4)', 'Google Tag Manager', 'Data Studio / Looker Studio', 'Conversion Rate Optimization', 'Lead Generation Strategies', 'Performance Marketing', 'Marketing Automation', 'AI in Digital Marketing'],
      },
      {
        title: 'Advanced & Career',
        topics: ['Affiliate & Influencer Marketing', 'Media Buying & Planning', 'Growth Hacking', 'Freelancing in Digital Marketing', 'Client Pitching & Reporting', 'Resume Building', 'Interview Preparation', 'Placement Session'],
      },
    ],
    skills: ['SEO', 'Google Ads', 'Meta Ads', 'Social Media Marketing', 'Analytics', 'Content Strategy', 'Performance Marketing', 'Email Marketing'],
    careers: ['Digital Marketing Manager', 'SEO Specialist', 'Performance Marketer', 'Social Media Manager', 'Growth Hacker', 'PPC Specialist'],
  },
}

const courseExtras: { [key: string]: {
  why: { icon: any; title: string; desc: string }[]
  who: { icon: any; title: string; desc: string }[]
  testimonials: { name: string; role: string; text: string; rating: number }[]
  tools: string[]
  certTitle: string
  faq: { q: string; a: string }[]
} } = {
  'ui-ux-design': {
    why: [
      { icon: Layers, title: '4-in-1 Program', desc: 'Graphic Design + Frontend Dev + UX + UI — all in one comprehensive course. No need for multiple enrollments.' },
      { icon: Play, title: 'Live Classes, Not Recorded', desc: 'Every session is conducted live with real-time interaction, doubt-solving, and hands-on exercises.' },
      { icon: Briefcase, title: 'Real Client Projects', desc: 'Work on actual briefs and build a portfolio that impresses employers — not just dummy assignments.' },
      { icon: GraduationCap, title: 'Job Placement Support', desc: 'Get resume reviews, portfolio critiques, mock interviews, and direct referrals to hiring companies.' },
    ],
    who: [
      { icon: GraduationCap, title: 'College Students', desc: 'Build job-ready design & dev skills before you graduate.' },
      { icon: Briefcase, title: 'Working Professionals', desc: 'Transition into UI/UX or enhance your current role with design thinking.' },
      { icon: Palette, title: 'Aspiring Designers', desc: 'Turn your creative passion into a profitable career path.' },
      { icon: Code, title: 'Developers', desc: 'Add design skills to become a complete product builder.' },
      { icon: User, title: 'Freelancers', desc: 'Expand your service offerings and charge premium rates.' },
      { icon: Zap, title: 'Career Changers', desc: 'Switch to one of the most in-demand fields in tech.' },
    ],
    testimonials: [
      { name: 'Priya Sharma', role: 'UI/UX Designer at a Tech Startup', text: 'The 4-module structure gave me an edge — I could design, prototype, AND code. Screen Shiksha helped me land my dream job within 2 months of completing the course.', rating: 5 },
      { name: 'Rahul Verma', role: 'Freelance Designer', text: 'I was a complete beginner. The live classes, real projects, and mentorship from industry experts made all the difference. I now earn 3x more as a freelancer.', rating: 5 },
      { name: 'Ananya Gupta', role: 'Product Designer', text: 'The curriculum is incredibly thorough — from Illustrator to Figma to Information Architecture. The placement support team was fantastic and guided me every step of the way.', rating: 5 },
    ],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'VS Code', 'Chrome DevTools'],
    certTitle: 'UI/UX Design Professional Program',
    faq: [
      { q: 'Do I need any prior design or coding experience?', a: 'No! This course is designed for complete beginners. We start from the fundamentals and gradually build up to advanced topics across all 4 modules.' },
      { q: 'What is the class schedule like?', a: 'Classes are held live online, typically on weekdays in the evening (IST). Weekend batches are also available. Each session is 1.5–2 hours long.' },
      { q: 'Is EMI or installment payment available?', a: 'Yes, we offer flexible EMI plans so the course is affordable for everyone. Contact us for detailed pricing and payment options.' },
      { q: 'Will I get a portfolio by the end?', a: 'Absolutely. You will work on multiple real-world projects throughout the course, building a comprehensive portfolio that is ready to show employers.' },
      { q: 'How is placement support provided?', a: 'We offer resume reviews, mock interviews, portfolio critiques, and direct referrals to our hiring partner companies. Our team works with you until you get placed.' },
      { q: 'Can I attend a free demo class before enrolling?', a: 'Yes! We offer free demo classes so you can experience our teaching methodology firsthand. Just fill out the enquiry form or contact us to book one.' },
    ],
  },
  'web-development': {
    why: [
      { icon: Layers, title: 'Full-Stack Coverage', desc: 'Frontend + Backend + DevOps — learn everything you need to build and deploy complete web applications from scratch.' },
      { icon: Play, title: 'Live Coding Sessions', desc: 'Learn by building real projects in live sessions with instructors. No pre-recorded videos — get your doubts solved instantly.' },
      { icon: Briefcase, title: 'Industry-Ready Projects', desc: 'Build 20+ projects including e-commerce sites, dashboards, and APIs that go straight into your portfolio.' },
      { icon: GraduationCap, title: 'Career Acceleration', desc: 'Get placement support with resume reviews, mock interviews, and direct referrals to hiring tech companies.' },
    ],
    who: [
      { icon: GraduationCap, title: 'College Students', desc: 'Get a head start in tech with job-ready coding skills.' },
      { icon: Briefcase, title: 'Career Switchers', desc: 'Transition from any field into high-demand web development roles.' },
      { icon: Palette, title: 'Designers', desc: 'Add coding abilities to bring your own designs to life.' },
      { icon: Code, title: 'Self-Taught Developers', desc: 'Fill gaps in your knowledge and master professional workflows.' },
      { icon: User, title: 'Freelancers', desc: 'Build client websites and web apps to grow your business.' },
      { icon: Zap, title: 'Entrepreneurs', desc: 'Build your own MVPs and products without relying on external developers.' },
    ],
    testimonials: [
      { name: 'Amit Patel', role: 'Frontend Developer at an IT Company', text: 'I went from zero coding knowledge to building full-stack apps in 10 months. The live projects and code reviews made all the difference.', rating: 5 },
      { name: 'Sneha Reddy', role: 'Full-Stack Developer', text: 'The mentors are incredibly patient and skilled. They helped me build a portfolio that landed me 3 job offers within weeks of completing the course.', rating: 5 },
      { name: 'Vikram Singh', role: 'Freelance Web Developer', text: 'Screen Shiksha taught me React, Node.js, and deployment. I now build websites for clients and earn more than my previous corporate salary.', rating: 5 },
    ],
    tools: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'TypeScript', 'MongoDB', 'Git & GitHub', 'VS Code'],
    certTitle: 'Web Development Professional Program',
    faq: [
      { q: 'Do I need any prior coding experience?', a: 'No! We start from the absolute basics — HTML, CSS, and JavaScript — and gradually move to advanced frameworks like React and Node.js.' },
      { q: 'What is the class schedule like?', a: 'Classes are held live online, typically on weekdays in the evening (IST). Weekend batches are also available. Each session is 1.5–2 hours long.' },
      { q: 'Is EMI or installment payment available?', a: 'Yes, we offer flexible EMI plans so the course is affordable for everyone. Contact us for detailed pricing and payment options.' },
      { q: 'Will I be able to build real websites after the course?', a: 'Absolutely. You will build 20+ projects including responsive websites, full-stack apps, and REST APIs — all portfolio-ready.' },
      { q: 'How is placement support provided?', a: 'We offer resume reviews, mock interviews, portfolio critiques, and direct referrals to our hiring partner companies. Our team works with you until you get placed.' },
      { q: 'Can I attend a free demo class before enrolling?', a: 'Yes! We offer free demo classes so you can experience our teaching methodology firsthand. Just fill out the enquiry form or contact us to book one.' },
    ],
  },
  'graphic-design': {
    why: [
      { icon: Layers, title: 'Complete Design Training', desc: 'Master Adobe Photoshop, Illustrator, and InDesign — the industry-standard tools used by every professional designer.' },
      { icon: Play, title: 'Live Interactive Classes', desc: 'Every session is conducted live with hands-on practice, real-time feedback, and immediate doubt resolution.' },
      { icon: Briefcase, title: 'Brand Identity Projects', desc: 'Work on complete branding projects from logos to marketing collateral — build a portfolio that wins clients.' },
      { icon: GraduationCap, title: 'Freelance & Job Ready', desc: 'Get guidance on freelancing, building your client base, and applying for design roles at top companies.' },
    ],
    who: [
      { icon: GraduationCap, title: 'College Students', desc: 'Kickstart your creative career with professional design skills.' },
      { icon: Briefcase, title: 'Marketing Professionals', desc: 'Create your own graphics and stop depending on external design agencies.' },
      { icon: Palette, title: 'Creative Enthusiasts', desc: 'Turn your love for art and visual design into a professional skill set.' },
      { icon: Code, title: 'Web Developers', desc: 'Add visual design skills to create beautiful interfaces for your projects.' },
      { icon: User, title: 'Freelancers', desc: 'Offer design services to clients and significantly boost your income.' },
      { icon: Zap, title: 'Small Business Owners', desc: 'Design your own brand materials, social media posts, and marketing assets.' },
    ],
    testimonials: [
      { name: 'Meera Joshi', role: 'Brand Designer', text: 'Screen Shiksha\'s graphic design course transformed my creative process. The branding projects gave me a portfolio that clients love. Highly recommended!', rating: 5 },
      { name: 'Karan Malhotra', role: 'Freelance Graphic Designer', text: 'I learned Photoshop and Illustrator from scratch. Now I design logos, posters, and social media graphics for multiple clients every month.', rating: 5 },
      { name: 'Divya Nair', role: 'Visual Designer at an Agency', text: 'The practical approach — from typography to matte painting — gave me skills I use daily at my job. The instructors are truly exceptional.', rating: 5 },
    ],
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Canva', 'Color Theory', 'Typography', 'Brand Guidelines', 'Print Design', 'Digital Design'],
    certTitle: 'Graphic Design Professional Program',
    faq: [
      { q: 'Do I need to know how to draw to take this course?', a: 'Not at all! This course uses digital tools. We will teach you all the techniques from scratch — no prior artistic skills are required.' },
      { q: 'What is the class schedule like?', a: 'Classes are held live online, typically on weekdays in the evening (IST). Weekend batches are also available. Each session is 1.5–2 hours long.' },
      { q: 'Is EMI or installment payment available?', a: 'Yes, we offer flexible EMI plans so the course is affordable for everyone. Contact us for detailed pricing and payment options.' },
      { q: 'Will I have a portfolio after the course?', a: 'Yes! You will complete multiple branding and design projects, including logos, brand guidelines, posters, and social media campaigns — all portfolio-ready.' },
      { q: 'Can I start freelancing after this course?', a: 'Absolutely. We cover freelancing strategies, client management, and pricing. Many of our students start earning within weeks of completing the course.' },
      { q: 'Can I attend a free demo class before enrolling?', a: 'Yes! We offer free demo classes so you can experience our teaching methodology firsthand. Just fill out the enquiry form or contact us to book one.' },
    ],
  },
  'game-development': {
    why: [
      { icon: Layers, title: 'End-to-End Game Dev', desc: 'From game design concepts to Unity development and publishing — learn the complete lifecycle of building professional games.' },
      { icon: Play, title: 'Live Project-Based Learning', desc: 'Build real games in every session. No boring theory — learn by creating 2D and 3D games with industry mentors.' },
      { icon: Briefcase, title: 'Portfolio-Ready Games', desc: 'Create 8+ complete games that you can publish, demo, and showcase to studios and employers.' },
      { icon: GraduationCap, title: 'Industry Connections', desc: 'Get access to networking events, game jams, and direct introductions to game studios and hiring managers.' },
    ],
    who: [
      { icon: GraduationCap, title: 'College Students', desc: 'Get a head start in the gaming industry with hands-on Unity and C# skills.' },
      { icon: Briefcase, title: 'Career Switchers', desc: 'Move into one of the fastest-growing entertainment industries in the world.' },
      { icon: Palette, title: 'Artists & Animators', desc: 'Bring your visual skills into interactive game worlds and experiences.' },
      { icon: Code, title: 'Programmers', desc: 'Apply your coding knowledge to the exciting world of game development.' },
      { icon: User, title: 'Indie Game Enthusiasts', desc: 'Learn to build and publish your own indie games on app stores and Steam.' },
      { icon: Zap, title: 'Content Creators', desc: 'Create interactive experiences and gamified content for your audience.' },
    ],
    testimonials: [
      { name: 'Arjun Mehta', role: 'Unity Developer at a Game Studio', text: 'Screen Shiksha\'s game dev course was a game-changer for me. The hands-on Unity projects and C# training got me industry-ready in just 10 months.', rating: 5 },
      { name: 'Pooja Saxena', role: 'Indie Game Developer', text: 'I published my first game on the Play Store during the course! The instructors helped me with everything from game mechanics to publishing.', rating: 5 },
      { name: 'Rohan Das', role: 'Game Designer', text: 'The combination of game theory, Unity development, and 3D skills gave me a unique edge. I landed my dream role at a game studio after graduating.', rating: 5 },
    ],
    tools: ['Unity', 'C#', 'Visual Studio', 'Blender Basics', 'Game Physics', 'Animation', 'Audio Design', 'Play Store', 'Steam'],
    certTitle: 'Game Development Professional Program',
    faq: [
      { q: 'Do I need coding experience to start?', a: 'No! We teach C# programming from the basics. You will learn to code while building games, making the process fun and practical.' },
      { q: 'What is the class schedule like?', a: 'Classes are held live online, typically on weekdays in the evening (IST). Weekend batches are also available. Each session is 1.5–2 hours long.' },
      { q: 'Is EMI or installment payment available?', a: 'Yes, we offer flexible EMI plans so the course is affordable for everyone. Contact us for detailed pricing and payment options.' },
      { q: 'Will I be able to publish games after the course?', a: 'Yes! We cover the complete game publishing pipeline. Several students have published games on the Google Play Store and Steam during the course.' },
      { q: 'Do I need a powerful computer?', a: 'A mid-range laptop or PC with a dedicated GPU is recommended for smooth Unity development. We will share specific hardware requirements before you start.' },
      { q: 'Can I attend a free demo class before enrolling?', a: 'Yes! We offer free demo classes so you can experience our teaching methodology firsthand. Just fill out the enquiry form or contact us to book one.' },
    ],
  },
  'digital-marketing': {
    why: [
      { icon: Layers, title: '67-Module Curriculum', desc: 'The most comprehensive digital marketing program — covering SEO, PPC, social media, analytics, AI, and 60+ more topics in one course.' },
      { icon: Play, title: 'Live Classes + Internship', desc: '120+ hours of live training plus a 6-month internship to gain real-world agency-level experience.' },
      { icon: Briefcase, title: 'Real Campaign Projects', desc: 'Run live ad campaigns on Facebook, Google & more. Build case studies with real metrics for your portfolio.' },
      { icon: GraduationCap, title: 'Executive + Management Tracks', desc: 'Choose your path — learn execution skills or master campaign strategy, budgeting, and client management.' },
    ],
    who: [
      { icon: GraduationCap, title: 'Graduates & Students', desc: 'Break into the digital marketing industry with a job-ready skill set.' },
      { icon: Briefcase, title: 'Marketing Professionals', desc: 'Upskill from traditional marketing to performance-driven digital strategies.' },
      { icon: Zap, title: 'Entrepreneurs', desc: 'Learn to market your own business without depending on agencies.' },
      { icon: Code, title: 'Product & Growth Managers', desc: 'Master acquisition channels, analytics, and growth hacking frameworks.' },
      { icon: User, title: 'Freelancers', desc: 'Offer in-demand digital marketing services and command premium rates.' },
      { icon: Palette, title: 'Content & Creative Teams', desc: 'Understand the strategy behind content distribution and paid promotion.' },
    ],
    testimonials: [
      { name: 'Neha Kapoor', role: 'Digital Marketing Manager', text: 'The 67-module curriculum is insane — I learned everything from SEO to media buying in one place. The internship gave me real agency experience and I got placed within a month!', rating: 5 },
      { name: 'Saurabh Tiwari', role: 'Freelance Performance Marketer', text: 'I was running basic social media before this course. Now I manage Google Ads and Meta Ads campaigns for 5 clients. Screen Shiksha changed my career trajectory completely.', rating: 5 },
      { name: 'Ritika Agarwal', role: 'Growth Marketing Lead', text: 'The GenAI modules and analytics training set this apart from other courses. The case studies on Star Sports and Zivame were practical and insightful.', rating: 5 },
    ],
    tools: ['Google Ads', 'Meta Ads Manager', 'Google Analytics (GA4)', 'Google Tag Manager', 'SEMrush', 'Mailchimp', 'Canva', 'ChatGPT', 'Looker Studio'],
    certTitle: 'Digital Performance Strategy & Management',
    faq: [
      { q: 'Do I need a marketing background to enroll?', a: 'No! This course starts from the basics and is designed for complete beginners. We cover everything from digital marketing fundamentals to advanced performance strategies.' },
      { q: 'What is the internship component?', a: 'After the 3-month training, you get a 6-month online internship where you work on real campaigns and projects, gaining agency-level experience and building your portfolio.' },
      { q: 'What is the class schedule like?', a: 'Classes are held live online, typically on weekdays in the evening (IST). Weekend batches are also available. Total program involves 120+ hours of learning (6-8 hrs/week).' },
      { q: 'Is EMI or installment payment available?', a: 'Yes, we offer flexible EMI plans so the course is affordable for everyone. Contact us for detailed pricing and payment options.' },
      { q: 'Will I learn to run actual ad campaigns?', a: 'Absolutely. You will run live campaigns on Facebook Ads, Google Search & Display, and more. You will also learn GA4 and Google Tag Manager for tracking.' },
      { q: 'Can I attend a free demo class before enrolling?', a: 'Yes! We offer free demo classes so you can experience our teaching methodology firsthand. Just fill out the enquiry form or contact us to book one.' },
    ],
  },
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      className={styles.faqItem}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <button className={styles.faqQuestion} onClick={() => setOpen(!open)}>
        <span>{question}</span>
        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {open && <div className={styles.faqAnswer}>{answer}</div>}
    </motion.div>
  )
}

export default function CoursePageClient() {
  const params = useParams()
  const slug = params.slug as string
  const course = courseData[slug]
  const extras = courseExtras[slug]

  if (!course) {
    return (
      <div className={styles.notFound}>
        <h1>Course Not Found</h1>
        <p>The course you&apos;re looking for doesn&apos;t exist.</p>
        <Button href="/courses/ui-ux-design">View UI/UX Course</Button>
      </div>
    )
  }

  // Course schema for SEO
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: 'Screen Shiksha',
      sameAs: 'https://screenshiksha.com',
    },
    educationalLevel: 'Beginner to Advanced',
    timeRequired: course.duration === '12 months' ? 'P12M' : 'P8M',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: course.rating,
      reviewCount: parseInt(course.students),
      bestRating: 5,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      instructor: {
        '@type': 'Organization',
        name: 'Screen Shiksha Expert Trainers',
      },
    },
  }

  return (
    <>
      <Script
        id="course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb} style={{ background: `radial-gradient(circle, ${course.color}20 0%, transparent 70%)` }} />
          <div className={styles.gridPattern} />
        </div>
        
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <motion.div 
              className={styles.heroContent}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/#courses" className={styles.backLink}>
                ← Back to Courses
              </Link>
              <span className={styles.badge} style={{ background: `${course.color}15`, color: course.color, borderColor: `${course.color}30` }}>
                Professional Course
              </span>
              <h1>{course.title}</h1>
              <p className={styles.subtitle}>{course.subtitle}</p>
              <p className={styles.description}>{course.description}</p>
              
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <Clock size={20} />
                  <span>{course.duration}</span>
                </div>
                <div className={styles.stat}>
                  <BookOpen size={20} />
                  <span>{course.projects}+ Projects</span>
                </div>
                <div className={styles.stat}>
                  <Star size={20} fill="currentColor" />
                  <span>{course.rating} Rating</span>
                </div>
                <div className={styles.stat}>
                  <Users size={20} />
                  <span>{course.students} Students</span>
                </div>
              </div>

              <div className={styles.heroCta}>
                <Button href="/contact" size="large">
                  Enroll Now <ArrowRight size={18} />
                </Button>
                <Button href="/contact" variant="outline" size="large">
                  <Play size={16} /> Book Free Demo
                </Button>
              </div>
            </motion.div>

            <motion.div 
              className={styles.heroCard}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={styles.cardHeader} style={{ background: course.color }}>
                <h3>Course Highlights</h3>
              </div>
              <div className={styles.cardBody}>
                {course.highlights.map((highlight, index) => (
                  <div key={index} className={styles.highlightItem}>
                    <CheckCircle size={18} style={{ color: course.color }} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
              <div className={styles.cardFooter}>
                <Button href="/contact" fullWidth>
                  Book Free Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className={styles.curriculum}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionTag}>Curriculum</span>
            <h2>What You&apos;ll Learn</h2>
            <p>A comprehensive curriculum designed to take you from beginner to professional</p>
          </motion.div>

          <div className={styles.curriculumGrid}>
            {course.curriculum.map((module, index) => (
              <motion.div
                key={index}
                className={styles.moduleCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className={styles.moduleNumber} style={{ background: course.color }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3>{module.title}</h3>
                <ul>
                  {module.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Careers Section */}
      <section className={styles.skillsCareers}>
        <div className={styles.container}>
          <div className={styles.skillsGrid}>
            <motion.div 
              className={styles.skillsCard}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.cardIcon}>
                <Target size={28} />
              </div>
              <h3>Skills You&apos;ll Master</h3>
              <div className={styles.skillTags}>
                {course.skills.map((skill, index) => (
                  <span key={index} className={styles.skillTag} style={{ borderColor: course.color }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className={styles.careersCard}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.cardIcon}>
                <Briefcase size={28} />
              </div>
              <h3>Career Opportunities</h3>
              <div className={styles.careerList}>
                {course.careers.map((career, index) => (
                  <div key={index} className={styles.careerItem}>
                    <Award size={16} style={{ color: course.color }} />
                    <span>{career}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why This Course */}
      {extras && (
        <>
          <section className={styles.whySection}>
            <div className={styles.container}>
              <motion.div
                className={styles.sectionHeader}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className={styles.sectionTag}>Why Choose Us</span>
                <h2>Why This Course?</h2>
                <p>Here&apos;s what makes our program stand out from the rest</p>
              </motion.div>

              <div className={styles.whyGrid}>
                {extras.why.map((item, index) => (
                  <motion.div
                    key={index}
                    className={styles.whyCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className={styles.whyIcon}>
                      <item.icon size={28} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Who Is This For */}
          <section className={styles.whoSection}>
            <div className={styles.container}>
              <motion.div
                className={styles.sectionHeader}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className={styles.sectionTag}>Ideal For</span>
                <h2>Who Is This Course For?</h2>
                <p>This program is designed for ambitious learners at any stage</p>
              </motion.div>

              <div className={styles.whoGrid}>
                {extras.who.map((item, index) => (
                  <motion.div
                    key={index}
                    className={styles.whoCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <item.icon size={24} className={styles.whoIcon} />
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className={styles.testimonials}>
            <div className={styles.container}>
              <motion.div
                className={styles.sectionHeader}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className={styles.sectionTag}>Success Stories</span>
                <h2>What Our Students Say</h2>
                <p>Hear from students who transformed their careers with us</p>
              </motion.div>

              <div className={styles.testimonialGrid}>
                {extras.testimonials.map((item, index) => (
                  <motion.div
                    key={index}
                    className={styles.testimonialCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Quote size={32} className={styles.quoteIcon} />
                    <p className={styles.testimonialText}>{item.text}</p>
                    <div className={styles.testimonialStars}>
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} size={16} fill="var(--color-accent)" color="var(--color-accent)" />
                      ))}
                    </div>
                    <div className={styles.testimonialAuthor}>
                      <div className={styles.authorAvatar}>
                        {item.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <strong>{item.name}</strong>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Tools You'll Master */}
          <section className={styles.toolsSection}>
            <div className={styles.container}>
              <motion.div
                className={styles.sectionHeader}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className={styles.sectionTag}>Industry Tools</span>
                <h2>Tools You&apos;ll Master</h2>
                <p>Get hands-on experience with the tools used by top companies worldwide</p>
              </motion.div>

              <div className={styles.toolsGrid}>
                {extras.tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    className={styles.toolCard}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <span>{tool}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Certificate */}
          <section className={styles.certificate}>
            <div className={styles.container}>
              <div className={styles.certificateGrid}>
                <motion.div
                  className={styles.certificateContent}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className={styles.sectionTag}>Certification</span>
                  <h2>Industry-Recognized Certificate</h2>
                  <p>Upon successful completion of the program, you&apos;ll receive a professional certificate that validates your skills to employers.</p>
                  <ul className={styles.certFeatures}>
                    <li><BadgeCheck size={20} /> Verifiable digital certificate</li>
                    <li><BadgeCheck size={20} /> Shareable on LinkedIn &amp; portfolio</li>
                    <li><BadgeCheck size={20} /> Recognized by hiring companies</li>
                    <li><BadgeCheck size={20} /> Covers the complete program curriculum</li>
                  </ul>
                </motion.div>
                <motion.div
                  className={styles.certificateVisual}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={styles.certCard}>
                    <div className={styles.certHeader}>
                      <Award size={40} />
                      <h3>Certificate of Completion</h3>
                    </div>
                    <p>{extras.certTitle}</p>
                    <span className={styles.certBadge}>Screen Shiksha Certified</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className={styles.faqSection}>
            <div className={styles.container}>
              <motion.div
                className={styles.sectionHeader}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className={styles.sectionTag}>FAQ</span>
                <h2>Frequently Asked Questions</h2>
                <p>Everything you need to know before enrolling</p>
              </motion.div>

              <div className={styles.faqList}>
                {extras.faq.map((item, index) => (
                  <FaqItem key={index} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <motion.div 
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Start Your {course.title} Journey?</h2>
            <p>
              Join thousands of students who have transformed their careers with Screen Shiksha. 
              Book a free demo to experience our teaching methodology.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/contact" size="large">
                Book Free Demo <ArrowRight size={20} />
              </Button>
              <Button href="/contact" variant="secondary" size="large">
                <Calendar size={18} /> Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
