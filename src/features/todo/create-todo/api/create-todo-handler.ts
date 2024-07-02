import {
  ApolloCache,
  DefaultContext,
  FetchResult,
  MutationFunctionOptions,
  OperationVariables,
} from '@apollo/client'
import { TaskForm } from '../ui/todo-form'
import { getNewUUID } from '@/shared/utils'

export const createTodoHandler = (
  addTodo: (
    options?:
      | MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>>
      | undefined,
  ) => Promise<FetchResult<any>>,
  data: TaskForm,
  authorEmail: string,
  priority: string,
  isAllViewPost: boolean,
  todosSection: string,
) => {
  const timestamp = Date.now()
  const fullDate = new Date(timestamp)
  const date = fullDate.toISOString()

  addTodo({
    variables: {
      objects: [
        {
          id: getNewUUID(),
          authorEmail: authorEmail,
          title: data.title,
          description: data.description,
          priority: priority,
          isAllViewPost: isAllViewPost,
          todosSection: todosSection,
          isComplete: false,
          createdAt: date,
        },
      ],
    },
  })
}
