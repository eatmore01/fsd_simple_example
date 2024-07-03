import { CompleteTodoUserPreview } from '@/entities/todo/user'
import { Box, Loader, ScrollArea } from '@/shared/ui'
import { useCompletedTodos } from './api'
import { useAddCompletedTodosToStore, useCompletedTodoStore } from './model'
import { Todo } from '@entities/todo'
import { useUserStore } from '@shared/modal'

export const UserCompletedTodoList = () => {
  const user = useUserStore((state) => state.user)

  const { data, error, loading } = useCompletedTodos(user?.email || '')

  const todos = useCompletedTodoStore((state) => state.todos)

  useAddCompletedTodosToStore(data, useCompletedTodoStore().addTodos)

  if (loading) return <Loader />
  if (error) return <Box>error: {error.message}</Box>
  return (
    <ScrollArea className="h-[400px]">
      {todos.map((todo: Todo, index) => (
        <CompleteTodoUserPreview key={index} todo={todo} />
      ))}
    </ScrollArea>
  )
}
