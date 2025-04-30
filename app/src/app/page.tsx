import Link from 'next/link'

import { Footer } from '@/components/Footer'
import { ProposalStatus } from '@/components/ProposalStatus'
import { DiscourseIcon, XIcon } from '@/components/icons'
import { IconWrapper } from '@/components/icons/IconWrapper'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getProposals } from '@/hooks/useProposals'
import {
  bigintToFormattedString,
  formatTimestamp,
  getPercentageOfTotalVotes,
  getTotalVotes,
} from '@/lib/utils'

// Invalidate the cache when a request comes in, at most once every 10 seconds.
export const revalidate = 10

export default async function Home() {
  const proposals = await getProposals()

  return (
    <div className="container">
      <div className="mb-10 mt-8">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:gap-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <img
              src="/img/logo-filled.svg"
              alt="ENS Logo"
              width={160}
              height={160}
              className="w-28 -rotate-3 rounded-3xl border-4 border-white shadow-lg hover-lift dark:border-zinc-800 md:w-40"
            />

            <div className="space-y-3">
              <h1 className="space-y-2">
                <span className="line block text-2xl font-semibold leading-none text-primary-brand">
                  ENS
                </span>{' '}
                <span className="block bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-3xl font-bold leading-none text-transparent lg:text-5xl">
                  Executable Proposals
                </span>
              </h1>

              <h2 className="text-base font-medium text-zinc-500 dark:text-zinc-400">
                View and vote on executable proposals from the ENS Protocol and
                DAO.
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <IconWrapper href="https://x.com/ENS_DAO" icon={<XIcon />} />
            <IconWrapper
              href="https://discuss.ens.domains"
              icon={<DiscourseIcon />}
              text="Forum"
            />
          </div>
        </div>
      </div>

      <div className="rounded-xl border backdrop-blur-sm bg-card/95 subtle-shadow">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-36">Created</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="hidden w-36 lg:table-cell">
                Status
              </TableHead>
              <TableHead className="hidden w-24 text-right md:table-cell">
                Votes
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {proposals?.map((proposal) => (
              <TableRow key={proposal.id} className="group transition-colors">
                <TableCell className="space-y-0.5">
                  <ProposalStatus
                    proposal={proposal}
                    className="table-cell lg:hidden"
                  />

                  <span className="block">
                    {formatTimestamp(proposal.createdAtTimestamp)}
                  </span>
                </TableCell>
                {/* Not sure why max-w-0 is needed here, but it seems to work fine in all browsers */}
                <TableCell className="md:max-w-0 md:truncate">
                  <Link
                    href={`/proposal/${proposal.id}`}
                    className="font-medium transition-colors hover:underline group-hover:text-primary-brand"
                  >
                    {proposal.title}
                  </Link>
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  <ProposalStatus proposal={proposal} />
                </TableCell>
                <TableCell className="hidden space-y-1 text-right md:table-cell">
                  <span>
                    {bigintToFormattedString(getTotalVotes(proposal))}
                  </span>

                  <div className="flex items-center gap-1 text-xs font-semibold leading-none">
                    <span className="text-emerald-600 dark:text-emerald-500">
                      {getPercentageOfTotalVotes(proposal.forVotes, proposal)}%
                    </span>
                    <span className="text-zinc-300 dark:text-zinc-600">|</span>
                    <span className="text-destructive">
                      {getPercentageOfTotalVotes(
                        proposal.againstVotes,
                        proposal
                      )}
                      %
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Footer />
    </div>
  )
}
