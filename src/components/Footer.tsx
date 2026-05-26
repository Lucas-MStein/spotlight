'use client'

import { useState } from 'react'

import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

function LegalModal({
  title,
  children,
  onClose,
}: {
  title: string
  children: React.ReactNode
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
      <button
        type="button"
        aria-label="Dialog schließen"
        className="absolute inset-0 bg-zinc-950/50 backdrop-blur-sm dark:bg-black/70"
        onClick={onClose}
      />
      <div className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl ring-1 ring-zinc-900/10 dark:bg-zinc-900 dark:ring-white/10 sm:p-8">
        <button
          type="button"
          aria-label="Dialog schließen"
          className="absolute top-6 right-6 text-zinc-400 transition hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-200"
          onClick={onClose}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
        <div className="pr-6 text-zinc-700 dark:text-zinc-300">{children}</div>
      </div>
    </div>
  )
}

export function Footer() {
  let [isImprintOpen, setIsImprintOpen] = useState(false)
  let [isPrivacyOpen, setIsPrivacyOpen] = useState(false)

  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center gap-8 text-center">
              <div className="order-2">
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  &copy; {new Date().getFullYear()} Lucas-Maurice Stein. Alle
                  Rechte vorbehalten.
                </p>
              </div>

              <div className="order-1 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <button
                  type="button"
                  className="transition hover:text-teal-500 dark:hover:text-teal-400"
                  onClick={() => setIsImprintOpen(true)}
                >
                  Impressum
                </button>
                <button
                  type="button"
                  className="transition hover:text-teal-500 dark:hover:text-teal-400"
                  onClick={() => setIsPrivacyOpen(true)}
                >
                  Datenschutz
                </button>
              </div>

              <div className="order-3 w-full border-t border-zinc-100 pt-6 text-center text-xs leading-6 text-zinc-400 dark:border-zinc-700/40 dark:text-zinc-500">
                <p>
                  Einzelunternehmer (Nebengewerbe) · Sitz: Calw, Deutschland
                </p>
                <p>
                  Kleinunternehmer gem. § 19 UStG (keine Ausweisung der
                  Umsatzsteuer)
                </p>
              </div>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>

      {isImprintOpen && (
        <LegalModal title="Impressum" onClose={() => setIsImprintOpen(false)}>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            Impressum
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 font-medium text-zinc-700 dark:text-zinc-300 sm:text-lg">
            <p>
              <strong className="font-bold text-zinc-900 dark:text-zinc-100">
                Lucas-Maurice Stein
              </strong>
              <br />
              Herrengarten 39
              <br />
              75365 Calw
              <br />
              Deutschland
            </p>
            <p>
              E-Mail:{' '}
              <a
                href="mailto:lucasmauricestein@gmail.com"
                className="underline transition hover:text-teal-500 dark:hover:text-teal-400"
              >
                lucasmauricestein@gmail.com
              </a>
              <br />
              Telefon: +49 176 47736812
            </p>
          </div>
        </LegalModal>
      )}

      {isPrivacyOpen && (
        <LegalModal
          title="Datenschutzerklärung"
          onClose={() => setIsPrivacyOpen(false)}
        >
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            Datenschutzerklärung
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 font-medium text-zinc-700 dark:text-zinc-300 sm:text-lg">
            <p className="text-zinc-500 dark:text-zinc-400">
              Verantwortlicher im Sinne der DSGVO:
            </p>
            <p>
              <strong className="font-bold text-zinc-900 dark:text-zinc-100">
                Lucas-Maurice Stein
              </strong>
              <br />
              E-Mail:{' '}
              <a
                href="mailto:lucasmauricestein@gmail.com"
                className="underline transition hover:text-teal-500 dark:hover:text-teal-400"
              >
                lucasmauricestein@gmail.com
              </a>
            </p>
            <p>
              Diese Website dient ausschließlich der Information. Es werden keine
              personenbezogenen Daten aktiv erhoben.
            </p>
            <p>
              Beim Aufruf der Website können durch den Hosting-Anbieter (Vercel)
              technische Zugriffsdaten verarbeitet werden, um den sicheren Betrieb
              der Website zu gewährleisten.
            </p>
            <p className="text-zinc-500 dark:text-zinc-400">
              Es werden keine Cookies zu Analyse- oder Marketingzwecken gesetzt.
            </p>
          </div>
        </LegalModal>
      )}
    </footer>
  )
}
