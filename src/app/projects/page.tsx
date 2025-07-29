'use client'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { useTranslation } from '@/context/TranslationContext'
import { Link2 } from 'lucide-react' // Importa el icono de lucide-react

import logoAnimaginary from '@/images/logos/animaginary.svg'
import khLogo from '@/images/logos/knowledgehive.png'
import miseboxLogo from '@/images/logos/misebox.ico'
import pideisaLogo from '@/images/logos/pideisa.png'
import poscoLogo from '@/images/logos/posco.png'
import wmaLogo from '@/images/logos/wmalogo.png'
import sicaLogo from '@/images/logos/sica.png'
import janusLogo from '@/images/logos/janus.jpeg'
import terniumLogo from '@/images/logos/ternium.png'

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <Link2 {...props} />
}

export default function Projects() {
  const { t } = useTranslation()

  // Email al que se enviará el mailto
  const contactEmail = 'eepsmr48@gmail.com'

  const projects = [
    {
      name: 'Misebox',
      description: t('miseBoxDescription'),
      link: { href: 'https://app.misebox.io/', label: 'misebox.com' },
      logo: miseboxLogo,
      public: true,
    },
    {
      name: 'World Martial Arts',
      description: t('worldMartialArtsDescription'),
      link: { href: 'https://www.wmaonline.com/', label: 'wmaonline.com' },
      logo: wmaLogo,
      public: true,
    },
    {
      name: 'Knowledge Hive',
      description: t('knowledgeHiveDescription'),
      link: { href: 'https://knowledgehive.co/', label: 'knowledgehive.co' },
      logo: khLogo,
      public: true,
    },
    {
      name: 'Pideisa',
      description: t('pideisaDescription'),
      link: { href: 'https://www.pideisa.com/', label: 'pideisa.com' },
      logo: pideisaLogo,
      public: true,
    },
    {
      name: 'Posco',
      description: t('poscoDescription'),
      link: {
        href: 'https://www.poscomexico.com.mx/mx/main/getMain.do',
        label: 'poscomexico.com',
      },
      logo: poscoLogo,
      public: true,
    },
    {
      name: 'Sica',
      description: t('posSystemDescription'),
      link: { href: '', label: '' },
      logo: sicaLogo,
      public: false,
    },
    {
      name: 'Zplendid',
      description: t('zplendidDescription'),
      link: { href: '#', label: 'zplendid.com' },
      logo: logoAnimaginary,
      public: false,
    },
    {
      name: 'Doctor Pro',
      description: t('doctorProDescription'),
      link: { href: '#', label: 'doctorpro.com' },
      logo: logoAnimaginary,
      public: false,
    },
    {
      name: 'Digitab',
      description: t('digitabDescription'),
      link: { href: 'https://www.ditabapp.com/', label: 'digitabapp.com' },
      logo: logoAnimaginary,
      public: true,
    },
    // Proyectos "bloqueados"
    {
      name: '*****s',
      description: '••••••••••••••••••••••••••••••••••••••••••••••••••••',
      link: { href: `mailto:${contactEmail}`, label: 'Locked — Contact Me' },
      logo: logoAnimaginary,
      public: false,
      locked: true,
    },
    {
      name: '*******',
      description: '••••••••••••••••••••••••••••••••••••••••••••••••••••',
      link: { href: `mailto:${contactEmail}`, label: 'Locked — Contact Me' },
      logo: logoAnimaginary,
      public: false,
      locked: true,
    },
  ]

  return (
    <SimpleLayout title={t('projectsTitle')} intro={t('projectsIntroduction')}>
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
            <h2
              className={`mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100 ${
                project.locked ? 'cursor-pointer select-none blur-sm' : ''
              }`}
              onClick={() => {
                if (project.locked) {
                  window.location.href = project.link.href
                }
              }}
              title={project.locked ? 'Contact me to unlock this project' : ''}
            >
              <Card.Link
                href={project.locked ? '#' : project.link.href}
                onClick={(e) => {
                  if (project.locked) e.preventDefault()
                }}
              >
                {project.name}
              </Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              {project.public && (
                <>
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{project.link.label}</span>
                </>
              )}
              {!project.public && !project.locked && (
                <span className="ml-2 italic text-zinc-500">
                  Private project
                </span>
              )}
              {project.locked && (
                <span className="ml-2 cursor-pointer font-semibold text-teal-500">
                  Contact me
                </span>
              )}
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
