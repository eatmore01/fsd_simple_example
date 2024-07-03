import { cn } from '@/shared/lib/utils'
import { Badge } from '@/shared/ui/badge'
import { Flag } from 'lucide-react'

interface Props {
  priority: string
}

export const TodoCardPriorityBadge = ({ priority }: Props) => {
  //const getClassName = () => {
  //  if (priority === 'First') return 'bg-red-700 hover:bg-red-700/60'
  //  if (priority === 'Second') return 'bg-orange-600 hover:bg-orange-700/60'
  //  if (priority === 'Third') return 'bg-green-700 hover:bg-green-700/60'
  //}

  //prettier-ignore
  const className = {
    'First': 'bg-red-700 hover:bg-red-700/60',
    'Second': 'bg-orange-600 hover:bg-orange-700/60',
    'Third': 'bg-green-700 hover:bg-green-700/60',
  }[priority]

  return (
    <Badge variant={'emptyColor'} className={cn('mb-1  p-2', className)}>
      <Flag size={20} className="mr-2" />
      {priority}
    </Badge>
  )
}
