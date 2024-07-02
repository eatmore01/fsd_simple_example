import { gql } from '@apollo/client'

export const UPDATE_TODO = gql`
  mutation updateTodo(
    $id: String!
    $title: String!
    $description: String
    $priority: String!
    $isAllViewPost: Boolean!
  ) {
    update_todos_by_pk(
      pk_columns: { id: $id }
      _set: {
        description: $description
        isAllViewPost: $isAllViewPost
        priority: $priority
        title: $title
      }
    ) {
      id
    }
  }
`
