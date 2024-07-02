import { gql } from '@apollo/client'

export const GET_TODAY_TODOS = gql`
  query getTodosSectionTodos($authorEmail: String!) {
    todos(
      where: {
        todosSection: { _eq: "today" }
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
