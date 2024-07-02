import { Box, Button } from '@/shared/ui'

import { ReactNode } from 'react'
import { SideBarItemNavigate } from './model/sidebar-item-navigate'
import { useParams } from 'next/navigation'
import { cn } from '@/shared/lib/utils'

interface Props {
  Icon: ReactNode
  title: string
  className?: string
  route: string
}

interface Params {
  [todosType: string]: string
}

export const SidebarItem = ({ title, Icon, className, route }: Props) => {
  const params = useParams<Params>()

  return (
    <Box className={className}>
      <form action={() => SideBarItemNavigate(route)}>
        <Button
          className={cn(
            'flex items-center justify-between p-2 w-64',
            params?.todosType === title ? 'bg-selected-btn-bg' : ''
          )}
        >
          <Box className="flex justify-center items-center">
            {Icon}
            <span className="text-foreground">{title}</span>
          </Box>
        </Button>
      </form>
    </Box>
  )
}
