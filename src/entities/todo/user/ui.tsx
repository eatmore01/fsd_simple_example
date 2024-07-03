'use client'

import { CompleteTodo, DeleteBtn } from '@features/todo'
import { Box } from '@shared/ui'
import { useRouter } from 'next/navigation'
import { Todo } from '../model'

interface Props {
  todo: Todo
}

export const UI = ({ todo }: Props) => {
  const { push } = useRouter()

  const navHandler = () => {
    push(`/home/all/${todo.id}`)
  }

  // то что я как то не заметил и использовал фичу в ентитис это просто пиздец.
  return (
    <Box
      onClick={navHandler}
      className="flex items-center  rounded-md shadow-md border border-solid border-slate-800 p-2 my-2 h-16 cursor-pointer"
    >
      <CompleteTodo todoId={todo.id} isComplete={true} className="mr-3 items-center" />
      <Box className="w-full flex flex-0 justify-between items-center">
        <h3 className="text-lg font-semibold">{todo.title}</h3>
        <p className="text-gray-600 justify-end">{todo.description}</p>
      </Box>
      <DeleteBtn todoId={todo.id} className="h-full w-1/3 text-center" />
    </Box>
  )
}
