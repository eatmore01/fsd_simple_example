import { GET_TODO_BY_ID } from '@/shared/api'
import { UPDATE_TODO } from '@/shared/api'
import { useMutation } from '@apollo/client'

export function useUpdateTodo(todoId: string) {
  const [updateTodo, { loading: UpdateLoading, error: UpdateError }] = useMutation(UPDATE_TODO, {
    refetchQueries: [
      {
        query: GET_TODO_BY_ID,
        variables: { id: todoId },
      },
    ],
  })

  return { updateTodo, UpdateLoading, UpdateError }
}
