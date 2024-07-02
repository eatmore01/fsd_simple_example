import { Todo } from '@/shared/types'
import { useEffect, useState } from 'react'

export function useFilterTodos(data: any) {
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([])

  useEffect(() => {
    if (data && data['todos']) {
      let filtered = [...(data['todos'] as Todo[])]

      filtered = filtered.sort((a, b) => {
        const dateA = new Date(a.createdAt)
        const dateB = new Date(b.createdAt)

        return dateB.getTime() - dateA.getTime()
      })

      console.log(filtered)

      setFilteredTodos(filtered)
    }
  }, [data])

  return { filteredTodos }
}
