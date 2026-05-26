import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

const services = [
  {
    title: 'Webentwicklung (Next.js & Tailwind)',
    description:
      'Moderne, performante Websites und Web-Apps mit Fokus auf Code-Qualität, Barrierefreiheit und Developer Experience.',
    items: [
      'SSR/ISR, API Routes und Routing',
      'Saubere Komponenten und State-Management',
      'Responsive Design und Dark Mode',
    ],
  },
  {
    title: 'UI/UX & Implementierung',
    description:
      'Vom Wireframe zum fertigen Interface – pixelgenau, nutzerfreundlich und wartbar umgesetzt.',
    items: [
      'Design-Systeme und Komponentenbibliotheken',
      'Interaktionen und Animationen mit Framer Motion',
      'Saubere Typografie und konsistente Layouts',
    ],
  },
  {
    title: 'Performance & Qualität',
    description:
      'Ladezeiten senken, Core Web Vitals verbessern und technische Schwachstellen gezielt beheben.',
    items: [
      'Lighthouse- und PageSpeed-Audits',
      'Code-Splitting, Caching und Optimierung',
      'Monitoring, Error Tracking und Bugfixing',
    ],
  },
  {
    title: 'SEO & Sichtbarkeit',
    description:
      'Technische SEO, Metadaten, Open Graph und Sitemaps – damit Inhalte sauber gefunden und dargestellt werden.',
    items: [
      'Meta-Tags, Open Graph und strukturierte Daten',
      'Saubere URL-Struktur und Redirects',
      'Indexierung, Robots und Sitemap',
    ],
  },
  {
    title: 'Wartung & Weiterentwicklung',
    description:
      'Regelmäßige Updates, Security-Patches und neue Features nach Bedarf – pragmatisch und transparent.',
    items: [
      'Abhängigkeits-Updates und Security-Patches',
      'Refactoring und Tests',
      'Roadmap, Iteration und laufende Betreuung',
    ],
  },
  {
    title: 'Launch & Deployment',
    description:
      'Vercel- und Netlify-Setups, Domains, Preview-Workflows und CI/CD für einen sauberen Go-Live.',
    items: [
      'Automatisches Deployment',
      'Preview-Environments',
      'Domain, SSL und DNS-Setup',
    ],
  },
]

function ServicesSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="grid gap-10 sm:grid-cols-2">{children}</div>
    </Section>
  )
}

function Service({
  title,
  description,
  items,
}: {
  title: string
  description: string
  items: string[]
}) {
  return (
    <Card as="article">
      <Card.Title as="h3">{title}</Card.Title>
      <Card.Description>{description}</Card.Description>
      <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-500 dark:bg-teal-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Leistungen',
  description:
    'Webentwicklung, UI/UX, Performance, SEO, Wartung und Deployment für moderne Websites und Web-Apps.',
}

export default function Services() {
  return (
    <SimpleLayout
      title="Leistungen, die Ihr Webprojekt voranbringen."
      intro="Von der Idee bis zum Go-Live: Ich plane, baue und betreue Websites und Web-Apps, die schnell, zugänglich und gut wartbar sind. Transparent, pragmatisch und mit Liebe zum Detail."
    >
      <div className="space-y-20">
        <ServicesSection title="Was ich anbiete">
          {services.map((service) => (
            <Service key={service.title} {...service} />
          ))}
        </ServicesSection>
      </div>
    </SimpleLayout>
  )
}
