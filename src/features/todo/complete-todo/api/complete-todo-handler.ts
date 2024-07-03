import { GET_ALL_TODOS, GET_TODAY_TODOS } from '@shared/api'
import { ApolloCache, DefaultContext, FetchResult, MutationFunctionOptions, OperationVariables } from '@apollo/client'

interface Props {
  completeTodo: (
    options?: MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>> | undefined
  ) => Promise<FetchResult<any>>
  todoId: string
  todosType: string
  authorEmail: string
}

export function completeTodoHandler({ completeTodo, todoId, todosType, authorEmail }: Props) {
  completeTodo({
    variables: { id: todoId },
    //@ts-ignore - because values is note reads and fire red color
    refetchQueries: (result) => {
      if (todosType === 'today') {
        return [
          {
            query: GET_TODAY_TODOS,
            variables: { authorEmail: authorEmail },
          },
        ]
      } else if (todosType === 'all') {
        return [
          {
            query: GET_ALL_TODOS,
            variables: { authorEmail: authorEmail },
          },
        ]
      }

      return []
    },
  })
}
