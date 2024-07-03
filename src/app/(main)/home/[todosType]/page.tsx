import { TodosPage } from '@pages/todos'

interface Props {
  params: { todosType: string; todoId: string }
}

const Page = async ({ params }: Props) => {
  return <TodosPage params={params} />
}

export default Page
