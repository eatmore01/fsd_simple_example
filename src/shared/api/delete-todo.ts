import { gql } from '@apollo/client'

export const DELETE_TODO = gql`
  mutation deleteTODO($id: String!) {
    delete_todos(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`
