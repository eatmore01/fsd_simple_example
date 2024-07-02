import { gql } from '@apollo/client'

export const ADD_TODO = gql`
  mutation addTodo($objects: [todos_insert_input!]!) {
    insert_todos(objects: $objects) {
      affected_rows
    }
  }
`
