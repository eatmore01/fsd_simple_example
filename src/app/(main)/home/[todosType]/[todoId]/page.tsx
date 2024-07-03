import { TodoPage } from '@pages/todo'

interface Props {
  params: { todosType: string; todoId: string }
}

const Page = async ({ params }: Props) => {
  return <TodoPage params={params} />
}

export default Page
