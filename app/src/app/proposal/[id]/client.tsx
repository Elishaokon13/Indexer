'use client'

import { EnhancedProposalWithVotes } from 'indexer/types'
import { ArrowDown, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useEnsName } from 'wagmi'
import { motion } from 'framer-motion'

import { ConnectButton } from '@/components/ConnectButton'
import { Footer } from '@/components/Footer'
import { ProposalActionButton } from '@/components/ProposalActionButton'
import { ProposalStatus } from '@/components/ProposalStatus'
import { ProposalVote } from '@/components/ProposalVote'
import { VoteBar } from '@/components/VoteBar'
import { VoteButton } from '@/components/VoteButton'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Typography } from '@/components/ui/typography'
import {
  formatTimestamp,
  getQuorumProgress,
  nameWithFallback,
  parseVotes,
} from '@/lib/utils'

type Props = {
  proposal: EnhancedProposalWithVotes
}

// Add Motion wrappers
const MotionDiv = motion.div
const MotionCard = motion(Card)

export function ProposalPageClient({ proposal }: Props) {
  const { data: proposerEnsName } = useEnsName({ address: proposal.proposer })

  return (
    <MotionDiv
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="container"
    >
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex w-fit items-center gap-2 font-semibold text-zinc-500"
        >
          <ArrowLeft className="size-5" />
          <span className="hidden sm:block">All Proposals</span>
          <span className="block sm:hidden">Home</span>
        </Link>

        <ConnectButton />
      </div>

      <div className="grid gap-6 py-4 lg:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <ProposalStatus proposal={proposal} />
            <Typography className="text-sm text-zinc-500">
              Ends{' '}
              {formatTimestamp(proposal.endTimestamp, { includeTime: true })}
            </Typography>
          </div>

          <Typography as="h1" gradient className="mb-2 text-3xl lg:text-5xl">
            {proposal.title}
          </Typography>

          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <Typography className="flex items-center text-sm">
              <span className="hidden sm:block">Proposed by</span>
              <span className="block sm:hidden">By</span>
              <div className="mx-1.5 flex items-center gap-1">
                {proposerEnsName && (
                  <img
                    src={`https://ens-api.gregskril.com/avatar/${proposerEnsName}?width=48`}
                    alt={proposerEnsName}
                    className="size-6 rounded-full object-cover"
                  />
                )}
                <a
                  href={`https://etherscan.io/address/${proposal.proposer}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold hover:underline"
                >
                  {nameWithFallback(proposerEnsName, proposal.proposer)}
                </a>
              </div>
              <span className="hidden sm:block">
                on {formatTimestamp(proposal.createdAtTimestamp)}
              </span>
            </Typography>

            {proposal.status === 'active' && <VoteButton proposal={proposal} />}

            {proposal.status === 'succeeded' && (
              <ProposalActionButton proposal={proposal} action="queue" />
            )}

            {proposal.status === 'queued' && (
              <ProposalActionButton proposal={proposal} action="execute" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile votes */}
      <MotionCard
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="md:hidden hover-lift"
      >
        <VotingCardHeader proposal={proposal} />
      </MotionCard>

      <a
        href="#votes"
        className={buttonVariants({
          variant: 'default',
          size: 'lg',
          className: 'w-full lg:hidden',
        })}
      >
        <ArrowDown />
        Skip to Votes
      </a>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        {/* Proposal */}
        <MotionCard
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="h-fit overflow-x-auto rounded-xl hover-lift subtle-shadow"
        >
          <Tabs defaultValue="body" className="md:p-3">
            <TabsList className="h-auto w-full justify-start rounded-lg p-2">
              <TabsTrigger className="w-full" value="body">
                Description
              </TabsTrigger>
              <TabsTrigger className="w-full" value="calldata">
                <span className="hidden lg:block">Executable Code</span>
                <span className="block lg:hidden">Code</span>
              </TabsTrigger>
            </TabsList>

            <CardContent className="px-3 pb-4 pt-2">
              {/* Proposal body */}
              <TabsContent value="body">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <Typography as="h1" className="mb-6 lg:text-4xl">
                        {children}
                      </Typography>
                    ),
                    h2: ({ children }) => (
                      <Typography as="h2" className="mb-2">
                        {children}
                      </Typography>
                    ),
                    h3: ({ children }) => (
                      <Typography as="h3">{children}</Typography>
                    ),
                    h4: ({ children }) => (
                      <Typography as="h4">{children}</Typography>
                    ),
                    h5: ({ children }) => (
                      <Typography as="h5">{children}</Typography>
                    ),
                    h6: ({ children }) => (
                      <Typography as="h6">{children}</Typography>
                    ),
                    p: ({ children }) => (
                      <Typography as="p" className="break-words">
                        {children}
                      </Typography>
                    ),
                    a: ({ children, href }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary-brand underline"
                      >
                        {children}
                      </a>
                    ),
                    ul: ({ children }) => (
                      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
                        {children}
                      </ol>
                    ),
                    table: ({ children }) => (
                      <div className="my-6 rounded border">
                        <Table>{children}</Table>
                      </div>
                    ),
                    li: ({ children }) => (
                      <li className="break-words">{children}</li>
                    ),
                    thead: ({ children }) => (
                      <TableHeader>{children}</TableHeader>
                    ),
                    tbody: ({ children }) => <TableBody>{children}</TableBody>,
                    tfoot: ({ children }) => (
                      <TableFooter>{children}</TableFooter>
                    ),
                    tr: ({ children }) => <TableRow>{children}</TableRow>,
                    th: ({ children }) => <TableHead>{children}</TableHead>,
                    td: ({ children }) => <TableCell>{children}</TableCell>,
                    caption: ({ children }) => (
                      <TableCaption>{children}</TableCaption>
                    ),
                    hr: () => <hr className="my-6" />,
                    pre: ({ children }) => (
                      <pre className="my-6 max-w-full overflow-x-auto rounded-md bg-muted p-4">
                        {children}
                      </pre>
                    ),
                  }}
                  remarkPlugins={[remarkGfm]}
                >
                  {proposal.description}
                </ReactMarkdown>
              </TabsContent>

              {/* Executable code */}
              <TabsContent value="calldata">
                {proposal.targets.map((target, index) => (
                  <div key={index} className="my-6 text-sm">
                    <pre className="max-w-full whitespace-pre-wrap break-all rounded-md bg-muted p-4">
                      <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-6">
                        <div>target:</div>
                        <div>{target}</div>

                        <div>calldata:</div>
                        <div>{proposal.calldatas[index]}</div>

                        <div>value:</div>
                        <div>{proposal.values[index]}</div>

                        {proposal.signatures[index] && (
                          <>
                            <div>signature:</div>
                            <div>{proposal.signatures[index]}</div>
                          </>
                        )}
                      </div>
                    </pre>

                    <div className="mt-2 flex justify-end gap-2">
                      <a
                        href={`https://etherscan.io/address/${target}`}
                        target="_blank"
                        className={buttonVariants({
                          size: 'sm',
                        })}
                      >
                        View Contract
                      </a>

                      <a
                        href={`https://calldata.swiss-knife.xyz/decoder?calldata=${proposal.calldatas[index]}&chainId=1&address=${target}`}
                        target="_blank"
                        className={buttonVariants({
                          size: 'sm',
                        })}
                      >
                        Decode Calldata
                      </a>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </CardContent>
          </Tabs>
        </MotionCard>

        {/* Votes */}
        <MotionCard
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="sticky top-6 hover-lift subtle-shadow rounded-xl lg:h-[calc(100svh-3rem)] overflow-y-auto"
          id="votes"
        >
          <VotingCardHeader proposal={proposal} />

          <CardContent className="space-y-4">
            {proposal.votes.map((vote) => {
              return <ProposalVote key={vote.id} vote={vote} />
            })}
          </CardContent>
        </MotionCard>
      </div>

      <Footer />
    </MotionDiv>
  )
}

function VotingCardHeader({
  proposal,
}: {
  proposal: EnhancedProposalWithVotes
}) {
  return (
    <CardHeader className="space-y-4">
      <CardTitle className="mb-4">Votes</CardTitle>

      <VoteBar 
        forValue={Number(proposal.forVotes)}
        againstValue={Number(proposal.againstVotes)}
        abstainValue={Number(proposal.abstainVotes)}
      />

      {/* Quorum bar */}
      <div className="mt-4">
        <div className="mb-1 flex justify-between text-sm">
          <span className="font-medium">Quorum Progress</span>
          <span>{getQuorumProgress(proposal)}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full bg-primary-brand/70 transition-all duration-500"
            style={{
              width: `${getQuorumProgress(proposal)}%`,
            }}
          />
        </div>
      </div>
    </CardHeader>
  )
}
