import { gql } from '@apollo/client'

export const GET_COMPLETED_TODOS = gql`
  query getCompletedTodos($authorEmail: String!) {
    todos(where: { isComplete: { _eq: true }, authorEmail: { _eq: $authorEmail } }) {
      id
      title
      description
      createdAt
    }
  }
`
