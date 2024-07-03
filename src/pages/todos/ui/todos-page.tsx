import { CreateTodoBtn, CreateTodoForm } from '@features/todo/create-todo'
import { AllTodoList } from '@widgets/all-todo-list'
import { TodayTodoList } from '@widgets/today-todo-list'
import { TodosPagePreview } from './todos-page-review'
import { Box } from '@shared/ui'

interface Params {
  todosType: string
}

export const TodosPage = async ({ params }: { params: Params }) => {
  //prettier-ignore
  const currentTodoList = {
      'today': <TodayTodoList />,
      'all': <AllTodoList />
  }[params.todosType]

  return (
    <Box className="flex flex-col items-center">
      <TodosPagePreview todosPageTitle={params.todosType} />
      {currentTodoList}
      <CreateTodoBtn />
      <CreateTodoForm todosSection={params.todosType} />
    </Box>
  )
}
