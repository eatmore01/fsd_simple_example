import { gql } from '@apollo/client'

export const GET_ALL_TODOS = gql`
  query getIsAllTodos($authorEmail: String!) {
    todos(
      where: {
        isAllViewPost: { _eq: true }
        isComplete: { _eq: false }
        authorEmail: { _eq: $authorEmail }
      }
    ) {
      id
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
