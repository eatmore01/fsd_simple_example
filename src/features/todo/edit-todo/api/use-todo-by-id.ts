import { GET_TODO_BY_ID } from '@/shared/api'
import { useQuery } from '@apollo/client'

export function useTodoById(todoId: string) {
  const { data, loading, error } = useQuery(GET_TODO_BY_ID, {
    variables: {
      id: todoId,
    },
  })

  return { data, loading, error }
}
