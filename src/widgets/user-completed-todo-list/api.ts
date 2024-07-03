import { GET_COMPLETED_TODOS } from '@shared/api'
import { useQuery } from '@apollo/client'

export function useCompletedTodos(authorEmail: string) {
  const { data, loading, error } = useQuery(GET_COMPLETED_TODOS, {
    variables: { authorEmail: authorEmail },
  })

  return { data, loading, error }
}
