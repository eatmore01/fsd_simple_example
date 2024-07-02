'use client'

import { TodoCard } from '@widgets/todo-card'
import { Todo } from '@/shared/types'
import { Box, Loader } from '@/shared/ui'

import { useAllTodoStore, useAddTodosToStore, useFilterTodos } from '../model/'

import { useAllTodos } from '../api'
import { useUserStore } from '@/shared/model'

export const UI = () => {
  const user = useUserStore((state) => state.user)

  const { data, loading, error } = useAllTodos(user?.email || '')

  const { addTodos, todos } = useAllTodoStore()

  const { filteredTodos } = useFilterTodos(data)

  useAddTodosToStore(filteredTodos, addTodos)

  if (loading) return <Loader />
  if (error) return <div>{error.message}</div>
  return (
    <Box className="w-1/2 max-h-[700px] mb-2 overflow-y-scroll">
      {todos ? todos.map((todo: Todo, index) => <TodoCard key={index} todo={todo} />) : <h1>No Todos</h1>}
    </Box>
  )
}
