import { CreateTodoBtn, CreateTodoForm } from '@/features/todo/create-todo'
import { AllTodoList } from '@/widgets/all-todo-list'
import { TodayTodoList } from '@/widgets/today-todo-list'
import { TodosPagePreview } from './todos-page-review'
import { Box } from '@/shared/ui'

interface Params {
  todosType: string
}

export const TodosPage = async ({ params }: { params: Params }) => {
  return (
    <Box className="flex flex-col items-center">
      <TodosPagePreview todosPageTitle={params.todosType} />
      {params.todosType === 'today' ? (
        <TodayTodoList />
      ) : params.todosType === 'all' ? (
        <AllTodoList />
      ) : (
        <></>
      )}
      <CreateTodoBtn />
      <CreateTodoForm todosSection={params.todosType} />
    </Box>
  )
}
