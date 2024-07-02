import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface TaskForm {
  title: string
  description: string
}

export function useTodoFormModel() {
  const [priority, setPriority] = useState<string>('First')
  const [isTodoViewAll, setIsTodoViewAll] = useState<boolean>(true)
  const { register, handleSubmit, reset } = useForm<TaskForm>()

  return {
    register,
    handleSubmit,
    setPriority,
    priority,
    isTodoViewAll,
    setIsTodoViewAll,
    reset,
  }
}
