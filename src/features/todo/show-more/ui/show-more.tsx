import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

interface Props {
  EditBtn: ReactNode
  DeleteBtn: ReactNode
}

export const UI = ({ EditBtn, DeleteBtn }: Props) => {
  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <ChevronDown size={20} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>More Action</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>{EditBtn}</DropdownMenuItem>
            <AlertDialogTrigger className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5  text-sm outline-none transition-colors hover:bg-accent focus:text-accent-foreground">
              <span className="ml-3.5">Delete</span>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your todo and remove
                  your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>{DeleteBtn}</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </AlertDialog>
  )
}
