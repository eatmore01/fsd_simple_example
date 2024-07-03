import { GET_TODAY_TODOS } from '@shared/api'
import { useQuery } from '@apollo/client'

export function useTodayTodos(authorEmail: string) {
  const { data, loading, error } = useQuery(GET_TODAY_TODOS, {
    variables: { authorEmail: authorEmail },
  })
  return { data, loading, error }
}
