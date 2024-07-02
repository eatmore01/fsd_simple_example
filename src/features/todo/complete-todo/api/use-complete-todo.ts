import { COMPLETE_TODO } from '@/shared/api'
import { useMutation } from '@apollo/client'

export function useCompleteTodo() {
  const [completeTodo, { loading, error }] = useMutation(COMPLETE_TODO)

  return { completeTodo, loading, error }
}
