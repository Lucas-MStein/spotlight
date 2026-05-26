import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Tools',
  description:
    'Eine Übersicht über meine aktuelle Hardware, Software und Tools, die meinen Workflow unterstützen.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Tools, die ich täglich benutze."
      intro="Eine Übersicht über meine aktuelle Hardware, Software und Tools, die meinen Workflow unterstützen."
    >
      <div className="space-y-20">
        <ToolsSection title="Hardware">
          <Tool title="MacBook Pro 13” M2 (2022)">
            Mein Hauptarbeitsgerät – schnell, leise und zuverlässig.
          </Tool>
          <Tool title="LG 27” 4K Monitor">
            Viel Platz für Code und Design gleichzeitig.
          </Tool>
          <Tool title="Keychron K2">
            Mechanische Tastatur mit angenehmem Tippgefühl.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Software">
          <Tool title="PhpStorm">
            Mein Haupteditor für Webentwicklung.
          </Tool>
          <Tool title="Figma">UI/UX Design und Prototyping.</Tool>
          <Tool title="Raycast">
            Schneller App-Launcher und Workflow-Tool.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Produktivität">
          <Tool title="Notion">Projektorganisation und Wissensdatenbank.</Tool>
          <Tool title="Todoist">Aufgabenverwaltung für den Alltag.</Tool>
          <Tool title="Slack">Teamkommunikation.</Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
