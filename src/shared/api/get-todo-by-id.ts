import { gql } from '@apollo/client'

export const GET_TODO_BY_ID = gql`
  query getTodoById($id: String!) {
    todos_by_pk(id: $id) {
      id
      authorEmail
      title
      description
      isAllViewPost
      todosSection
      priority
      isComplete
      createdAt
    }
  }
`
