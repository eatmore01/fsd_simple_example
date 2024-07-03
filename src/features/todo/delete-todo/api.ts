import { DELETE_TODO, GET_ALL_TODOS, GET_COMPLETED_TODOS, GET_TODAY_TODOS } from '@shared/api'
import { useMutation } from '@apollo/client'

export function useDeleteTodo(authorEmail: string) {
  const [deleteTODO, { loading, error }] = useMutation(DELETE_TODO, {
    refetchQueries: [
      {
        query: GET_TODAY_TODOS,
        variables: { authorEmail: authorEmail },
      },
      {
        query: GET_ALL_TODOS,
        variables: { authorEmail: authorEmail },
      },
      {
        query: GET_COMPLETED_TODOS,
        variables: { authorEmail: authorEmail },
      },
    ],
  })

  return { deleteTODO, loading, error }
}
