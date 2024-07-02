import { Todo } from '@/shared/types'
import { create } from 'zustand'

interface TodoStoreState {
  todos: Todo[]
}

interface TodoStoreActions {
  addTodos: (todos: Todo[]) => void
  clearTodos: () => void
}

const useCompletedTodoStore = create<TodoStoreState & TodoStoreActions>((set) => ({
  todos: [],
  addTodos: (todos: Todo[]) => set({ todos: todos }),
  clearTodos: () => set({ todos: [] }),
}))

export { useCompletedTodoStore }
