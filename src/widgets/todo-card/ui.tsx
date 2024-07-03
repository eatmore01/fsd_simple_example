import { ShowMore, EditTodoBtn, DeleteBtn, CompleteTodo } from '@features/todo'
import { Todo, TodoCardTaskInfo, TodoCardPriorityBadge } from '@entities/todo'

import {
  Box,
  Card,
  CardContent,
  CardFooter,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@shared/ui'
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
        <ShowMore
          renderDeleteBtn={() => <DeleteBtn todoId={todo.id} />}
          renderEditBtn={() => <EditTodoBtn todoId={todo.id} />}
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <TodoCardPriorityBadge priority={todo.priority} />
        <Separator />
      </CardFooter>
    </Card>
  )
}
