'use client'

import { useModalStore } from '@/shared/modal'
import { Button } from '@/shared/ui'
import { CirclePlus } from 'lucide-react'

export const CreateTodoBtn = () => {
  const { onOpen } = useModalStore()

  return (
    <Button
      variant={'ghost'}
      onClick={() => onOpen('createTodo')}
      className="flex justify-between p-1 rounded-xl bg-transparent hover:bg-transparent"
    >
      <span className="scroll-m-20 text-lg font-semibold tracking-tight flex items-center mb-4">
        <CirclePlus className="mr-2" size={25} /> Create Todo
      </span>
    </Button>
  )
}
