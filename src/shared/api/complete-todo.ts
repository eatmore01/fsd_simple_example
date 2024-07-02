import { gql } from '@apollo/client'

export const COMPLETE_TODO = gql`
  mutation completeTodo($id: String!) {
    update_todos(where: { id: { _eq: $id } }, _set: { isComplete: true }) {
      affected_rows
    }
  }
`
