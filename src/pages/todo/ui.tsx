import { EditTodoForm } from '@features/todo'
import { Box, Dialog, DialogContent, DialogHeader, DialogTitle } from '@shared/ui'

interface Params {
  params: { todosType: string; todoId: string }
}

export const TodoPage = async ({ params }: Params) => {
  return (
    <Dialog open={true}>
      <DialogContent className="h-[700px] w-screen">
        <DialogHeader>
          <DialogTitle>
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">Todo</h1>
          </DialogTitle>
        </DialogHeader>
        <Box className="flex flex-col h-full">
          <EditTodoForm todoId={params.todoId} />
        </Box>
      </DialogContent>
    </Dialog>
  )
}
