'use client'

import { TodoCard } from '@widgets/todo-card'
import { Todo } from '@/shared/types'
import { Box, Loader } from '@/shared/ui'

import { useAddTodosToStore, useTodayTodoStore, useFilterTodos } from '../model'
import { useTodayTodos } from '../api/get-today-todos'
import { useUserStore } from '@/shared/model'

export function UI() {
  const user = useUserStore((state) => state.user)

  const { data, loading, error } = useTodayTodos(user?.email || '')

  const { addTodos, todos } = useTodayTodoStore()

  const { filteredTodos } = useFilterTodos(data)

  useAddTodosToStore(filteredTodos, addTodos)

  if (loading) return <Loader />
  if (error) return <div>{error.message}</div>
  return (
    <Box className="w-1/2 max-h-[700px] overflow-y-scroll mb-2">
      {todos ? todos.map((todo: Todo, index) => <TodoCard key={index} todo={todo} />) : <h1>No Todos</h1>}
    </Box>
  )
}
