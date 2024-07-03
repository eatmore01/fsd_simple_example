import { ApolloCache, DefaultContext, FetchResult, MutationFunctionOptions, OperationVariables } from '@apollo/client'
import { EditFormState } from '../ui'

export function updateTodo(
  updateTodo: (
    options?: MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>> | undefined
  ) => Promise<FetchResult<any>>,
  todoId: string,
  data: EditFormState,
  priority: string,
  isTodoViewAll: boolean
) {
  updateTodo({
    variables: {
      id: todoId,
      title: data.title,
      description: data.description,
      priority: priority,
      isAllViewPost: isTodoViewAll,
    },
  })
}
