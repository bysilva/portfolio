import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import khLogo from '@/images/logos/knowledgehive.png'
import miseboxLogo from '@/images/logos/misebox.ico'
import pideisaLogo from '@/images/logos/pideisa.png'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import poscoLogo from '@/images/logos/posco.png'
import wmaLogo from '@/images/logos/wmalogo.png'

const projects = [
  {
    name: 'Misebox',
    description:
      'Web application for creating digital and paper menus, where I worked on front-end development using React, allowing multiple users with different roles and online menu viewing.',
    link: { href: 'https://app.misebox.io/', label: 'misebox.com' },
    logo: miseboxLogo,
    public: true,
  },
  {
    name: 'World Martial Arts',
    description:
      'Marketplace platform for martial arts schools, where students can sign up, explore schools, and make purchases directly.',
    link: { href: 'https://www.wmaonline.com/', label: 'wmaonline.com' },
    logo: wmaLogo,
    public: true,
  },
  {
    name: 'Knowledge Hive',
    description:
      'Web application where recruiters post projects, and freelancers can search and apply to work on them. Implemented the Stripe API for subscriptions and payments.',
    link: { href: 'https://knowledgehive.co/', label: 'knowledgehive.co' },
    logo: khLogo,
    public: true,
  },
  {
    name: 'Pideisa',
    description:
      'Web application for instrument calibration management, including complex algorithms for thermocouple calibration using JavaScript and DRF.',
    link: { href: 'https://www.pideisa.com/', label: 'pideisa.com' },
    logo: pideisaLogo,
    public: true,
  },
  {
    name: 'Posco',
    description:
      'Internal rewards program for a company, developed using Python and Django for the back end and React Native for the application. Built from scratch and adapted to client changes.',
    link: {
      href: 'https://www.poscomexico.com.mx/mx/main/getMain.do',
      label: 'poscomexico.com',
    },
    logo: poscoLogo,
    public: true,
  },
  {
    name: 'Zplendid',
    description:
      'Back-end development for a medical application to schedule bariatric surgeries, using Python and Django.',
    link: { href: '#', label: 'zplendid.com' },
    logo: logoAnimaginary,
    public: false,
  },
  {
    name: 'Doctor Pro',
    description:
      'Application for managing medical services, where I improved deployment to the Play Store and App Store and worked on unit testing using TestFlight and React Native development.',
    link: { href: '#', label: 'doctorpro.com' },
    logo: logoAnimaginary,
    public: false,
  },
  {
    name: 'Digitab',
    description:
      'Web application for evaluating business opportunities, developed in C# and Windows Forms. Created a virtual printer and a React Native app for receipt visualization and digitization.',
    link: { href: 'https://www.ditabapp.com/', label: 'digitabapp.com' },
    logo: logoAnimaginary,
    public: true,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}
export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects I have worked on to solve problems and create impact.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects I have worked on to create solutions and impact."
      intro="Over the years, I have been involved in several projects that I am proud of. These projects span various technologies and industries, focusing on delivering real-world solutions. While I have worked on many more, here are some of the most relevant. Some of these are public, so feel free to explore."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              {project.public && (
                <>
                  <LinkIcon className="h-6 w-6 flex-none" />

                  <span className="ml-2">{project.link.label}</span>
                </>
              )}
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
