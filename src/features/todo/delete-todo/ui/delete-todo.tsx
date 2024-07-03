'use client'

import { Button, Loader } from '@/shared/ui'
import { useDeleteTodo } from '../api'
import { cn } from '@/shared/lib/utils'
import { useUserStore } from '@/shared/modal'

export const Btn = ({ todoId, className }: { todoId: string; className?: string }) => {
  const user = useUserStore((state) => state.user)

  const { deleteTODO, error, loading } = useDeleteTodo(user?.email || '')

  const deleteHandler = () => {
    deleteTODO({
      variables: {
        id: todoId,
      },
    })
  }

  if (loading) return <Loader />
  if (error) return <div>error: {error.message}</div>
  return (
    <Button onClick={deleteHandler} className={cn('flex items-center justify-between w-full h-6', className)}>
      <span>Delete</span>
    </Button>
  )
}
