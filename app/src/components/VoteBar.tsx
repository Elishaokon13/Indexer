import { cn } from '@/lib/utils'

type VoteBarProps = {
  forValue: number
  againstValue: number
  abstainValue: number
  className?: string
}

export function VoteBar({
  forValue,
  againstValue,
  abstainValue,
  className,
}: VoteBarProps) {
  const totalValue = forValue + againstValue + abstainValue
  const forPercentage = totalValue !== 0 ? (forValue / totalValue) * 100 : 0
  const againstPercentage =
    totalValue !== 0 ? (againstValue / totalValue) * 100 : 0
  const abstainPercentage =
    totalValue !== 0 ? (abstainValue / totalValue) * 100 : 0

  return (
    <div className={cn('overflow-hidden rounded-full bg-secondary', className)}>
      <div className="flex h-6 w-full transition-all duration-500">
        <div
          className="h-full bg-emerald-500 transition-all duration-500"
          style={{ width: `${forPercentage}%` }}
        />
        <div
          className="h-full bg-destructive transition-all duration-500"
          style={{ width: `${againstPercentage}%` }}
        />
        <div
          className="h-full bg-zinc-400 dark:bg-zinc-600 transition-all duration-500"
          style={{ width: `${abstainPercentage}%` }}
        />
      </div>
      
      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
        <div className="flex gap-5">
          <span className="flex items-center">
            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
            For ({forPercentage.toFixed(1)}%)
          </span>
          <span className="flex items-center">
            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-destructive"></span>
            Against ({againstPercentage.toFixed(1)}%)
          </span>
          <span className="flex items-center">
            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-zinc-400 dark:bg-zinc-600"></span>
            Abstain ({abstainPercentage.toFixed(1)}%)
          </span>
        </div>
      </div>
    </div>
  )
}
