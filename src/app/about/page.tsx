import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  InstagramIcon,
  YouTubeIcon,
  TwitchIcon,
  TikTokIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Über mich',
  description:
    'Ich bin Lucas-Maurice Stein, Webentwickler aus Calw. Ich entwickle digitale Lösungen mit Fokus auf Ästhetik, Performance und Identität.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Ich bin Lucas-Maurice Stein. Ich lebe in Calw, wo ich digitale
            Lösungen entwickle.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Meine Begeisterung für Design begann nicht in einer Agentur oder
              im Hörsaal, sondern nachts vor dem Bildschirm — mit leeren
              HTML-Dateien, viel zu vielen Ideen und dem Anspruch, etwas Eigenes
              zu erschaffen. Schon früh haben mich Dinge fasziniert, die
              Charakter haben: starke Marken, ikonische Albumcover, NBA-Ästhetik
              und Websites, die sich nicht wie Templates anfühlen.
            </p>
            <p>
              Basketball hat meinen Blick auf Kreativität wahrscheinlich stärker
              geprägt, als man denkt. Das Spiel lebt von Rhythmus, Timing und
              Selbstbewusstsein — genau wie gutes Design. Manchmal geht es
              darum, simpel zu bleiben. Manchmal darum, einen Schritt zu machen,
              den niemand erwartet.
            </p>
            <p>
              Neben dem Webdesign ist Musik bis heute ein großer Teil meines
              Lebens. Viele Ideen entstehen zwischen Studio-Sessions,
              Songkonzepten und langen Nächten mit Kopfhörern auf. Dieser
              Einfluss zieht sich durch meine Arbeit: dunkle Ästhetik, klare
              Typografie, cineastische Stimmung und moderne Interfaces mit
              Wiedererkennungswert.
            </p>
            <p>
              Ich entwickle Websites für Menschen und Brands, die nicht einfach
              nur „online sein“ wollen, sondern einen digitalen Auftritt suchen,
              der sich echt anfühlt.
            </p>
            <p>
              Heute arbeite ich unter webdesignbystein.de an modernen
              Webprojekten mit Fokus auf Ästhetik, Performance und Identität —
              inspiriert von Kultur, Sport, Musik und der Idee, dass gutes
              Design genauso hängen bleiben sollte wie ein Game-Winner in den
              letzten Sekunden.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.youtube.com/@balloutlucas"
              icon={YouTubeIcon}
              className="mt-4"
            >
              Auf YouTube ansehen
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/swishfourone/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Auf Instagram folgen
            </SocialLink>
            <SocialLink
              href="https://www.twitch.tv/vleasymoney"
              icon={TwitchIcon}
              className="mt-4"
            >
              Auf Twitch ansehen
            </SocialLink>
            <SocialLink
              href="https://www.tiktok.com/@swishfourone"
              icon={TikTokIcon}
              className="mt-4"
            >
              Auf TikTok folgen
            </SocialLink>
            <SocialLink
              href="mailto:lucasmauricestein@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              lucasmauricestein@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
