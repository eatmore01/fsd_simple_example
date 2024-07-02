import { cn } from '@/shared/lib/utils'
import { Badge } from '@/shared/ui/badge'
import { Flag } from 'lucide-react'

export const TodoCardPriorityBadge = ({ priority }: { priority: string }) => {
  return (
    <Badge
      variant={'emptyColor'}
      className={cn(
        'mb-1  p-2',
        priority === 'First'
          ? 'bg-red-700 hover:bg-red-700/60'
          : priority === 'Second'
          ? 'bg-orange-600 hover:bg-orange-700/60'
          : priority === 'Third' && 'bg-green-700 hover:bg-green-700/60',
      )}
    >
      <Flag size={20} className="mr-2" />
      {priority}
    </Badge>
  )
}
