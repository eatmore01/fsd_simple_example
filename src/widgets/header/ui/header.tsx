import {
  Box,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@shared/ui'
import { Columns3, NotebookText, Settings2 } from 'lucide-react'
import { HeaderViewBtn } from './header-view-btn'

interface Props {
  className?: string
}

export const Header = ({ className }: Props) => {
  return (
    <Box className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none hover:bg-selected-sidebar-btn-bg rounded-md text-center">
          <HeaderViewBtn Icon={<Settings2 size={20} className="mr-2" />} title="view settings" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 mr-10">
          <DropdownMenuLabel>Режим отображения</DropdownMenuLabel>
          <Box className="flex  justify-between w-full">
            <Button className="w-1/2 h-fit flex flex-col">
              <NotebookText size={35} />
              <span className="font-">lines</span>
            </Button>
            <Button className="w-1/2 h-fit flex flex-col">
              <Columns3 size={35} />
              <span className="font-">box</span>
            </Button>
          </Box>
          <DropdownMenuSeparator />
          <DropdownMenuItem>просто итем</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>все фильтры будут тут</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  )
}
