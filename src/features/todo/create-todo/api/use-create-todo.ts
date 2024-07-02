import { ADD_TODO, GET_ALL_TODOS, GET_TODAY_TODOS } from '@/shared/api'
import { useMutation } from '@apollo/client'

export function useCreateTodo(authorEmail: string) {
  const [addTodo, { data, loading, error }] = useMutation(ADD_TODO, {
    refetchQueries: [
      {
        query: GET_ALL_TODOS,
        variables: { authorEmail: authorEmail },
      },
      {
        query: GET_TODAY_TODOS,
        variables: { authorEmail: authorEmail },
      },
    ],
  })

  return { addTodo, data, loading, error }
}
