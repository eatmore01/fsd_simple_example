import { Todo } from '@/shared/types'
import { useEffect } from 'react'

export function useAddTodosToStore(data: Todo[], addTodos: (todos: Todo[]) => void) {
  useEffect(() => {
    if (data) {
      addTodos(data)
    }
  }, [data, addTodos])
}
