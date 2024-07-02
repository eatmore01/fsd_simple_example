import { CompleteTodoUserPreview } from '@/entities/todo/user'
import { Box, Loader, ScrollArea } from '@/shared/ui'
import { useCompletedTodos } from '../api/use-completed-todos'
import { useCompletedTodoStore } from '../model/completed-todos-store'
import { useAddTodosToStore } from '../model/add-todos-to-store'
import { useFilterTodos } from '../model/filtered-todos'
import { Todo } from '@/shared/types'
import { useUserStore } from '@shared/model'

export const UserCompletedTodoList = () => {
  const user = useUserStore((state) => state.user)
  console.log(user)

  const { data, error, loading } = useCompletedTodos(user?.email || '')
  const { filteredTodos } = useFilterTodos(data)
  const { addTodos, todos } = useCompletedTodoStore()
  useAddTodosToStore(filteredTodos, addTodos)

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
