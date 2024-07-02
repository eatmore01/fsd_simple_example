import { TodoCardPriorityBadge, TodoCardTaskInfo } from '@/entities/todo'
import { CompleteTodo } from '@/features/todo/complete-todo'
import { DeleteBtn } from '@/features/todo/delete-todo'
import { EditTodoBtn } from '@/features/todo/edit-todo'
import { ShowMore } from '@/features/todo/show-more'
import { Todo } from '@/shared/types'
import { Box } from '@/shared/ui'

import { Card, CardContent, CardFooter } from '@/shared/ui/card'
import { Separator } from '@/shared/ui/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/shared/ui/tooltip'
import { useParams, useRouter } from 'next/navigation'

export interface Params {
  [todosType: string]: string
}

export function TodoCard({ todo }: { todo: Todo }) {
  const { push } = useRouter()
  const params = useParams<Params>()

  const navHandler = () => {
    if (!params) return

    push(`http://localhost:3000/home/${params.todosType}/${todo.id}`)
  }

  return (
    <Card className="w-full border-none p-2 cursor-pointer">
      <CardContent className="flex items-center justify-between">
        <Box className="flex items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="cursor-pointer mr-3">
                <CompleteTodo todoId={todo.id} isComplete={todo.isComplete} />
              </TooltipTrigger>
              <TooltipContent>
                <p className="leading-7">Complete task</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Box onClick={navHandler}>
            <TodoCardTaskInfo title={todo.title} description={todo.description} />
          </Box>
        </Box>
        <ShowMore DeleteBtn={<DeleteBtn todoId={todo.id} />} EditBtn={<EditTodoBtn todoId={todo.id} />} />
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <TodoCardPriorityBadge priority={todo.priority} />
        <Separator />
      </CardFooter>
    </Card>
  )
}
