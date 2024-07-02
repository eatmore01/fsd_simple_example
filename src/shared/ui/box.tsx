import * as React from 'react'
import { cn } from '@shared/lib/utils'

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {}

//для себя поясняю что forwardRef позволяет передать предать реф родительского элемента(Box) в дочерний, тоесть div

const Box = React.forwardRef<HTMLDivElement, BoxProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('bg-background text-foreground', className)} {...props} />
})

Box.displayName = 'Box' //отображает имя компонента в девтулзах

export { Box }
