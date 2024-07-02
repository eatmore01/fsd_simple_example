import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { Params } from '../ui/todo-card'

export function useTodoPageNavigate(
  todoId: string,
  params: Params | null,
  push: (href: string, options?: NavigateOptions) => void,
) {
  if (!params) return

  push(`http://localhost:3000/home/${params.todosType}/${todoId}`)
}
