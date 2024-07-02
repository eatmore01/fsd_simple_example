'use client'

import { Button } from '@/shared/ui'
import { useParams, useRouter } from 'next/navigation'

interface Params {
  [todosType: string]: string
}

export const EditTodoBtn = ({ todoId }: { todoId: string }) => {
  const { push } = useRouter()
  const params = useParams<Params>()

  const navigateHandler = () => {
    console.log('нажата')
    if (!params) return

    push(`http://localhost:3000/home/${params.todosType}/${todoId}`)
  }

  return (
    <Button onClick={navigateHandler} className="h-5 w-full justify-start" variant={'ghost'}>
      Edit
    </Button>
  )
}
