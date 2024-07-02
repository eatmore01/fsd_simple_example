'use client'

import { getSessionUser } from '@/entities/session/user'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'

import { ArrowDown } from 'lucide-react'
import { UserSideBarPreviewSkeleton } from './user-sidebar-preview-skeleton'
import { User } from '@/shared/types'

export const UserSideBarPreview = ({ user }: { user: User }) => {
  const fallBackName = user.name.substring(0, 2)

  if (!user) return <UserSideBarPreviewSkeleton />

  return (
    <div>
      <div className="flex items-center justify-between">
        <Avatar className="w-8 h-8 mr-1">
          {user.image ? (
            <AvatarImage src={user.image} alt="userImage" />
          ) : (
            <AvatarFallback>{fallBackName}</AvatarFallback>
          )}
        </Avatar>
        <span className="flex-1 text-foreground">{user.name}</span>
        <ArrowDown size={20} />
      </div>
    </div>
  )
}
