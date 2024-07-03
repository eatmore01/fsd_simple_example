import { Todo } from './todo'
import create, { StateCreator } from 'zustand'

export interface TodoStoreState {
  todos: Todo[]
}

export interface TodoStoreActions {
  addTodos: (todos: Todo[]) => void
  clearTodos: () => void
}

type TodoStore = TodoStoreState & TodoStoreActions

const todosStore: StateCreator<TodoStore> = (set) => ({
  todos: [],
  addTodos: (todos: Todo[]) => {
    const filteredTodos = [...todos].sort((a, b) => {
      const dateA = new Date(a.createdAt)
      const dateB = new Date(b.createdAt)
      return dateB.getTime() - dateA.getTime()
    })
    set({ todos: filteredTodos })
  },
  clearTodos: () => set({ todos: [] }),
})

export const createTodoStore = () => create<TodoStore>(todosStore)
