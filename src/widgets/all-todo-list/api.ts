import { GET_ALL_TODOS } from '@shared/api'
import { useQuery } from '@apollo/client'

export function useAllTodos(authorEmail: string) {
  const { data, loading, error } = useQuery(GET_ALL_TODOS, {
    variables: { authorEmail: authorEmail },
  })

  return { data, loading, error }
}
