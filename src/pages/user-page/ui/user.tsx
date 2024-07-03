import { CompleteTodoUserPreview } from '@/entities/todo/user'
import { UserProfilePreview } from '@/entities/user/user-profile-preview'
import { LogoutBtn } from '@/features/user/user-sidebar'
import { useUserStore } from '@/shared/modal'
import { Box, Button, Loader } from '@/shared/ui'
import { UserCompletedTodoList } from '@widgets/user-completed-todo-list'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const UserP = () => {
  const { back } = useRouter()
  const user = useUserStore((state) => state.user)
  if (!user) return <Loader />

  return (
    <Box className="min-h-[600px]  flex flex-col items-center">
      <header className=" w-full p-4 shadow-md flex items-center justify-between">
        <UserProfilePreview user={user} />
        <LogoutBtn />
      </header>
      <main className="flex-1 w-full  p-4">
        <h2 className="text-xl font-semibold mb-4">Completed Tasks</h2>
        <UserCompletedTodoList />
      </main>
      <Button className="flex items-center justify-center" onClick={() => back()}>
        <ChevronLeft size={20} />
        Back
      </Button>
    </Box>
  )
}
