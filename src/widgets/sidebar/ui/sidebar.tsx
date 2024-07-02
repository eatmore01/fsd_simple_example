'use client'

import { UserSideBarPreview, UserSideBarPreviewSkeleton } from '@/entities/user/user-sidebar-preview'
import { ToggleTheme } from '@features/toggle-theme'
import {
  Box,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@shared/ui'
import { SidebarItem } from './sidebar-item'
import { Atom } from 'lucide-react'
import { routes } from '@/shared/constant'
import { GithubBtn, LogoutBtn, ProfileBtn } from '@features/user/user-sidebar'
import { User } from '@/shared/types'

export const SideBar = ({ user }: { user: User | null | any }) => {
  return (
    <Box className="flex flex-col w-full h-full">
      <header className="flex justify-between p-3 w-full">
        <Box>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                {user ? <UserSideBarPreview user={user} /> : <UserSideBarPreviewSkeleton />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <ProfileBtn />
              <DropdownMenuSeparator />
              {user?.name ? <GithubBtn userName={user.name} /> : <></>}
              <DropdownMenuSeparator />
              <LogoutBtn />
            </DropdownMenuContent>
          </DropdownMenu>
        </Box>
        <ToggleTheme />
      </header>

      <Box>
        <Box className="p-3">
          <SidebarItem Icon={<Atom size={20} className="mr-2" />} title="today" route={routes.today} />
          <SidebarItem Icon={<Atom size={20} className="mr-2" />} title="all" route={routes.all} />
        </Box>
      </Box>
    </Box>
  )
}
