import { EnhancedProposalWithVotes } from 'indexer/types'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type Props = {
  proposal: EnhancedProposalWithVotes
  className?: string
}

export function ProposalStatus({ proposal, className }: Props) {
  const now = Date.now()
  const startTime = Number(proposal.startTimestamp) * 1000
  const endTime = Number(proposal.endTimestamp) * 1000

  let status = 'Active'
  let variant:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'success' = 'default'

  if (now < startTime) {
    status = 'Pending'
    variant = 'secondary'
  } else if (now > endTime) {
    if (proposal.canceledAtTimestamp) {
      status = 'Canceled'
      variant = 'destructive'
    } else if (proposal.executedAtTimestamp) {
      status = 'Executed'
      variant = 'success'
    } else if (proposal.queuedAtTimestamp) {
      status = 'Queued'
      variant = 'secondary'
    } else {
      status = 'Closed'
      variant = 'outline'
    }
  }

  return (
    <Badge
      variant={variant}
      className={cn('shadow-sm transition-all duration-200', className)}
    >
      {status}
    </Badge>
  )
}
