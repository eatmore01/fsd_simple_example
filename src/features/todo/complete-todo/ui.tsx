'use client'

import { Box, Checkbox } from '@/shared/ui'
import { useCompleteTodo, completeTodoHandler } from './api'
import { useParams } from 'next/navigation'
import { useUserStore } from '@/shared/modal'

interface Props {
  todoId: string
  isComplete: boolean
  className?: string
}

export const CompleteTodo = ({ todoId, isComplete, className }: Props) => {
  const user = useUserStore((state) => state.user)
  const params = useParams()

  const { completeTodo } = useCompleteTodo()

  const completeHandler = () => {
    if (!params) return

    completeTodoHandler({
      completeTodo: completeTodo,
      todoId: todoId,
      todosType: params.todosType as string,
      authorEmail: user?.email || '',
    })
  }

  return (
    <Box className={className}>
      <Checkbox defaultChecked={isComplete} disabled={isComplete} onClick={completeHandler} />
    </Box>
  )
}
