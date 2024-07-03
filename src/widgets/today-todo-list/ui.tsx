'use client'

import { TodoCard } from '@widgets/todo-card'
import { useUserStore } from '@entities/user'
import { Todo } from '@entities/todo'
import { Box, Loader } from '@/shared/ui'

import { useTodayTodos } from './api'
import { useAddTodayTodosToStore, useTodayTodoStore } from './model'

export const TodayTodoList = () => {
  const user = useUserStore((state) => state.user)

  const { data, loading, error } = useTodayTodos(user?.email || '')

  const todos = useTodayTodoStore((state) => state.todos)

  useAddTodayTodosToStore(data, useTodayTodoStore().addTodos)

  if (loading) return <Loader />
  if (error) return <div>{error.message}</div>
  return (
    <Box className="w-1/2 max-h-[700px] overflow-y-scroll mb-2">
      {todos ? todos.map((todo: Todo, index) => <TodoCard key={index} todo={todo} />) : <h1>No Todos</h1>}
    </Box>
  )
}
