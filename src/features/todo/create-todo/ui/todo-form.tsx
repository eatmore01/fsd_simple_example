'use client'

import { Box, Button, Dialog, DialogContent, DialogHeader, DialogTitle, Loader } from '@shared/ui'
import { Input } from '@shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'
import { TodoPriority } from '@/shared/constant'
import { SubmitHandler } from 'react-hook-form'
import { Flag } from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@shared/ui/select'
import { useModalStore, useUserStore } from '@/shared/model'

import { createTodoHandler } from '../api/create-todo-handler'
import { useCreateTodo } from '../api/use-create-todo'
import { useTodoFormModel } from '../model/todo-form-model'

export interface TaskForm {
  title: string
  description: string
}

export const Form = ({ todosSection }: { todosSection: string }) => {
  const user = useUserStore((state) => state.user)

  const { addTodo, loading, error } = useCreateTodo(user?.email || '')
  const { setPriority, priority, isTodoViewAll, setIsTodoViewAll, handleSubmit, register, reset } = useTodoFormModel()
  const { isOpen, onClose, type } = useModalStore()

  const modalIsOpen = isOpen && type == 'createTodo'

  const onSubmit: SubmitHandler<TaskForm> = (data) => {
    if (user?.email) {
      createTodoHandler(addTodo, data, user.email, priority, isTodoViewAll, todosSection)
      reset()
      onClose()
    }
  }

  if (loading) return <Loader />
  if (error) return <div>{error.message}</div>
  return (
    <Box className="w-1/2 flex justify-center">
      <Dialog open={modalIsOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-4">Create Post</DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full ">
              <Box className="mb-3">
                <Input placeholder="task title" {...register('title')} />
              </Box>

              <Box className="mb-3">
                <Textarea placeholder="task description" {...register('description')} />
              </Box>

              <Box className="flex justify-between items-center">
                <Select onValueChange={(v) => setPriority(v)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Priority</SelectLabel>
                      {[...Object.values(TodoPriority)].map((pr: any, index) => (
                        <SelectItem key={index} value={pr}>
                          <Box className="flex justify-between p-1 bg-transparent">
                            <Flag size={20} className="mr-2" />
                            <span>{pr}</span>
                          </Box>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Box>
                  <Select
                    onValueChange={(v) => {
                      if (v === 'visible') {
                        setIsTodoViewAll(true)
                      } else {
                        setIsTodoViewAll(false)
                      }
                    }}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Post have in all?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Visible mode</SelectLabel>
                        <SelectItem value="visible">
                          <span>Visible</span>
                        </SelectItem>
                        <SelectItem value="hidden">
                          <span>Hidden</span>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Box>
                <Box>
                  <Button type="submit" variant="ghost">
                    Create Todo
                  </Button>
                </Box>
              </Box>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Box>
  )
}
