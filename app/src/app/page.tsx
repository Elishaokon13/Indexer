import Link from 'next/link'
import { getProposals } from '@/hooks/useProposals'
import HomeClient from './HomeClient'

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
import {
  bigintToFormattedString,
  formatTimestamp,
  getPercentageOfTotalVotes,
  getTotalVotes,
} from '@/lib/utils'
import { EnhancedProposalWithVotes } from 'indexer/types'

// Invalidate the cache when a request comes in, at most once every 10 seconds.
export const revalidate = 10

export default async function Home() {
  const proposals = await getProposals()
  // Render a client-only component for animations and interactivity
  return <HomeClient proposals={proposals as EnhancedProposalWithVotes[]} />
}
