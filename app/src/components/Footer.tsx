import Link from 'next/link'

import { Subtle } from './ui/typography'

const links = [
  { href: 'https://ens.domains', label: 'ENS' },
  { href: 'https://docs/ens.domains/dao', label: 'Governance Docs' },
  { href: 'https://x.com/ENS_DAO', label: 'Twitter' },
  { href: 'https://github.com/gskril/ens-governor-app', label: 'GitHub' },
]

export function Footer() {
  return (
    <footer className="mt-10 border-t py-8">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <img
            src="/img/logo.svg"
            alt="ENS Logo"
            className="h-6 w-6"
            height={24}
            width={24}
          />
          <span className="font-medium">ENS DAO</span>
        </div>

        <Subtle className="text-center md:text-right">
          This is an{' '}
          <Link
            href="https://github.com/ensdomains/governance"
            className="font-medium text-primary-brand hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            open source
          </Link>{' '}
          project, built with{' '}
          <span className="relative inline-block">
            <span className="absolute -inset-1 -z-10 rounded-full bg-red-100 opacity-40 blur-sm dark:bg-red-900/30"></span>
            ❤️
          </span>
        </Subtle>
      </div>
    </footer>
  )
}
