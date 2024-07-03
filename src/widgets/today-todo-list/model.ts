import { createTodoStore, Todo } from '@entities/todo'
import { useEffect } from 'react'

export const useTodayTodoStore = createTodoStore()
export function useAddTodayTodosToStore(data: any, addTodos: (todos: Todo[]) => void) {
  useEffect(() => {
    if (!data) return
    addTodos(data['todos'] as Todo[])
  }, [data, addTodos])
}
