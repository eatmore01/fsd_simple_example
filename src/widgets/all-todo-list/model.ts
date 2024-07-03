import { Todo } from '@entities/todo'
import { useEffect } from 'react'
import { createTodoStore } from '@entities/todo'

export const useAllTodosStore = createTodoStore()

export function useAllTodosToStore(data: any, addTodos: (todos: Todo[]) => void) {
  useEffect(() => {
    if (!data) return
    addTodos(data['todos'] as Todo[])
  }, [data, addTodos])
}
