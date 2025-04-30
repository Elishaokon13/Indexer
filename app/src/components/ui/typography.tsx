import * as React from 'react'

import { cn } from '@/lib/utils'

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
  gradient?: boolean
}

const H1 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, as: Comp = 'h1', gradient = false, ...props }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn(
          'scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl',
          gradient && 'bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent',
          className
        )}
        {...props}
      />
    )
  }
)
H1.displayName = 'H1'

const H2 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, as: Comp = 'h2', gradient = false, ...props }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn(
          'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0',
          gradient && 'bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent',
          className
        )}
        {...props}
      />
    )
  }
)
H2.displayName = 'H2'

const H3 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, as: Comp = 'h3', gradient = false, ...props }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn(
          'scroll-m-20 text-2xl font-medium tracking-tight',
          gradient && 'bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent',
          className
        )}
        {...props}
      />
    )
  }
)
H3.displayName = 'H3'

const P = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, as: Comp = 'p', ...props }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn('leading-7', className)}
        {...props}
      />
    )
  }
)
P.displayName = 'P'

const Lead = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, as: Comp = 'p', ...props }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn('text-xl text-muted-foreground', className)}
        {...props}
      />
    )
  }
)
Lead.displayName = 'Lead'

const Large = React.forwardRef<HTMLDivElement, TypographyProps>(
  ({ className, as: Comp = 'div', ...props }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn('text-lg font-medium', className)}
        {...props}
      />
    )
  }
)
Large.displayName = 'Large'

const Small = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, as: Comp = 'small', ...props }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn('text-sm font-medium', className)}
        {...props}
      />
    )
  }
)
Small.displayName = 'Small'

const Subtle = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, as: Comp = 'p', ...props }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
      />
    )
  }
)
Subtle.displayName = 'Subtle'

export { H1, H2, H3, P, Lead, Large, Small, Subtle }
