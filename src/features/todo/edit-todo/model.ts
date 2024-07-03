import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { EditFormState } from './ui'

export function useEditTodoFormModel(data: any) {
  const [priority, setPriority] = useState<string>('First')
  const [isTodoViewAll, setIsTodoViewAll] = useState<boolean>(true)
  const { register, handleSubmit, reset } = useForm<EditFormState>()

  const todo = useMemo(() => {
    return data ? data['todos_by_pk'] : null
  }, [data])

  useEffect(() => {
    if (todo) {
      setPriority(todo.priority)
      setIsTodoViewAll(todo.isAllViewPost)
      reset({
        title: todo.title,
        description: todo.description,
      })
    }
  }, [todo, reset])

  return {
    todo,
    register,
    handleSubmit,
    setPriority,
    priority,
    isTodoViewAll,
    setIsTodoViewAll,
    reset,
  }
}
