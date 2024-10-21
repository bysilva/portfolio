import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Edgar Eduardo',
    default:
      'Edgar Eduardo - Software Engineer, Cloud Enthusiast, and Tech Passionate',
  },
  description:
    'I’m Edgar, a software engineer based in Monterrey. With four years of professional experience, I’ve worked with technologies like .NET, C#, Python, Django, React, and TypeScript. I’m passionate about cloud technologies and have a strong interest in AWS. My goal is to build innovative solutions while maintaining a healthy balance between professional growth and personal well-being.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
