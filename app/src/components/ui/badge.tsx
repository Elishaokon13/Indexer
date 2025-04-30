import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary-brand text-white hover:bg-primary-brand/90',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive/15 text-destructive hover:bg-destructive/20',
        outline: 'text-foreground border-border hover:bg-secondary/50',
        success:
          'border-transparent bg-emerald-500/15 text-emerald-600 dark:text-emerald-500 hover:bg-emerald-500/20',
        info:
          'border-transparent bg-blue-500/15 text-blue-600 dark:text-blue-500 hover:bg-blue-500/20',
        warning:
          'border-transparent bg-amber-500/15 text-amber-600 dark:text-amber-500 hover:bg-amber-500/20',
      },
      size: {
        default: 'h-6 px-2.5 py-0.5 text-xs',
        sm: 'h-5 px-2 py-0 text-xs',
        lg: 'h-7 px-3 py-0 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
