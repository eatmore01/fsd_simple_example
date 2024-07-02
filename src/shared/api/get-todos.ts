import { gql } from '@apollo/client'

export const GET_TODOS = gql`
  query GetTodos {
    todos {
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
